function draw() {
  background(250);
  noLoop();
	for (var i = 10; i <= width; i = i + 10) {
  	var startX = i;
  	var startY = height-10;
  	var endX = width/2;
  	var endY = 10;
  	line(startX, startY, endX, endY);
	}
}  
