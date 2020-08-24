import {TriangleGenerator} from "./classes/triangle_generator.js";


console.log("starting");

// get the canvas element
let canvas = document.getElementById("background");

// get screen size
let width = window.innerWidth;
let height = window.innerHeight;

// set canvas size
canvas.width = width;
canvas.height = height;

let context = undefined;
if(canvas.getContext)
{
    context = canvas.getContext('2d');
}
let tg = new TriangleGenerator(width, height, 0.0001);
let draw = function() {
    requestAnimationFrame(draw);
    context.clearRect(0,0,canvas.width,canvas.height);
    tg.drawNodes(context);
    tg.drawLineFromFirstNodeToAll(context);



}

draw();



