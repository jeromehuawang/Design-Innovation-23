var tenline = 0

function setup() {
  createCanvas(500, 500);
  noLoop();
}

while (tenline < 9) {
  function draw() { 
    line(random(width), random(height), random(width), random(height));
    tenline = tenline +1
  }   
}
