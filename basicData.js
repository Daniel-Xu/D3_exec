var dataset = [8, 9, 3, 2, 12]

svg = d3.select("body").append("svg").attr({
    width: 600, 
    height: 400
})


svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
        x:,
        y:,
        width: function(d, i){ return 101*i},
        height: function(d) { return d}, 
        fill: "red"
    })
    

