var ax, ay, vx, vy, px, py, vMultiplier, s;
var value;

function setup() {
  createCanvas(windowWidth, windowHeight);
  value = 0;
  vMultiplier = 0.05;
  ax = 0;
  ay = 0;
  vx = 0;
  vy = 0;
  px = windowWidth / 2;
  py = windowHeight / 2;
  s = 100;
}

function draw() {
  background(value, 255, 0);
  textSize(40);
  text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);
  Marble();
}

function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

function Marble() {
  ax = rotationY * vMultiplier;
  vx += ax;
  px += vx;
  ay = rotationX * vMultiplier;
  vy += ay;
  py += vy;
  fill(0);
  ellipse(px, py, s, s);
  fill(100);
  ellipse(px + 15, py + 15, s / 2, s / 2);
  if (px > windowWidth - s / 2) {
    px = windowWidth - s / 2
    vx = -vx * 0.3;
  }
  if (px < 0 + s / 2) {
    px = 0 + s / 2
    vx = -vx * 0.3;
  }
  if (py > windowHeight - s / 2) {
    py = windowHeight - s / 2
    vy = -vy * 0.3;
  }
  if (py < 0 + s / 2) {
    py = 0 + s / 2
    vy = -vy * 0.3;
  }
}