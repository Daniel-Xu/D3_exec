var svg = d3.select('body').append('svg').attr({
        width: window.innerWidth,
        heigth: window.innerHeight
})


var data = [1, 5, 2, 4 ,3, 2, 5, 9]

//this map is a function
var map = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, window.innerHeight-100])


svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr({
        x: function(d, i){ return i*101 }, 
        y:20,
        height: map, 
        width: 100
    })

