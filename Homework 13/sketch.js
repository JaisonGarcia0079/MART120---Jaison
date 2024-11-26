var characterX = 100;
var characterY = 100;

var up = 87;
var down = 83;
var left = 65;
var right = 68;

var shapeX = [];
var shapeY = [];
var shapeXSpeed = [];
var shapeYSpeed = [];
var shapeColors = []; 
var shapeSizes = []; 
var numShapes = 5; 
var predefinedColors = []; 
var mouseShapeX;
var mouseShapeY;

function setup() { 
  createCanvas(500, 600);
  
  predefinedColors = [
    color(255, 0, 0),   
    color(0, 255, 0),  
    color(0, 0, 255),  
    color(255, 255, 0),
    color(0, 255, 255)  
  ];

  startShapeSpeeds();
}

function draw() {
  background(50, 15, 35, 70);

  createBorders();
  exitMessage();
  createCharacter();
  characterMovement();
  drawShapes();
  updateShapePositions();
  winner();
  mouseObject();
}

function startShapeSpeeds() {
  for (let i = 0; i < numShapes; i++) {
    shapeX[i] = Math.random() * width;
    shapeY[i] = Math.random() * height;
    shapeXSpeed[i] = Math.random() * 5 + 1;
    shapeYSpeed[i] = Math.random() * 5 + 1;
    shapeColors[i] = predefinedColors[Math.floor(Math.random() * predefinedColors.length)];
    shapeSizes[i] = Math.random() * 20 + 20;
  }
}
function exitMessage() {
  fill(255);
  textSize(16);
  text("EXIT", width - 50, height - 50);
}
function characterMovement() {
  if (keyIsDown(up)) {
    characterY -= 10;
  }
  if (keyIsDown(down)) {
    characterY += 10;
  }
  if (keyIsDown(left)) {
    characterX -= 10;
  }
  if (keyIsDown(right)) {
    characterX += 10;
  }
}
function createCharacter() {
  fill(245, 66, 152);
  circle(characterX, characterY, 25);
}
function drawShapes() {
  for (let i = 0; i < numShapes; i++) {
    fill(shapeColors[i]);
    circle(shapeX[i], shapeY[i], shapeSizes[i]);
  }
}

function updateShapePositions() {
  for (let i = 0; i < numShapes; i++) {
    shapeX[i] += shapeXSpeed[i];
    shapeY[i] += shapeYSpeed[i];

    if (shapeX[i] > width) {
      shapeX[i] = 0;
    }
    if (shapeX[i] < 0) {
      shapeX[i] = width;
    }
    if (shapeY[i] > height) {
      shapeY[i] = 0;
    }
    if (shapeY[i] < 0) {
      shapeY[i] = height;
    }
  }
}

function winner() {
  if (characterX > width - 50 && characterY > height - 50) {
    fill(0);
    stroke(5);
    textSize(26);
    text("You Win!", width / 2 - 50, height / 2 - 50);
  }
}

function createBorders() {
  stroke(0);
  fill(0);
  rect(0, 0, width, 10);
  rect(0, height - 10, width, 10); 
  rect(width - 10, 0, 10, height - 50);
}

function mouseObject() {
  fill(245, 117, 66);
  circle(mouseShapeX, mouseShapeY, 25); 
}

function mouseClicked() {
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}