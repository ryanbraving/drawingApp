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


//A color scale
// var colorScale = d3.scale.linear()
//     .range(["#2c7bb6", "#00a6ca","#00ccbc","#90eb9d","#ffff8c","#f9d057","#f29e2e","#e76818","#d7191c"]);

// //Append multiple color stops by using D3's data/enter step
// linearGradient.selectAll("stop") 
//     .data( colorScale.range() )                  
//     .enter().append("stop")
//     .attr("offset", function(d,i) { return i/(colorScale.range().length-1); })
//     .attr("stop-color", function(d) { return d; });





// var rectSelection = svgSelection.append("rect")
//                                   .attr("width", 1200)
//                                   .attr("height", 30)
//                                   // .style("fill", "purple");
//                                   .style("fill", "url(#linear-gradient)");


// svg.append("rect")
//   .attr("width", 300)
//   .attr("height", 20)
//   .style("fill", "url(#linear-gradient)");

//  var defs = svgSelection.append("defs"); 
//  var linearGradient = defs.append("linearGradient")
//     // .attr("id", "linear-gradient");
//     .attr("id", "gradient-ygb-colors")
//     .attr("x1", "0%").attr("y1", "0%")
//     .attr("x2", "100%").attr("y2", "0%")
//     linearGradient.append("stop") 
//     .attr("offset", "0%")   
//     .attr("stop-color", "#ffa474"); //light blue

// //Set the color for the end (100%)
//     linearGradient.append("stop") 
//     .attr("offset", "100%")   
//     .attr("stop-color", "#8b0000"); //dark blue

//     .selectAll("stop") 
//     .data(coloursYGB)                  
//     .enter().append("stop") 
//     .attr("offset", function(d,i) { return i/(coloursYGB.length-1); })   
//     .attr("stop-color", function(d) { return d; }); 

    //Append a defs (for definition) element to your SVG
    // var defs = svg.append("defs");

    // //Append a linearGradient element to the defs and give it a unique id
    // var linearGradient = defs.append("linearGradient")
    //   .attr("x1", "0%")
    //   .attr("y1", "0%")
    //   .attr("x2", "100%")
    //   .attr("y2", "0%");
    // //Set the color for the start (0%)
    // linearGradient.append("stop") 
    //   .attr("offset", "0%")   
    //   .attr("stop-color", "#ffa474"); //light blue

    // //Set the color for the end (100%)
    // linearGradient.append("stop") 
    //   .attr("offset", "100%")   
    //   .attr("stop-color", "#8b0000"); //dark blue

    // Draw the rectangle and fill with gradient
   // var circles = svgContainer.selectAll("circle")
                         // .data(circleRadii)
                         // .enter()
      // .style("fill", "url(#linear-gradient)");


  // }; // createSvg function
  // createSvg2();

  // self.clear = function() {
  //   d3.select('svg').remove();
  //   createSvg();
  // };

  // self.draw = function(data) {
  //   if (data.length < 1) {
  //     self.clear();
  //     return;
  //   }
  //   if (svg) {

  //       // Remember to format the data properly in markPoints

  //       // to draw a circle - 
  //       svg.selectAll('circle').data(data, function(d) { return d._id; })
  //       .enter().append('circle')
  //       .attr('r', 10)
  //       .attr('cx', function (d) { return d.x; })
  //       .attr('cy', function (d) { return d.y; })

  //     //to draw a line
  //     // svg.selectAll('line').data(data, function(d) { return d._id; })
  //     // .enter().append('line')
  //     .attr('x1', function (d) { return d.x; })
  //     .attr('y1', function (d) { return d.y; })
  //     .attr('x2', function (d) { return d.x1; })
  //     .attr('y2', function (d) { return d.y1; })
  //     .attr("stroke-width", function (d) { return d.w; })
  //     .attr("stroke", function (d) { return d.c; })
  //     .attr("stroke-linejoin", "round")
  //     .attr('fill',  function (d) { return d.c; });


  //   } // end of the if(svg) statement
  // }; // end of the canvas.draw function
} //end of the canvas function




