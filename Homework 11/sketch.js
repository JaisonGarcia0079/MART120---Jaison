var characterX = 100;
var characterY = 100;

var up = 87;   
var down = 83; 
var left = 65; 
var right = 68; 

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shape2X = 300;
var shape2Y = 120;
var shape2XSpeed;
var shape2YSpeed;

var mouseShapeX;
var mouseShapeY;

function setup() { 
  createCanvas(600, 650);
  shapeXSpeed = Math.floor(Math.random() * 3) + 3;
  shapeYSpeed = Math.floor(Math.random() * 3) + 3;
  shape2XSpeed = Math.floor(Math.random() * 3) + 3;
  shape2YSpeed = Math.floor(Math.random() * 3) + 3;
}

function draw() {
  background(50, 15, 35, 70);
  stroke(0);
  fill(0);
  

  rect(0, 0, width, 10);            
  rect(0, height - 10, width, 10);  
  rect(width - 10, 0, 10, height-50); 

  textSize(20);
  text("EXIT -->", width - 90, height - 25);


  fill(61, 65, 79);
  circle(characterX, characterY, 25);

  if (keyIsDown(left)) {
    characterX -= 8;
  }
  if (keyIsDown(right)) {
    characterX += 8;
  }
  if (keyIsDown(up)) {
    characterY -= 8;
  }
  if (keyIsDown(down)) {
    characterY += 8;
  }


  fill(255, 145, 14);
  circle(shapeX, shapeY, 10);


  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;


  if (shapeX > width) {
    shapeX = 0;
  }
  if (shapeX < 0) {
    shapeX = width;
  }
  if (shapeY > height) {
    shapeY = 0;
  }
  if (shapeY < 0) {
    shapeY = height;
  }


  fill(255, 0, 0);
  circle(shape2X, shape2Y, 10);


  shape2X += shape2XSpeed;
  shape2Y += shape2YSpeed;


  if (shape2X > width) {
    shape2X = 0;
  }
  if (shape2X < 0) {
    shape2X = width;
  }
  if (shape2Y > height) {
    shape2Y = 0;
  }
  if (shape2Y < 0) {
    shape2Y = height;
  }


  if (characterX > width - 50 && characterY > height - 50) {
    fill(0);
    stroke(3);
    textSize(50);
    text("YOU DID IT!!", width / 2 - 135, height / 2 - 50);
  }

 
  fill(110, 127, 120);
  circle(mouseShapeX, mouseShapeY, 31);
}

function mouseClicked() {
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}