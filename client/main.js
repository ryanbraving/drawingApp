import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

// import './main.html';
import './drawing.js';
import './color.js';

points = new Meteor.Collection('pointsCollection');
var canvas;

// Use these for drawing more interesting shapes
var lastX=0;
var lastY=0;
var strokeWidth = 1;
var thickness=1;
var strokeColor = "black";
var setColor1 = "black";

Meteor.startup( function() {
  
  // color = new ColorPicker();
  console.log("11111111")
  canvas = new Canvas();

  Deps.autorun( function() {
    var data = points.find({}).fetch();

    if (canvas) {
      canvas.draw(data);
    }
  });
});

// Template.wall.rendered = function() {
//   $('#cp3').colorpicker({
//       color: strokeColor,
//       format: 'rgb',
//       // horizontal : true,
//       // inline: true,
//       // align: 'left',
//   });
// }



Template.wall.events({

  // "changeColor .input-group": function(event) {
  //   console.log("hiiiiiii");
  //   strokeColor = $('#cp3').colorpicker('getValue');
  // },

  "click button.clear": function (event) {
    Meteor.call('clear', function() {
      canvas.clear();
    });
  },

  //choose a color. Initialise the last vals, otherwise a stray line will appear.

})

var markPoint = function() {

  var offset = $('#canvas').offset();

// In the first frame, lastX and lastY are 0.
// This means the line gets drawn to the top left of the screen
// Which is annoying, so we test for this and stop it happening.

      if (lastX==0) {// check that x was something not top-left. should probably set this to -1
        lastX = (event.pageX - offset.left);
        lastY = (event.pageY - offset.top);
      }
      points.insert({
        //this draws a point exactly where you click the mouse
      // x: (event.pageX - offset.left),
      // y: (event.pageY - offset.top)});



        //1) Algorithmic mouse follower
      // x: (event.pageX - offset.left)+(Math.cos((event.pageX/10  ))*30),
      // y: (event.pageY - offset.top)+(Math.sin((event.pageY)/10)*30)});

        //2) draw a line - requires you to change the code in drawing.js
        x: (event.pageX - offset.left),
        y: (event.pageY - offset.top),
        x1: lastX,
        y1: lastY,
        // I could calculate the line thickness from the distance
        // between current position and last position
        // w: 0.05*(Math.sqrt(((event.pageX - offset.left)-lastX) * (event.pageX - offset.left)
        //  + ((event.pageY - offset.top)-lastY) * (event.pageY - offset.top))),
        // Or I could just set the line thickness using buttons and variable
        w: thickness,
        // I can also use strokeColor, defined by a selection
        // c: strokeColor,
        c: setColor1,


      }); // end of points.insert()

        lastX = (event.pageX - offset.left);
        lastY = (event.pageY - offset.top);

}

Template.canvas.events({
  'click': function (event) {
    markPoint();
  },
  'mousedown': function (event) {
    Session.set('draw', true);
  },
  'mouseup': function (event) {
    Session.set('draw', false);
    lastX=0;
    lasyY=0;
  },
  'mousemove': function (event) {
    if (Session.get('draw')) {
      markPoint();
    }
  }
});

setColor1 = '';
thickness = '';
$(document).ready(function(){
  $('button').click(function() {
      setColor1 = $(this).css('background-color');
      thickness = $(this).text();
      console.log(thickness);
      $(".btn2").css("background-color", setColor1);
});
});

