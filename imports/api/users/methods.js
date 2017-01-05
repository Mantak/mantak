import User from './collection';

Meteor.methods({
  'user.addWatching'(userId, confId) {
    const user = User.findOne(userId);
    if (!!user.watchings) {
      user.watchings = [ ...new Set([confId, ...user.watchings])];
    } else {
      user.watchings = [confId];
    }
    user.save();
  },
});
