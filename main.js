var last_position_of_x,last_position_of_y;
canvas=document.getElementById('myCanvas');
color="blue";
ctx=canvas.getContext("2d");
width_of_line=3;
var width=screen.width;
new_width=screen.width - 70;
new_heigt=screen.height - 300;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
   document.getElementById("myCanvas").height=new_heigt;
   document.body.style.overflow="hidden";
}
canvas.addEventListener("touchestart",my_touchestart);
function my_touchestart(e) {
    console.log("my_touchestart");
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop; 
}
canvas.addEventListener("touchmove",my_touchmuve);
function my_touchmuve(e) {
    console.log("my_touchmuve");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.linewith=width_of_line;
        console.log("lapocicion de las cordenadas x, y es ")
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
    
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
}