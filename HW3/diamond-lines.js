function draw() {
  background(250);
  noLoop();
	for (var i = 10; i <= width/2; i = i + 10) {
  	var startX = width/2-i;
  	var startY = i;
  	var endX = width/2+i;
  	var endY = i;
  	line(startX, startY, endX, endY);
	}

	for (var j = 10; j <= width; j = j + 10) {
  	var startXi = j;
  	var startYi = height/2 + j;
  	var endXi = width - j ;
  	var endYi = height/2 +j;
  	line(startXi, startYi, endXi, endYi);
	}
}  
