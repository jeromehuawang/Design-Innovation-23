function draw() {
  background(250);
  noLoop();
	for (var i = 0; i <= width; i = i + 5) {
  	var startX = i;
  	var startY = 0;
  	var endX = i;
  	var endY = height;
  	line(startX, startY, endX, endY);
	}
  noStroke();
  triangle(0,height,width/2,height,0,0)
}  
