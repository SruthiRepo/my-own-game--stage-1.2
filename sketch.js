
var gameState = 0;
var score = 0;

var prisonerSprite, bgSprite;

var bgIMG, prisonerAnimation, coinIMG, obstacleIMG, guardIMG;
var coinsGroup, obstaclesGroup;

function preload(){
  prisonerAnimation = loadAnimation("./assets/p1.png", "./assets/p2.png","./assets/p3.png","./assets/p4.png",
  "./assets/p5.png","./assets/p6.png");
  bgIMG = loadImage("./assets/bg3.jpg");
}

function setup() {
  createCanvas(700, 900);

  bgSprite = createSprite(width/2, height/2, width, height);
  bgSprite.addImage("background", bgIMG);
  bgSprite.scale = 1.2;
  bgSprite.x = 300;

  prisonerSprite = createSprite(width/2, height-150);
  prisonerSprite.addAnimation("running", prisonerAnimation);
  prisonerSprite.scale = 0.5;
}


function draw() {
  background("black");

  if (gameState===0) {
    fill("red");
    textSize(25)
    text("Press SPACE to start the game", width/2-100, height/2);
    if(keyDown("space")){
      gameState=1;
    }
  }
  else if(gameState===1){
    background(255,255,255);  
    drawSprites();
  }
  else{

  }

  bgSprite.velocityX=-2;

  if (bgSprite.x<0) {

    bgSprite.x = width/2;
    
  }

}