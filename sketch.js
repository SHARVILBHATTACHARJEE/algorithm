function setup() {
  createCanvas(800,400);
  m=createSprite(400, 200, 50, 50);
  f=createSprite(600,200,50,50)
}

function draw() {
  background("blue");  
  m.x=mouseX
  m.y=mouseY

  if(abs(m.x-f.x)<=m.width/2+f.width/2 &&abs(m.y-f.y)<=m.height/2+f.height/2){
    m.shapeColor="yellow"
    f.shapeColor="yellow"
  }else{
    m.shapeColor="white"
    f.shapeColor="white"
  }
  drawSprites();
}