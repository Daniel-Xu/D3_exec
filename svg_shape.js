var svg = d3.select("body").append("svg")
            .attr({
                width: window.innerWidth,
                height: window.innerHeight
            })

var parse = d3.time.format("%Y").parse

d3.csv("date.csv", function(d){ d.year = parse(d.year); return d}, function(data){
    var yearScale = d3.time.scale()
                        .domain(d3.extent(data, function(d){ return d.year})) 
                        .range([50, window.innerWidth-50])

    var numberScale = d3.scale.linear()
                        .domain([0, d3.max(data, function(d){ return d.number})])
                        .range([50, window.innerHeight - 50])

    var yearAxis = d3.svg.axis().scale(yearScale).orient("bottom").tickSize(100 - window.innerHeight)

    svg.append('g')
        .attr({
            class: "axis", 
            transform: "translate("+ [0, window.innerHeight - 50] +")"
        })
        .call(yearAxis)

    svg.selectAll("circle")
        .data(data)
        .enter()
        .append('circle')
        .attr({
            cx: function(d){ return yearScale(d.year)},
            cy: function(d){ return window.innerHeight - numberScale(d.number)}, 
            r:4,
            fill: "#fff", 
            stroke: "#78B446", 
            "stroke-width": 4
        })
})


