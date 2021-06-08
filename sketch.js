var movingRect,fixedRect;



function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(500, 200, 70, 50); 
  fixedRect.shapeColor="red"; 
  fixedRect.debug=true;
   movingRect=createSprite(800, 200, 50, 70);
    movingRect.shapeColor="red";
     movingRect.debug=true;

  
}

function draw() {
  background(0);
movingRect.x=mouseX;
movingRect.y=mouseY; 
if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2&&
  fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2&&
  fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2  )
  {
   movingRect.shapeColor="green";
    fixedRect.shapeColor="green"; 
  } 
else{ 
  movingRect.shapeColor="red"; 
  fixedRect.shapeColor="red"; 
} 
  drawSprites();
}