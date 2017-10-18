var x = 0;
var y = 0;

var Vx = 0;
var Vy = 0;

var Xx = 0;
var Xy = 0;

var Multix = 0;
var Multiy = 0;

function setup() {
 createCanvas(windowWidth,windowHeight); 
}

function draw() {
 background(255);
 textSize(40);
 text("Rx: " + rotationX, 100, 100);
 text("Ry: " + rotationY, 100, 150);
 text("Rz: " + rotationZ, 100, 200);

}
function touchStarted() {
 background(random(0,255),random(0,255),random(0,255));
}