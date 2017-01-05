import { HTTP } from 'meteor/http';
import { Accounts } from 'meteor/accounts-base';

import { CryptoJs } from 'meteor/jparker:crypto-sha1';
import User from '/imports/api/users/collection';

const  wechatConfig = {
  appId:           'wxc50410ac4f180962',
  appSecret:       '9771f1eb8698a118f4eb5068c96b543b',
  accessToken:     '',
  ticket:          '',
  signature:       '',
  expires_in:      0,
  timestamp:       0,
  sign_expires_in: 0,
  sign_timestamp:  0,
};

Meteor.methods({
  '__wechat.getAccessToken'() {
     const nowtime = parseInt(new Date().getTime() / 1000);
     // 减 300 是为了提前 5 分钟就更新 accessToken，防止过了 expires_in 秒再更新时间隙时间出现问题
     if (wechatConfig.expires_in === 0 || (nowtime - wechatConfig.timestamp) > wechatConfig.expires_in - 300) {
       // 获取新的 accessToken
       const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${wechatConfig.appId}&secret=${wechatConfig.appSecret}`;
     try {
       const result = HTTP.get(url);
       console.log('result =', result);
       const jsonContent = JSON.parse(result.content);
       wechatConfig.expires_in  = jsonContent.expires_in;
       wechatConfig.accessToken = jsonContent.access_token;
       wechatConfig.timestamp   = nowtime;
     } catch (e) {
       console.log(e)
       return 'error: ' + e;
     }
    } else {
      const result = HTTP.get('https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token=' + wechatConfig.accessToken);
      const jsonResult = JSON.parse(result.content);
      if (jsonResult.errcode === 40001) {
        // accessToken 可能被外部重新申请过，导致使用了已经过期的 accessToken 出错
        console.log("accessToken 40001 error, reload");
        wechatConfig.expires_in = 0;
        return arguments.callee();
      }
    }
    return wechatConfig.accessToken;
  },
  '__wechat.getTicketUseAccessToken'(accessToken) {
    var nowtime = parseInt(new Date().getTime() / 1000);

    if (wechatConfig.sign_expires_in === 0 || (nowtime - wechatConfig.sign_timestamp) > wechatConfig.sign_expires_in - 300) {
      try {
        const url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${accessToken}&type=jsapi`
        const result = HTTP.get(url);
        const jsonContent = JSON.parse(result.content);
        wechatConfig.sign_expires_in  = jsonContent.expires_in;
        wechatConfig.ticket = jsonContent.ticket;
        wechatConfig.sign_timestamp   = nowtime;
      } catch (e) {
        console.log(e);
        throw Meteor.Error(e.reason);
      }
    }
    console.log(wechatConfig)
    console.log("server-log-----------------ticket------------------")
    console.log(`wechatConfig.ticket: ${wechatConfig.ticket}`)
    return wechatConfig.ticket;
  },
  '__wechat.getSignUseTicketAndUrl'(ticket, url) {
    var ret = {
      jsapi_ticket: ticket,
      nonceStr: Meteor.call("__wechat.createNonceStr"),
      timestamp: Meteor.call("__wechat.createTimestamp"),
      url: url
    };
    var string = Meteor.call("__raw", ret);
    ret.signature = CryptoJS.SHA1(string).toString();
    ret.appId = wechatConfig.appId;
    console.log("server-log------------signature----------------")
    console.log(ret)
    return ret;
  },
  '__wechat.createNonceStr'() {
    return Math.random().toString(36).substr(2, 15);
  },
  '__wechat.createTimestamp'() {
    return parseInt(new Date().getTime() / 1000) + '';
  },
  '__raw'(args) {
    var keys = Object.keys(args);
    keys = keys.sort();
    var newArgs = {};
    keys.forEach(function (key) {
      newArgs[key.toLowerCase()] = args[key];
    });

    var string = '';
    for (var k in newArgs) {
      string += '&' + k + '=' + newArgs[k];
    }
    string = string.substr(1);
    console.log("server-log-------------------raw-----------------------")
    console.log(string)
    return string;
  },

  '__getOpenId'(code) {
    const appId = wechatConfig.appId;
    const appSecret = wechatConfig.appSecret;
    const getOpenIdRequestUrl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&`
        + `secret=${appSecret}&`
        + `code=${code}&`
        + 'grant_type=authorization_code';
    try {
      const openIdResult = HTTP.get(getOpenIdRequestUrl);
      const openIdContent = JSON.parse(openIdResult.content);
      return openIdContent;
    }catch(e) {
      return e;
    }
  },

  'wechat.signature': function(url) {
    const accessToken = Meteor.call("__wechat.getAccessToken");
    const ticket = Meteor.call("__wechat.getTicketUseAccessToken", accessToken);
    const result = Meteor.call("__wechat.getSignUseTicketAndUrl", ticket, url)
    return result;
  },


  'wechat.getUserProfile'({openId}) {
    const accessToken = Meteor.call("__wechat.getAccessToken");
    try {
      const result = HTTP.get(`https://api.weixin.qq.com/cgi-bin/user/info?access_token=${accessToken}&openid=${openId}&lang=zh_CN`);
      const jsonContent = JSON.parse(result.content);
      return jsonContent
    } catch (e) {
      console.log(e);
      throw Meteor.Error(e.reason);
    }
  },

  'wechat.getProfile'(code) {
    const openIdContent = Meteor.call('__getOpenId', code);
    const accessToken = openIdContent.access_token;
    const openId = openIdContent.openid;
    const getProfileRequestUrl = 'https://api.weixin.qq.com/sns/userinfo?'
      + `access_token=${accessToken}&`
      + `openid=${openId}`
      + '&lang=zh_CN';
    const profileReqResult = HTTP.get(getProfileRequestUrl);
    const profileContent = JSON.parse(profileReqResult.content);

    const result = {
      openId: profileContent .openid,
      wechat: {
        username: profileContent.nickname,
        avatar:   profileContent.headimgurl,
        sex:      profileContent.sex,
        language: profileContent.language,
        city:     profileContent.city,
        province: profileContent.province,
        country:  profileContent.country
      }
    };
    return result;
  },

  'wechat.getPassword'(code) {
    const openIdContent = Meteor.call('__getOpenId', code);
    const openId = openIdContent.openid;
    const user = User.findOne({openId: openId});
    let result = '';
    if (!!user) {
      const newPassword = String(Math.floor(Math.random() * 900000) + 100000);
      Accounts.setPassword(user._id, newPassword);
      result = newPassword;
    } else {
      result = false;
    }
    return result;
  },
});

Accounts.registerLoginHandler(function(loginRequest) {
  const openid = loginRequest.openId;
  if (!openid) {
    return undefined;
  }
  let userId;
  // 如果已经登录，但是没有openId，则要绑定用户帐号和微信帐号
  if (this.userId) {
    const user = User.findOne(this.userId);
    user.openId = openid;
    user.wechat = loginRequest.wechat;
    user.save();
    userId = this.userId;
  } else {
    // 如果没有登录登录，则要判断用户是否已经注册
    const user = User.findOne({openId: openid});
    if (!user) {
      loginRequest.createdAt = new Date();
      userId = Meteor.users.insert(loginRequest);
    } else {
      userId = user._id;
    }
  }

  return {
    userId: userId,
  };
});
