
var fixedrect,movingrect;

function setup() {
  createCanvas(600,600);
 
  fixedrect=createSprite(300,300,30,30);
  fixedrect.shapeColor="green";

  movingrect=createSprite(500,300,30,30);
  movingrect.shapeColor="green";

  todoroki=createSprite(300,100,30,30);
  todoroki.shapeColor="black";

  bakugo=createSprite(300,500,30,30);
  bakugo.shapeColor="yellow";

  Izuku=createSprite(100,300,30,30);
  Izuku.shapeColor="blue";

}

function draw() {
  background(255,255,255); 
  
  bakugo.x=World.mouseX;
  bakugo.y=World.mouseY;

  /*if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 ){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
   else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";  
   }*/

 if (istouching(Izuku,bakugo)){
  Izuku.shapeColor="red";
  bakugo.shapeColor="red";
 }
 else{
  bakugo.shapeColor="yellow";
  Izuku.shapeColor="blue";   
 }

  drawSprites();
}

function istouching (object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.y-object1.y<object2.height/2+object1.height/2 && object2.x-object1.x<object2.width/2+object1.width/2 && object1.y-object2.y<object1.height/2+object2.height/2 ) {
   return true;
  }
  else{
    return false;
  }
}