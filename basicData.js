var dataset = [18, 29, 34, 22, 12]

svg = d3.select("body").append("svg").attr({
    width: 1000, 
    height: 400
})


svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
        x:function(d, i){ return 101*i},
        y: function(d){ return 400-d*5},
        width:100,
        height: function(d) { return d*5}, 
        fill: "red"
    })
    
    
var moreData = [11, 12, 13, 14, 15, 16, 17]
var join = svg.selectAll("rect").data(moreData)

// after enter(), only new added rect will be affected
join.enter()
    .append("rect")
    .attr({
        x:function(d, i){ return 101*i},
        y: function(d){ return 400-d*5},
        width:100,
        height: function(d) { return d*5}, 
        fill: "yellow"
    })

//noting this: the join now becomes the whole 7 rects
join.attr({
    fill: "blue" 
})
