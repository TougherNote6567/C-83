 var mouseEvent = "empty";
 var last_Position_Of_X, last_Position_Of_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
Color=document.getElementById("color").value;
lineWidth=document.getElementById("LW").value;
mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=Color;
ctx.lineWidth=lineWidth;
ctx.moveTo(last_Position_Of_X,last_Position_Of_Y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
    }
    last_Position_Of_X=current_position_of_mouse_x;
    last_Position_Of_Y=current_position_of_mouse_y;
}
function clearA(){
    window.alert("Are you sure you want to delete the screen? Click twice on the 'Clear Drawing Surface' button twice. If not, jUst close this alert. Have fun!")
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
var last_Position_Of_Touch_X,last_Position_Of_Touch_Y;
var WidthA=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
    Color=document.getElementById("color").value;
    lineWidth=document.getElementById("LW").value;
    last_Position_Of_Touch_X=e.touches[0].clientX-canvas.offsetLeft;
    last_Position_Of_Touch_Y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    current_Position_of_Touch_X=e.touches[0].clientX-canvas.offsetLeft;
    current_Position_of_Touch_Y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=Color;
    ctx.lineWidth=LW;
    ctx.moveTo(last_Position_Of_Touch_X,last_Position_Of_Touch_Y);
    ctx.lineTo(current_Position_of_Touch_X,current_Position_of_Touch_Y);
    ctx.stroke();
    last_Position_Of_Touch_X=current_Position_of_Touch_X;
    last_Position_Of_Touch_Y=current_Position_of_Touch_Y;
}