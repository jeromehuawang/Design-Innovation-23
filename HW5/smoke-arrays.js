var x1 = [];
var y1 = [];
var d1 = [];

var x2 = [];
var y2 = [];
var d2 = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	 for (i = 0; i < 50; i = i + 1){
    x1[i] = random(0, 100);
    y1[i] = random(0, 200);
    d1[i] = random(0,100);
    x2[i] = random(0, 300);
    y2[i] = random(0, 200);
    d2[i] = random(0,30); 

  }  
}

  
function draw() {
  background(255);
  noStroke();

  for (i = 0; i < 50; i = i + 1){
    fill(random);
    ellipse(x1[i], y1[i], d1[i]);
    fil(random);
    ellipse(x2[i], y2[i], d2[i]);

  	
  // 1% of the time
  if (random() < 0.01) {
    // random diameter between 10 and 400
    d1[i] = random(10, 400);
  }
  
  // 2% of the time…
  if (random() < 0.02) {
    // random diameter between 10 and 400
    d2[i] = random(10, 400);
     }
  }
}
