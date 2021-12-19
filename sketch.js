var edges,song;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 50);
  fixedRect.velocityX=2;
  fixedRect.velocityY=3;
song=new sound("hmmss.mp3")
song
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  edges=createEdgeSprites()
  fixedRect.bounceOff(edges)
  drawSprites();
}





