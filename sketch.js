var bird,birdImg;
var human ,humanImg;
var food,foodImg;
var cloud,cloudImg;
var ground,groundImg;
var score=0;

function preload(){
  birdImg=loadImage("images/bird.png");
  cloudImg=loadImage("images/cloud.png");
  foodImg=loadImage("images/food.png");
  humanImg=loadImage("images/Ninja-removebg-preview.png");
  groundImg=loadImage("images/dground.jpg");
}

function setup() {
  createCanvas(800,400);

  ground=createSprite(400,200,800,200);
  ground.addImage(groundImg);
   ground.velocityX=-3;
   ground.scale=2.9;

   bird=createSprite(60,200,20,20);
   bird.addImage(birdImg);
   bird.scale=0.2;
  

   food=createSprite(740,160,10,10);
   food.addImage(foodImg);
   food.scale=0.3;
  

}

function draw() {
  background(255); 
 if(ground.x<260){
  ground.x = 500;
 }
 if(keyIsDown(UP_ARROW)){
  bird.y=bird.y-10
}
if(keyIsDown(DOWN_ARROW)){
  bird.y=bird.y+10

}


 
 if(frameCount%150 === 0){
  
  human=createSprite(780,300,20,20);
  human.addImage(humanImg);
 human.scale=0.3;
 human.velocityX=-3
   
var rand =Math.random(150,740)
 }

 
  drawSprites();
}


function isTouching(){
  if(human.x,human.y = bird.x,bird.y){
    Text (gameOver,400,200);
    background="black";
  }

  }
