const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var soldier;
var soldierimg;
var ground1, ground2;
var ground1img,ground2img;
var terrorist1, terrorist2;
var terrorist1img, terrorist2img;
var life1, life2, life3, life4, life5;
var lifeimg;
var rules, rulesimg;
var gameState = 1;
var Play = 1;
var End = 0;
var Start = 0;

// function for loading the images for sprites
function preload(){
  soldierimg = loadImage("images/Idle1img.png");
  backimg = loadImage("images/backimg1.png");
  lifeimg = loadImage("images/Lifeimg1.png");
  rulesimg = loadImage("images/Rulesimg.png");
  leftarrowimg = loadImage("images/leftarrowImg.png");
  rightarrowimg = loadImage("images/rightarrowImg.png");
  uparrowimg = loadImage("images/uparrowImg.png");
  downarrowimg = loadImage("images/downarrowImg.png");
  jumpIconImg = loadImage("images/jumpIconImg.png")




  soldierWalkAnimation = loadAnimation("soldierWalkImages/Walk 1.png","soldierWalkImages/Walk 2.png",
                        "soldierWalkImages/Walk 3.png",
                        "soldierWalkImages/Walk 4.png",
                        "soldierWalkImages/Walk 5.png",
                        "soldierWalkImages/Walk 6.png", 
                        "soldierWalkImages/Walk 7.png",
                        "soldierWalkImages/Walk 8.png",
                        "soldierWalkImages/Walk 9.png",
                        "soldierWalkImages/Walk 10.png");
  


soldierJumpAnimation = loadAnimation("soldierJumpImages/Jump 1.png","soldierJumpImages/Jump 2.png",
                        "soldierJumpImages/Jump 3.png",
                        "soldierJumpImages/Jump 4.png",
                        "soldierJumpImages/Jump 5.png",
                        "soldierJumpImages/Jump 6.png", 
                        "soldierJumpImages/Jump 7.png",
                        "soldierJumpImages/Jump 8.png",
                        "soldierJumpImages/Jump 9.png",
                        "soldierJumpImages/Jump 10.png");
  
}

// function for making sprites and bodies
function setup() {
    engine = Engine.create();
    world = engine.world;
    
    
    
    soldier = createSprite(100,400,50,50);
    soldier.addAnimation("walking_soldier",soldierWalkAnimation);
    soldier.scale = 0.2
    soldier.visible = false;

    life1 = createSprite(850,100,20,20);
    life1.addImage(lifeimg);
    life1.scale = 0.2;
    life1.visible = false;

    life2 = createSprite(940,100,20,20);
    life2.addImage(lifeimg);
    life2.scale = 0.2;
    life2.visible = false;

    life3 = createSprite(1030,100,20,20);
    life3.addImage(lifeimg);
    life3.scale = 0.2;
    life3.visible = false;

    life4 = createSprite(1120,100,20,20);
    life4.addImage(lifeimg);
    life4.scale = 0.2;
    life4.visible = false;

    life5 = createSprite(1210,100,20,20);
    life5.addImage(lifeimg);
    life5.scale = 0.2;
    life5.visible = false;

    rules = createSprite(100,50,20,20);
    rules.addImage(rulesimg);
    rules.scale = 0.5;

    ground1 = createSprite(500,600,80,20);
    ground1.visible = true;
    
    leftArrow = createSprite(1130,696,50,50);
    leftArrow.addImage(leftarrowimg);
    leftArrow.scale = 0.2;

    rightArrow = createSprite(1220,693,50,50);
    rightArrow.addImage(rightarrowimg);
    rightArrow.scale = 0.2;

    upArrow = createSprite(1175,650,50,50);
    upArrow.addImage(uparrowimg);
    upArrow.scale = 0.2;

    downArrow = createSprite(1175,695,50,50);
    downArrow.addImage(downarrowimg);
    downArrow.scale = 0.2;

    jumpIcon = createSprite(1300,690,50,50);
    jumpIcon.addImage(jumpIconImg);
    jumpIcon.scale = 0.1;
    
    ground2 = new Ground(607,742,2000,20);
    terrorist1 = new Terrorist(50,50,80,20);
    terrorist2 = new Terrorist(100,80,20,20);
   
}

function draw() {
  
    createCanvas(displayWidth, displayHeight);
    background(backimg);

    if(mousePressedOver(rules)){
      console.log("hi");
      text("hi",300,250,50,50)
    }
    
    if(gameState === Play){
      life1.visible = true;
      life2.visible = true;
      life3.visible = true;
      life4.visible = true;
      life5.visible = true;
      soldier.visible = true; 
    }
      text(mouseX+','+ mouseY,mouseX,mouseY);
      Engine.update(engine);
  
      ground2.display();
      terrorist1.display();
      terrorist2.display();
  
    // making a condition so that when rules icon/image is pressed some text should appear
     if(keyDown("Right_Arrow")) {
       soldier.x = soldier.x+4
     }
    // to make the soldier jump when space key is pressed
      if(keyDown("space")){
        soldier.velocityY = -10;
      }
    
    // giving the soldier gravity so that when space key is pressed the soldier will not go out ofthe canvas
      soldier.velocityY = soldier.velocityY+0.5;
  
    // so the ground1 will also move along with soldier
     ground1.x = soldier.x;

    // so that when space key is pressed and soldier will come down he will collide with the ground
     soldier.collide(ground1);
 

  drawSprites();
}