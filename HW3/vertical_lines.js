function draw() {
  background(250);
  noLoop();
	for (var i = 10; i <= width; i = i + 10) {
  	var startX = i;
  	var startY = 10;
  	var endX = i;
  	var endY = height-10;
  	line(startX, startY, endX, endY);
	}
}  
