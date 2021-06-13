// import { Meteor } from 'meteor/meteor';

// Meteor.startup(() => {
//   // code to run on server at startup
// });

points = new Meteor.Collection('pointsCollection');

Meteor.methods({
  'clear': function () {
    points.remove({});
  }
});