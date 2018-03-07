int analogPin = A0; 
int sensorValue = 0;    


// the setup routine runs once when you press reset:
void setup() {
  // declare pin 9 to be an output:
  pinMode(led5, OUTPUT);
  pinMode(led6, OUTPUT);
  pinMode(led9, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
   sensorValue = analogRead(analogPin);
  Serial.println(sensorValue);
  if (sensorValue > 250) {
    analogWrite(led5, HIGH);
  }  else {
    analogWrite(led5, LOW);
  }
  if (sensorValue > 500) {
    analogWrite(led5, HIGH);
    analogWrite(led6, HIGH);
  }  else {
    analogWrite(led5, LOW);
    analogWrite(led6, LOW);
  }
  if (sensorValue > 750) {
    analogWrite(led5, HIGH);
    analogWrite(led6, HIGH);
    analogWrite(led9, HIGH);
  }  else {
    analogWrite(led5, LOW);
    analogWrite(led6, LOW);
    analogWrite(led9, LOW);
  }
}
}
