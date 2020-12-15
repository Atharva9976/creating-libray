var a,b,c,d,e;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(350,200,40,40);
  c=createSprite(500,200,50,50);
  d=createSprite(600,200,50,50);
  e=createSprite(700,300,50,50)
}

function draw() {
  background(255,255,255); 
  b.x=World.mouseX;
  b.y=World.mouseY;
if (isTouching(a,b)){
  b.shapeColor="red";
  a.shapeColor="red";

}
else{
  b.shapeColor="blue";
  a.shapeColor="blue";

}

if (isTouching(c,b)){
  b.shapeColor="red";
  c.shapeColor="red";

}
else{
  b.shapeColor="blue";
  c.shapeColor="blue";

}
if (isTouching(d,b)){
  b.shapeColor="red";
  d.shapeColor="red";

}
else{
  b.shapeColor="blue";
  d.shapeColor="blue";

}
if (isTouching(e,b)){
  b.shapeColor="red";
  e.shapeColor="red";

}
else{
  b.shapeColor="blue";
  e.shapeColor="blue";

}

  drawSprites();
}

