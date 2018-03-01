var circles = [];
numcircles=100;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  for (var index = 0; index < numcircles; index = index + 1) {
    // new "circle" object, with x, y, xd, yd, and c properties:
    circles[index] = {
      x: width / 2,
      y: height / 2,
      xd: random(-2, 2),
      yd: random(-2, 2),
      c: color(random(360), 60, 100),
			r: random(5,20)
    }
  }
}

function draw() {
  background(0);
  noStroke();

  for (var index = 0; index < numcircles; index = index + 1) {
    // get circle object
    var circle = circles[index];

    // draw it
    fill(circle.c);
    ellipse(circle.x, circle.y, circle.r);

    // move it according to direction
    circle.x = circle.x + circle.xd;
    circle.y = circle.y + circle.yd;

    // check boundaries and update directions
    if (circle.r <=2 || circle.r>30) {
        circle.r = random(5,20);
    }
    if (circle.x > width || circle.x < 0) {
      circle.xd = -circle.xd;
			circle.r = circle.r - random(1,3)
			push();
      textSize(random(10,60))
      text('boop', random(0,width), random(0,height));
			pop();
    }
    if (circle.y > height || circle.y < 0) {
      circle.yd = -circle.yd;
			circle.r = circle.r - random(1,3)
			push();
      textSize(random(10,60))
      text('boop', random(0,width), random(0,height));
			pop();
    }
  }
}
