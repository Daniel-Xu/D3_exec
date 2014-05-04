var dataset = { nodes: [
                { name: "Adam" },
                { name: "Bob" },
                { name: "Carrie" },
                { name: "Donovan" },
                { name: "Edward" },
                { name: "Felicity" },
                { name: "George" },
                { name: "Hannah" },
                { name: "Iris" },
                { name: "Jerry" }
            ], edges: [
                { source: 0, target: 1 },
                { source: 0, target: 2 },
                { source: 0, target: 3 },
                { source: 0, target: 4 },
                { source: 1, target: 5 },
                { source: 2, target: 5 },
                { source: 2, target: 5 },
                { source: 3, target: 4 },
                { source: 5, target: 8 },
                { source: 5, target: 9 },
                { source: 6, target: 7 },
                { source: 7, target: 8 },
                { source: 8, target: 9 }
            ] };


var w = window.innerWidth
var h = window.innerHeight

var svg = d3.select('body').append('svg').attr({
        width: w,
        heigth: h
})

var force = d3.layout.force().nodes(dataset.nodes).links(dataset.edges)
        .size([w, h])
        .linkDistance([50])
        .charge([-100])
        .start()

//construct 10 color for prototype
var color = d3.scale.category10()

var edges = svg.selectAll("line")
        .data(dataset.edges)
        .enter()
        .append("line")
        .style({
            stroke: "#ccc",
            "stroke-width":1
        })

var nodes = svg.selectAll("circle")
        .data(dataset.nodes)
        .enter()
        .append("circle")
        .attr("r", 10)
        .style({
            fill: function(d, i){
                return color(i)
            }
        })
        .call(force.drag)

force.on("tick", function(){
    edges.attr({
        x1: function(d){
            return d.source.x
        }, 
        y1: function(d){
            return d.source.y 
        }, 
        x2: function(d){
            return d.target.x
        },
        y2: function(d){
            return d.target.y
        }
    })

    nodes.attr({
        cx: function(d){
            return d.x
        }, 
        cy: function(d){
            return d.y
        }
    })

})       

                                                                


