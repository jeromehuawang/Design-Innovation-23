var x = [];
var y = [];
var r = [];

function setup() {
  createCanvas(400, 400);
	for (i=0; i<150; i=i+1) {
    x[i] = 200
    y[i] = 250
    r[i] = 0
	}
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);
	for (i=0; i<100; i=i+3) {
	y[i] = y[i] - random(0,3)
	r[i] = r[i] + random(0,.05)
  // save graphics state
  push();
  // darker as it gets closer to 0
  fill(y[i]);
  // rotate r around (x,y)
  translate(x[i], y[i]);
  rotate(r[i]);
  // draw rectangle
  rect(-10, -10, 20, 20);
  // reset rotation and translation
  pop();
  
  // up 3 pixels
  rect(-10, -10, 20, 20);
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  }
  }
}
