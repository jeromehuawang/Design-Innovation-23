#include <LiquidCrystal.h>

LiquidCrystal lcd(13, 12, 5, 4, 3, 2);

int ButtonRed = 1;
int ButtonBlue = 2;
int ButtonGreen = 3;

int btnPin[] = { 0, 8, 9, 10 };// need 3 input pins if 3 questions are asked
int ledPin = 13;
int buttonState[] = { 0, 0, 0, 0 };
int lastButtonState[] = { 0, 0, 0, 0 };
int btn = 0;
int i = 0;
int counter = 0;
int sequence[] = {0, 0, 0};
void setup() {
  // initialize digital pin 13 as an output.
  lcd.begin(16,2);
  lcd.print("Order Up!")
  Serial.begin(9600);
  delay(1000);
  Serial.println("Starting");
  pinMode(ledPin, OUTPUT);
  for (btn = 8; btn <= 10;  btn++) {
    pinMode(btn, INPUT);
  }
}

// the loop function runs over and over again forever
void loop() {
  delay(100);
  if (wasBtnPushed(ButtonRed) > 0) {
    Serial.println("ButtonRed is pressed ");
    sequence[counter] = ButtonRed;
    counter = counter + 1;
    lcd.print("Red");
  }
  delay(100);
  if (wasBtnPushed(ButtonBlue) > 0) {
    Serial.println("ButtonBlue is pressed ");
    sequence[counter] = ButtonBlue;
    counter = counter + 1;
    lcd.print("Blue");
  }
  delay(100);
  if (wasBtnPushed(ButtonGreen) > 0) {
    Serial.println("ButtonGreen is pressed ");
    sequence[counter] = ButtonGreen;
    counter = counter + 1;
    lcd.print("Green");
  }
  delay(10);
  if (counter == 3)
  {
    Serial.println("3 buttons are pressed and sequence is ");
    for (i = 0; i < 3; i++) {
      Serial.println(sequence[i]);
    }
    //    do something here I flash the led
    // led flashes to show that sequence is registered and start motor action
    digitalWrite(ledPin, HIGH);   // turn the LED on (HIGH is the voltage level)
    delay(100);              // wait for a second
    digitalWrite(ledPin, LOW);    // turn the LED off by making the voltage LOW
    delay(100);              // wait for a second
    lcd.print("Order is Ready!");
    lcd.setCursor(0,1); 
    lcd.print("Please Wait!");
    Serial.println("task is done or wait for new input ");
    //if (sequence[0]==1) && (sequence[1]==1) && (sequence[2]==1) {
    // lcd.print("drink name?");
    // lcd.setCursor(0,1);
    // lcd.print("Good Choice!");
    //motor action
    // lcd.print("It's Ready!");
    // lcd.setCursor(0,1);
    // lcd.print("Please Enjoy");
    //}

    counter = 0;
   // sequence resets here
  }
}
int wasBtnPushed(int x) {
  buttonState[x] = digitalRead(btnPin[x]);
  if (buttonState[x] != lastButtonState[x]) {
    lastButtonState[x] = buttonState[x];
    if (buttonState[x] == LOW) {
      delay(100);
      return x;
    }
  }
  return 0;
}
