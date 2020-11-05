let initialTime = 0;
let waitTime = 3000;

let wallFill = 140;
let ceilingFill = 100;
let floorFill = 190;

let array = [50,100,150,200,250,300,350,400,450,500];



function setup() {
    createCanvas(500, 500);
}



function draw() {

  noCursor();

  stroke(1);
  let speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY);
  
  if (frameCount < 150){
    environment();
    //frame1
    stroke(117, 97, 66);
    strokeWeight(5);
    fill(152, 122, 161);
    beginShape();
      vertex(50,150);
      vertex(100,160);
      vertex(100,220);
      vertex(50,230);
      vertex(50,150);
    endShape();

    //frame2
    stroke(117, 97, 66);
    strokeWeight(6);
    fill(140, 189, 176);
    beginShape();
      vertex(350,130);
      vertex(430,110);
      vertex(430,190);
      vertex(350,190);
      vertex(350,130);
    endShape();

    //plant
    strokeWeight(1);
    stroke(0);
    fill(255,0,0);
    rect(140,270,30,70);
    beginShape();
      vertex(170,270);
      vertex(180,260);
      vertex(180,330);
      vertex(170,340);
    endShape();
    fill(25, 120, 50);
    beginShape();
      vertex(140,270);
      vertex(130,255);
      vertex(117,263);
      vertex(127,247);
      vertex(146,256);
      vertex(134,219);
      vertex(154,254);
      vertex(150,233);
      vertex(154,209);
      vertex(160,240);
      vertex(169,216);
      vertex(168,234);
      vertex(163,256);
      vertex(176,244);
      vertex(191,235);
      vertex(180,260);
      vertex(170,270);
      vertex(140,270);
    endShape();
  }
  
  else if(frameCount<250){
    if (frameCount%4 == 0){
      wallFill = 20;
      ceilingFill = 10;
      floorFill = 50;
    }else{
      wallFill = 140;
      ceilingFill = 100;
      floorFill = 190;        
    }
    environment();
    for (let i = 0; i < 10; i++) {
      noStroke();
      fill(0,0,0,30)
      rect(i, array[i], width, 10);
      array[i]+=15;
      if (array[i] > height) {
        array[i] = 0;
      }
    }
    flashlight(200);
  }
  
  else if(frameCount < 430){
    lightOn();
  }

  else if(frameCount < 460){
    if (frameCount%4 == 0){
      lightOn();
      push();
      translate(220,160);
      scale(0.2);
      figure();
      pop();
    }else{
      lightOff();
    }
  }

  else if(frameCount<560){
    lightOff();
  }
  
  else if(frameCount<590){
    if (frameCount%4 == 0){
      lightOn();
      push();
      translate(170,140);
      scale(0.5);
      figure();
      pop();
    }else{
      lightOff();
    }
  }
  
  else if(frameCount<690){
    lightOff();
  }
 
  else if(frameCount<720){
    if (frameCount%4 == 0){
      lightOn();
      push();
      translate(90,90);
      scale(1);
      figure();
      pop();
    }else{
      lightOff();
    }
  }
  
  else if(frameCount<910){
    lightOff();
  }
  
  else if(frameCount<915){
    endJumpscare();
  }
  
  else if(915<frameCount){
    fill(0);
    rect(0,0,500,500);
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

  strokeWeight(1);
  stroke(0);

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


function figure(){
  noStroke();
  fill (20);
  beginShape();
    vertex(172,29); vertex(155,37); vertex(145,53);
    vertex(146,71); vertex(150,81); vertex(156,97);
    vertex(151,109); vertex(140,118); vertex(117,121);
    vertex(103,131); vertex(102,147); vertex(90,167);
    vertex(88,185); vertex(80,208); vertex(72,227);
    vertex(62,260); vertex(57,285); vertex(56,312);
    vertex(54,346); vertex(54,359); vertex(65,346);
    vertex(64,329); vertex(80,290); vertex(94,257);
    vertex(95,233); vertex(111,209); vertex(122,189);
    vertex(123,208); vertex(123,234); vertex(118,271);
    vertex(116,305); vertex(117,341); vertex(121,371);
    vertex(125,400); vertex(128,442); vertex(122,464);
    vertex(127,508); vertex(127,539); vertex(132,573);
    vertex(117,592); vertex(113,602); vertex(132,606);
    vertex(152,585); vertex(149,555); vertex(154,522);
    vertex(159,492); vertex(155,455); vertex(165,419);
    vertex(171,357); vertex(179,426); vertex(187,463);
    vertex(184,497); vertex(196,558); vertex(195,574);
    vertex(200,601); vertex(222,609); vertex(229,599);
    vertex(212,574); vertex(212,552); vertex(220,489);
    vertex(213,439); vertex(222,408); vertex(220,373);
    vertex(220,336); vertex(220,306); vertex(216,258);
    vertex(222,227); vertex(228,195); vertex(238,231);
    vertex(244,254); vertex(261,272); vertex(267,289);
    vertex(281,306); vertex(281,333); vertex(297,359);
    vertex(297,317); vertex(286,285); vertex(267,229);
    vertex(257,194); vertex(245,153); vertex(235,133);
    vertex(193,108); vertex(192,92); vertex(198,77);
    vertex(197,55); vertex(185,37);
  endShape();
}


function endJumpscare(){ //added a jumpscare because it was recommended during my presentation
  fill(0);
  rect(0,0,500,500);
  noStroke();
  fill(255);
  ellipse(315,320,480,560)
  fill(0);
  ellipse(230,220,90,100);
  ellipse(360,200,90,100);
  fill(255);
  ellipse(230,220,60,60);
  ellipse(360,200,60,60);
  fill(0);
  ellipse(230,220,15,15);
  ellipse(360,200,15,15);
  beginShape();
  vertex(150,350);
  vertex(260,410);
  vertex(320,400);
  vertex(450,300);
  vertex(470,200);
  vertex(460,320);
  vertex(350,430);
  vertex(250,450);
  endShape();
}
