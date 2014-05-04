// However, the data you have isn’t always in the right format for shape generators, or even basic shape creation
//reformatting data with d3′s layout functions


var radius = window.innerHeight;


var svg = d3.select("body").append("svg")
            .attr({
                width: window.innerWidth,
                height: window.innerHeight
            }).append("g")

var tree = d3.layout.tree()
            .size([60, radius])


var diagonal = d3.svg.diagonal.radial()
                .projectoin(functoin(d){
                    return [d.y, d.x/180 *Math.PI];
                })


d3.json()
