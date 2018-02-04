function draw() {
  background(250);
  noLoop();
	for (var i = 300; i < width; i = i - 10) {
  	var startX = width/2;
  	var startY = height/2;
  	var w= i
    var h= i
  	ellipse(startX,startY,w-10,h -10)
	}
}  
