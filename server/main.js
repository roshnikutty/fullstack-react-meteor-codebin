import { Meteor } from 'meteor/meteor';
import {Bins} from '../imports/collections/bins';

Meteor.startup(() => {
  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId });
    //publications are another location where we can have access to this.userId
  })
});
