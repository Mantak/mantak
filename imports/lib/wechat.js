export function loginWithWechat() {
  const appId = Meteor.settings.public.AppId;
  const host = window.location.origin;
  const path = window.location.pathname;
  const routing = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${host}/wechatLogin&response_type=code&scope=snsapi_userinfo&state=${path}#wechat_redirect`;
  window.location.href = routing;
}
