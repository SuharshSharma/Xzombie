var steve;
var steveImg,bgImg,bgImg2;
var zombiE,zombie1,zombie2,zombie3;
function preload(){
  steveImg = loadAnimation("images/P1.png","images/P2.png","images/P3.png","images/P4.png","images/P5.png","images/P6.png");
  bgImg2= loadImage("images/bg1img.jpg");
  

}
function setup() {
  createCanvas(800,400);
  
  bg = createSprite(400,200)
  bg.addImage (bgImg2);
  bg.scale = 0.8;


  steve = createSprite(70,300,100,100);
  steve.addAnimation("player",steveImg);
  steve.scale = 0.7;
  

 // createSprite(400, 200, 50, 50);
}



function draw() {
  background("yellow");  
  if(keyDown("UP_ARROW")){
    steve.y = steve.y-5;

  }
  if(keyDown("DOWN_ARROW")){
    steve.y = steve.y+5;

  }
  if(keyDown("RIGHT_ARROW")){
    steve.x = steve.x+5;

  }
  if(keyDown("LEFT_ARROW")){
    steve.x = steve.x-5;

  }
  SpownZombies();
  drawSprites();
}
function SpownZombies(){
  if(frameCount%200===0){
    zombiE = createSprite(900,300,50,150);
    zombiE.velocityX = -5;
  }
}
