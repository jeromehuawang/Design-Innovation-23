// Rudy Playground

// This is a static, p5-like environment.

// You can draw lines and other shapes here, set colors, etc.,
// just as you would with p5. No setup() or draw() functions needed.

// Here are some commands to get you started:
//  line(10, 10, width-10, height-10);   -- draw a diagonal line
//  line(10, height-10, width-10, 10);   -- draw another
//  colorMode(HSB);                      -- start coloring with Hue, Saturation, Brightness
//  stroke(0, 255, 255);                 -- stroke with a nice red color
//  noFill();                            -- and don't fill
//  rect(10, 10, width-20, height-20);   -- draw a rectangle

function JeromePatch(x, y) {
  fill(12,15,94);
  stroke(238);
  rect(x, y, 300, 300);

// your code here!
  
	function draw() {
		colorMode(HSB);
		fill(11,46,93)
		noStroke();
	  quad(x+30,y+50,x+70,y+260,x+230,y+260,x+270,y+50);
    fill(360,66,95);
    quad(x+220,y+50,x+180,y+260,x+230,y+260,x+270,y+50);
    fill(250);
    
    textSize(30)
    text('cup', x+150,y+150)
	}
draw()    
}

//background(255);
//JeromePatch(0, 0); // draw patch at upper-left

background(255);
JeromePatch(width-301, height-301); // draw patch at lower-right
