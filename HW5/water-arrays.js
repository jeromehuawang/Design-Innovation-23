var xi = [];
var yi = [];
var speed = [];
function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
for (i=0; i<20; i=i+1) {
  xi[i] = 220
  yi[i]= 210
  speed[i] = random(0,10)
  	}
	}
  
function draw() {
  background(0);
  rect(0, 200, 210, 20);
  noStroke();
    for (i=0; i<20; i++) {
    
       yi[i] = yi[i] + speed[i];
    
    	if (speed[i]  >= 0    &&    speed[i] < 2 ) {
      xi[i] = xi[i] + 2
        ellipse(xi,yi[i], random(5,10));	
    	}
     	if (speed[i] >= 2    &&    speed[i] < 6 )  {
      xi[i] = xi[i] + 5
        ellipse(xi,yi[i], random(5,10));
    }
     if (speed[i] >= 6    &&    speed[i] < 10 )  {
      xi[i] = xi[i] + 10
       ellipse(xi,yi[i], random(5,10));
    }

  }
}
