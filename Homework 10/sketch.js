let xoffset = 0;
let yoffset = 0;
let xdirection = 1;
let ydirection = 1;
let size = 20;
let sizechange = 0.5;
function setup() {
  createCanvas(500, 500);
}

function draw() {
xoffset += xdirection * 3; 
if (xoffset > 10 || xoffset < -10) {
xdirection*=-1;}
yoffset += ydirection * 1;
if (yoffset > 10 || yoffset < -10) {
ydirection*=-1; }
size += sizechange;
  
if (size > 40 || size < 20) {
sizechange = -sizechange;
}
  background(209, 120, 31);
 
   fill(107,68,13);
 ellipse(250 + xoffset,90+ yoffset,200 + xoffset,120 + yoffset)
  fill(120,31,31);
   square(80,290,350);red 
  fill(235,196,141)
  ellipse(250,330,150,180);tan
  circle(250,190,250);tan; 
  triangle(240, 220 + yoffset, 250, 180 + yoffset, 260,220 + yoffset);  
   fill(255,255,255)
  circle(190,160,40);
  circle(300,160,40);
  fill(107,68,13);
  circle(190,160,20);
  circle(300,160,20);
      strokeWeight(3); 
 line(190, 250 + yoffset, 300, 250 + yoffset);

  push();
translate(270+xoffset,1);
rotate(45);
fill(107, 68, 13);
rect(10, 40, 65, 150);
pop();

  push();
translate(270+xoffset, 1); 
scale(-1, 1);
rotate(45);
fill(107, 68, 13);
rect(10, 20, 65, 150); 
pop();
 
textSize(size);
  text('Jaison Portrait', 10, 480);
  stroke(0,0,0);
} 