function draw() {
  background(250);
  noLoop();
	for (var i = 10; i <= width; i = i + 10) {
  	var startX = 10;
  	var startY = i;
  	var endX = width-10;
  	var endY = i;
  	line(startX, startY, endX, endY);
	}
}  
