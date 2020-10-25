let wallFill = 140;
let ceilingFill = 100;
let floorFill = 190;


function setup() {
    createCanvas(500, 500);
}


function draw() {

  stroke(1);
  
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
    flashlight();
  }
  
  else if(151<frameCount){
    fill(255,0,0);
    rect(50,50,70,70)
    wallFill = 70;
    ceilingFill = 40;
    floorFill = 100;    
    environment();
    flashlight();
    lightBeam();
  }

}


function flashlight(){
  push();
  translate(width-30, height-30);
  let a = atan2(mouseY - height, mouseX - width);
  rotate(a);
  scale(2);
  fill(255, 0, 0)
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