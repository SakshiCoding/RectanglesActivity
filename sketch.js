var fixedrect, movingrect, object1, object2;

function setup() {
  createCanvas(800,400);
 movingrect= createSprite(400, 200, 50, 50);
 fixedrect= createSprite(400, 300, 80, 50);
 square1= createSprite(300, 300, 50, 40);
 square2= createSprite(300, 400, 60, 50);
 movingrect.shapeColor = "blue";
 fixedrect.shapeColor = "blue";
 square1.shapeColor = "purple";
 square2.shapeColor = "purple";
 movingrect.velocityY = -6;
 fixedrect.velocityY = 6;
}

function draw() {
  background(0);
  square1.y = mouseY;
  square1.x= mouseX;
  if(istouching(square1, square2)){
  square1.shapeColor = "orange";
  square2.shapeColor = "orange";
  }
  else{
  square1.shapeColor = "purple";
  square2.shapeColor = "purple";
  }
  bounceOff(movingrect, fixedrect)
  drawSprites();
}

