var canvas = document.getElementById("my_canvas")
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth-400;
canvas.height = window.innerHeight-400;
var color = "blue"
var color1 = "black"
var color2 = "red"
var color3 = "yellow"
var color4 = "green"
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=4;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth=4;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=4;
ctx.arc(350,235,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth=4;
ctx.arc(250,235,40,0,2*Math.PI);
ctx.stroke();


// Event starts 

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    var mousex=e.clientX-canvas.offsetLeft;
    var mousey=e.clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
    
}
// event ends