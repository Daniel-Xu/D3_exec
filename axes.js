var w = window.innerWidth
var h = window.innerHeight
var range = { top: 40, right: 20, bottom: 20, left: 40}
var radius = 6


var svg = d3.select("body").append("svg").attr({
    width: w,
    heigth: h
})
    
var data = [
    {x: 100, y: 110},
    {x: 83, y: 43},
    {x: 92, y: 28},
    {x: 49, y: 74},
    {x: 51, y: 10},
    {x: 25, y: 98},
    {x: 77, y: 30},
    {x: 20, y: 83},
    {x: 11, y: 63},
    {x: 4,  y: 55},
    {x: 0,  y: 0},
    {x: 85, y: 100},
    {x: 60, y: 40},
    {x: 70, y: 80},
    {x: 10, y: 20},
    {x: 40, y: 50},
    {x: 25, y: 31}
]

var xScale = d3.scale.linear()
                .domain([0, d3.max(data, function(d){return d.x})+10])
                .range([range.left, w-range.right])

var yScale = d3.scale.linear()
                .domain([0, d3.max(data, function(d){ return d.y})+10])
                .range([range.top, h-range.bottom])

var xAxis = d3.svg.axis().scale(xScale).orient("top")//.tickSize(20)

var yAxis = d3.svg.axis().scale(yScale).orient("left")


var xAxisGroup = svg.append("g")
    .attr({
        class: "axis",
        transform: "translate("+ [0, range.top] +")"
    })
    .call(xAxis)

var yAxisGroup = svg.append("g")    
    .attr({
        class: "axis",
        transform: "translate("+ [range.left, 0] +")"
    })
    .call(yAxis)

var circleInitialAttr = {
    cx: xScale(0),
    cy: yScale(0), 
    r: 1
}
var circleAttr = {
    cx: function(d){ return xScale(d.x)},
    cy: function(d){ return yScale(d.y)}, 
    r: radius
}

var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr(circleInitialAttr)
    .on("mouseover", mouseoverHandler)
    .on("mouseout", mouseoutHandler)

circles.transition()
    .delay(function(d,i){ return i*100+1000 })
    .duration(1000)
    .ease("bounce")
    .attr(circleAttr)




    svg.on("click", function(d, i){
        var cor = d3.mouse(this)

        var newData = { x: Math.round(xScale.invert(cor[0])), y: Math.round(yScale.invert(cor[1])) }
       
        data.push(newData)
        
        //update the scale, and axis are based on scale
        xScale.domain([0, d3.max(data, function(d){ return d.x})+10])
        yScale.domain([0, d3.max(data, function(d){ return d.y})+10])

        //update pattern
        var c = svg.selectAll("circle").data(data).enter()
            .append("circle")
            .attr(circleInitialAttr)
            .on("mouseover", mouseoverHandler)
            .on("mouseout", mouseoutHandler)

        c.transition()
            .duration(1000)
            .ease("bounce")
            .attr(circleAttr)
            

        xAxisGroup.transition()
            .call(xAxis)

        yAxisGroup.transition()
            .call(yAxis)
    })

function mouseoverHandler(d, i){
    //this is raw DOM element, we should chagne it to d3 element
    d3.select(this).attr({
        fill: "lightgreen",
        r: radius * 2, 
    })

    svg.append("text").attr({
        class: "value",
        x: function(){ return xScale(d.x)-30}, 
        y: function(){ return yScale(d.y)-15}
    }).text(function(){
        return [d.x, d.y]
    })
}

function mouseoutHandler(d, i){
    d3.select(this).attr({
        fill: 'black', 
        r: radius
    })

    d3.select(".value").remove()
}
