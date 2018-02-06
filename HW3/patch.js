function JeromePatch(x, y) {
  fill(12,15,94);
  stroke(238);
  rect(x, y, 300, 300);

// your code here!
  
	function draw() {
		colorMode(HSB);
    stroke(337,56,100)
    for (var i = 20; i <= width-60; i = i + 10) {
  		var startX = x+30;
 		  var startY = i+30;
 		  var endX = i+30;
  		var endY = y+30;
  line(startX, startY, endX, endY);
}
		fill(11,46,93)
		noStroke();
	  quad(x+30,y+50,x+70,y+260,x+230,y+260,x+270,y+50);
    fill(360,66,95);
    quad(x+220,y+50,x+180,y+260,x+230,y+260,x+270,y+50);
    fill(250);
    
    textSize(30)
    text('cup', width/2,height/2)
	}
draw()    
}

//background(255);
//JeromePatch(0, 0); // draw patch at upper-left

background(255);
JeromePatch(width-301, height-301); // draw patch at lower-right
