var movingRect,fixedRect,o1,o2;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(700,200,50,50);
  o1=createSprite(200,45,50,50);
  o2=createSprite(399,82,50,50);
}

function draw() {
  background(255,255,255);  
movingRect.x=mouseX;
movingRect.y=mouseY;

if(isTouching(movingRect,fixedRect)){
movingRect.shapeColor="red";
fixedRect.shapeColor="red";

}
else if(isTouching(movingRect,o1)){
o1.shapeColor="red";
movingRect.shapeColor="red";
}

else if(isTouching(movingRect,o2)){
o2.shapeColor="red";
movingRect.shapeColor="red";
}



else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  o1.shapeColor="green";
  o2.shapeColor="green";
}


  drawSprites();
}



function isTouching(object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2
    && object2.x-object1.x<=object1.width/2+object2.width/2 &&
    object1.y-object2.y<=object1.height/2+object2.height/2
    && object2.y-object1.y<=object1.height/2+object2.height/2){
      return true;
    }
    else{
      return false;
    }
  

}