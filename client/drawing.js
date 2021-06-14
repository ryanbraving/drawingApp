import d3 from './d3.min.js';

Canvas = function () {
  console.log(2222222)
  var self = this;
  var svg;

  var createSvg = function() {
    svg = d3.select('#canvas').append('svg')
      .attr('width', 1100)
      .attr('height',900)
      .attr("style", "outline: thick solid black;");

  }; // createSvg function
  createSvg();

  self.clear = function() {
    d3.select('svg').remove();
    createSvg();
  };

  self.draw = function(data) {
    if (data.length < 1) {
      self.clear();
      return;
    }
    if (svg) {

        // Remember to format the data properly in markPoints

        // to draw a circle - 
        svg.selectAll('circle')
        .data(data, function(d) { return d._id; })
        .enter()
        .append('circle')
        .attr('r', 10)
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })

      //to draw a line
      // svg.selectAll('line').data(data, function(d) { return d._id; })
      // .enter().append('line')
      // .attr('x1', function (d) { return d.x; })
      // .attr('y1', function (d) { return d.y; })
      // .attr('x2', function (d) { return d.x1; })
      // .attr('y2', function (d) { return d.y1; })
      .attr("stroke-width", function (d) { return d.w; })
      .attr("stroke", function (d) { return d.c; })
      .attr("stroke-linejoin", "round")
      .attr('fill',  function (d) { return d.c; });


    } // end of the if(svg) statement
  }; // end of the canvas.draw function
} //end of the canvas function




