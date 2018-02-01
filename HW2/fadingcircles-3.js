//Assignment: Modify this code to limit the color to a particular range; perhaps you enjoy the warm orange/red colors of Autumn? Or the bright greens of Spring? Or the blue-tinged twinkles of sun-dappled snow in Winter? Use this opportunity to explore a color palate. Change your circle sizes to match the emotion you would like to convey with your colors.

You may find it helpful to read about HSB and learn about colorMode. Note, in particular, that the maximum values for hue, saturation, and brightness in HSB mode are 360, 100, and 100, respectively.

Creative Challenge: Instead of drawing ellipses, use the beginShape function to draw a shape that's appropriate to your choice of color. Start by running the example on the beginShape reference page to understand how the function works and how it pairs with vertex and endShape.

background(255);
colorMode(HSB);
noStroke();

while(true) {
  background(0, 0, 255, 0.1);
  fill(random(340,360), random(0,20), random(92-100));
  ellipse(random(width), random(height), random(20, 40));
}
