var surviavalTime=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
function preload(){
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas(600,600);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
  
  ground=createSprite(200,350,900,10);
  ground.velocityX=-4
  ground.x = ground.width/2;
  console .log(ground.x);
   
}


function draw() {
background(350);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time:"+survivalTime,100,50);
  console.log(monkey.y)
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y>310){
    monkey.velocityY=-20;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  spawnBanana();
  stone();
  monkey.collide(ground);
  drawSprites();
}

function stone(){
    if(frameCount%80===0){
      rock=createSprite(250,325,20,40);
      
      rock.velocityX=-3
      rock.lifetime=100;
      rock.addImage(obstaceImage);
      rock.scale=0.1;
    }
   
}
function spawnBanana(){
  if(frameCount%80===0){
    banana=createSprite(300,150,40,20);
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-3; 
    banana.y=random(100,200);
    
  }
} 












