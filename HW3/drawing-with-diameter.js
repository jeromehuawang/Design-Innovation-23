function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
	if (key == 'R') {
    fill(255, 107, 107);
  } else if (key == 'G') {
    fill(133, 203, 51);
  } else if (key == 'B') {
    fill(179, 255, 252); 
  } else if (key == 'Y') {
    fill(255, 242, 117);
	} else if (key == 'V') {
    fill(157, 117, 203);
	} else if (key == 'P') {
    fill(255, 169, 184);
  } else if (key== '1') {
		ellipse(mouseX, mouseY, diameter+10);
	} else if (key == '2') {
		ellipse(mouseX, mouseY, diameter+20);
	} else if (key == '3') {
		ellipse(mouseX, mouseY, diameter+30);
}
}
