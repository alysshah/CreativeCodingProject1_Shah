let initialTime = 0;
let waitTime = 3000;

let wallFill = 140;
let ceilingFill = 100;
let floorFill = 190;

let arrayY = [50,100,150,200,250,300,350,400,450,500];



function setup() {
    createCanvas(500, 500);
}



function draw() {

  noCursor();

  stroke(1);
  let speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);
  
  if (frameCount < 200){
    environment();
  }
  
  else if(frameCount<250){
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
    for (let i = 0; i < 10; i++) {
      noStroke();
      fill(0,0,0,30)
      rect(i, arrayY[i], width, 10);
      arrayY[i]+=15;
      if (arrayY[i] > height) {
        arrayY[i] = 0;
      }
    }
    flashlight(200);
  }
  
  else if(frameCount< 350){
    lightOn();
  }

  else if(351<frameCount){
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
  stroke(1);
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