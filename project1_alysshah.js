//let initialTime = 0;
//let waitTime = 3000;

let wallFill = 140;
let ceilingFill = 100;
let floorFill = 190;

//let clickCount = 0;


function setup() {
    createCanvas(500, 500);
}


/*
function mousePressed(){
  
  clickCount++;
  print(clickCount);
  
  if (clickCount == 6){
    clickCount = 0;
    lightBeam();
      if (millis()-initalTime > waitTime) {
        initialTime = millis();
        environment();
        flashlight();
  } 
  }
}
*/


function draw() {

  stroke(1);
  let speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);
  
  if (frameCount < 100){
    environment();
  }
  
  else if(frameCount<150){
    if (frameCount%4 == 0){
      wallFill = 70;
      ceilingFill = 50;
      floorFill = 100;
    }else{
      wallFill = 140;
      ceilingFill = 100;
      floorFill = 190;        
    }
    environment();
    flashlight(200);
  }
  
  else if(frameCount< 250){
    lightOn();
  }

  else if(252<frameCount){
    lightOff();
    if (speed > 70){
      lightOn();
    }
  }

}

function lightOn(){
  wallFill = 90;
  ceilingFill = 60;
  floorFill = 120;    
  environment();
  fill(0,0,0,150)
  rect(0,0,width,height)
  lightBeam();    
  flashlight(100);
}


function lightOff(){
  wallFill = 70;
  ceilingFill = 40;
  floorFill = 100;    
  environment();
  fill(0,0,0,150)
  rect(0,0,width,height)
  flashlight(100); 
}


function flashlight(color){
  push();
  translate(width-30, height-30);
  let a = atan2(mouseY - height, mouseX - width);
  rotate(a);
  scale(2);
  fill(color, 0, 0)
  quad(-60,-10,20,-10,20,10,-60,10);
  quad(20,-10,30,-20,30,20,20,10);
  quad(60,-20,60,20,30,20,30,-20);
  pop();
}


function lightBeam(){
  fill(255,255,0,20);
  noStroke();
  /* tried to restrict where the beam could be to make it more realistic, but since the flashlight would sometimes not point in the same direction of the beam, i decided to comment it out 
  let x1 = map(mouseX, 0, width, 170, 330);
  let x2 = map(mouseY, 0, height, 150, 350);
  ellipse(x1,x2,180,180)
  ellipse(x1,x2,130,130)    
  */
  ellipse(mouseX,mouseY,180,180)
  ellipse(mouseX,mouseY,130,130)      
}


function environment(){
  //walls
  background(wallFill);

  //floor
  fill(floorFill);
  beginShape();
    vertex(0,500);
    vertex(0,470);
    vertex(210,260);
    vertex(290,260);
    vertex(500,470);
    vertex(500,500);
  endShape();

  //ceiling
  fill(ceilingFill);
  quad(20,0,480,0,290,120,210,120);

  //corridor
  fill(20);
  quad(210,120,290,120,290,260,210,260);
}