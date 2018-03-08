/*
 Controlling a servo position using a potentiometer (variable resistor)
 by Michal Rinott <http://people.interaction-ivrea.it/m.rinott>

 modified on 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Knob
*/

#include <Servo.h>

Servo myservo1;  // create servo object to control a servo
Servo myservo2;
int potpin1 = A0; // analog pin used to connect the potentiometer
int potpin2 = A1;
int val1;  
int val2;
// variable to read the value from the analog pin

void setup() {
  myservo1.attach(5);  // attaches the servo on pin 9 to the servo object
  Serial.begin(9600);
  myservo2.attach(9);
  Serial.begin(9600);
 
}

void loop() {
  val1 = analogRead(potpin1);// reads the value of the potentiometer (value between 0 and 1023)
  val2 = analogRead(potpin2);
  val1 = map(val1, 0, 1023, 0, 180);    // scale it to use it with the servo (value between 0 and 180)
  val2 = map(val2, 0, 1023, 0, 180);
  myservo1.write(val1);                  // sets the servo position according to the scaled value
  myservo2.write(val2);
  Serial.print("Angle1: "); Serial.println(val1);
  Serial.print("Angle2: "); Serial.println(val2);
  delay(15);                           // waits for the servo to get there
                       // waits for the servo to get there
}
