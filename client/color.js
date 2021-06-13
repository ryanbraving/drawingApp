ColorPicker5 = function () {
  // var self = this;
  // var circleRadii = [40, 20, 10];
  // var svg2;
  var coloursYGB = ["#FFFFDD","#AAF191","#80D385","#61B385","#3E9583","#217681","#285285","#1F2D86","#000086"];
  console.log("ColorPicker function here");
  // var createSvg2 = function() {
    // svg2 = d3.select('#colorPicker').append('svg2')
      // .attr('width', 400)
      // .attr('height',100);
  var tempSelection = d3.select("#colorPicker");
 
 var svgSelection = tempSelection.append("svg")
                                .attr("width", 1200)
                                .attr("height", 200);

 // var circleSelection = svgSelection.append("circle")
 //                                  .attr("cx", 25)
 //                                  .attr("cy", 25)
 //                                  .attr("r", 25)
 //                                  .style("fill", "purple");
var defs = svgSelection.append("defs");

var linearGradient = defs.append("linearGradient")
    .attr("id", "linear-gradient")
   
linearGradient
    .attr("x1", "30%")
    .attr("y1", "30%")
    .attr("x2", "70%")
    .attr("y2", "70%");

//Set the color for the start (0%)
// linearGradient.append("stop") 
//     .attr("offset", "0%")   
    // .attr("stop-color", "#000000"); //light blue

//Set the color for the end (100%)
// linearGradient.append("stop") 
//     .attr("offset", "100%")   
    // .attr("stop-color", "#ffffff"); //dark blue

//Draw the rectangle and fill with gradient
svgSelection.append("rect")
  .attr("width", 1200)
  .attr("height", 50)
  .style("fill", "url(#linear-gradient)");


linearGradient.selectAll("stop") 
    .data([                             
        {offset: "0%", color: "#2c7bb6"}, 
        {offset: "12.5%", color: "#00a6ca"},  
        {offset: "25%", color: "#00ccbc"}, 
        {offset: "37.5%", color: "#90eb9d"}, 
        {offset: "50%", color: "#ffff8c"}, 
        {offset: "62.5%", color: "#f9d057"}, 
        {offset: "75%", color: "#f29e2e"},      
        {offset: "87.5%", color: "#e76818"},        
        {offset: "100%", color: "#d7191c"}    
      ])                  
    .enter().append("stop")
    .attr("offset", function(d) { return d.offset; })   
    .attr("stop-color", function(d) { return d.color; });
}




