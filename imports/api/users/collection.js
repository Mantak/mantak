import { Class } from 'meteor/jagi:astronomy';

const Email = Class.create({
  name: 'Email',
  fields: {
    'address': String,
    'verified': Boolean,
  },
});

const Wechat = Class.create({
  name:   'Wechat',
  fields: {
    'sex':      Number,
    'avatar':   String,
    'username': String,
    'language': String,
    'city':     String,
    'province': String,
    'country':  String,
  }
});

const User = Class.create({
  name:       'User',
  collection: Meteor.users,
  fields:     {
    openId: {
      type:     String,
      optional: true,
    },
    username: {
      type:     String,
      optional: true,
    },
    emails: {
      type:     [Email],
      optional: true,
    },
    services: {
      type:     Object,
      optional: true,
    },
    roles: {
      type:     Object,
      optional: true,
    },
    wechat: {
      type:     Wechat,
      optional: true,
    },
    watchings: {
      type:     [String],
      optional: true,
    },
    createdAt: Date,
  },
});

export default User;
