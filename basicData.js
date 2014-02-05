var dataset = [18, 29, 34, 22, 92]

svg = d3.select("body").append("svg").attr({
    width: 600, 
    height: 400
})


svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
        x:function(d, i){ return 101*i},
        y: 0,
        width:100,
        height: function(d) { return d}, 
        fill: "red"
    })
    

