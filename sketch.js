var fixedRect, movingRect;


function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400,100,80,50);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(400,600,50,30);
  movingRect.shapeColor = "blue";
  
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + movingRect.height/2 ){
      fixedRect.shapeColor = "yellow";
      movingRect.shapeColor = "yellow";
    }
    else{
      fixedRect.shapeColor = "blue";
      movingRect.shapeColor = "blue";
    }
  drawSprites();
}