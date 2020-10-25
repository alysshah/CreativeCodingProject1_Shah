function setup() {
    createCanvas(500, 500);
}

function draw() {

  //walls
  background(120);

  //floor
  fill(170);
  beginShape();
    vertex(0,500);
    vertex(0,470);
    vertex(210,260);
    vertex(290,260);
    vertex(500,470);
    vertex(500,500);
  endShape();
  
  //ceiling
  fill(80);
  quad(20,0,480,0,290,120,210,120);
  
  //corridor
  fill(20);
  quad(210,120,290,120,290,260,210,260);


  translate(width-20, height-20);
  let a = atan2(mouseY - height, mouseX - width);
  rotate(a);
  scale(2);
  flashlight();
}

function flashlight(){
  fill(255, 0, 0)
  quad(-60,-10,20,-10,20,10,-60,10);
  quad(20,-10,30,-20,30,20,20,10);
  quad(60,-20,60,20,30,20,30,-20);
}