import User from '../collection';
import Conference from '../../conferences/collection';

Meteor.publish('currentUser', function() {
  return User.find({_id: this.userId});
});

Meteor.publish('user.watchings', function() {
  const user = User.findOne({_id: this.userId});
  const ids = user.watchings || [];
  return Conference.find({_id: {$in: ids}});
});
