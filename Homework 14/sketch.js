let x, y, barX;

function setup() {
  createCanvas(400, 400);
  x = random(width);
  y = 0;
  barX = width / 2;
}

function draw() {
  background(0);
  ellipse(x, y, 20);
  y += 5;


  rect(barX, height - 60, 50, 10);
 if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) barX -= 5;
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) barX += 5;

  if (y + 10 > height - 60 && x > barX && x < barX + 50) {
    y = 0;
    x = random(width);
  }
  if (y > height) {
    y = 0;
    x = random(width);
  }
}