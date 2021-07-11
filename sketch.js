var monkey,monkey_running
var banana,banana_img
var Bananagroup,banana
var Obstaclegroup,obstacle,stone_img
var ground
var backframe,back_image
var score
var time 

function preload(){ 
  monkey_stopped=loadImage("Monkey_01.png")
  back_image=loadImage("jungle.jpg")
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  banana_img=loadImage("banana.png")
  stone_img=loadImage("stone.png")
}
function setup() {
  createCanvas(displayWidth - 20, displayHeight-30);
  backframe=createSprite(500,400,0,0)  
  backframe.addImage("background",back_image)
  backframe.velocityX=-6
  
  this.index=null

  
   
  monkey=createSprite(50,600,15,15)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(300,600,800,3)
  ground.velocityX=-3
  ground.visible=false
      
  textSize(20)
  textStyle(BOLD)
  fill("yellow")
  score=0

  
  
  Bananagroup= new Group()
  Obstaclegroup= new Group()
  }




function draw() {
  background(220);
  
  
  
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  
  if(backframe.x<0){
    backframe.x=backframe.width/2
  }
  
  if(monkey.isTouching(Bananagroup)){
    Bananagroup.destroyEach()
    score=score+1
  }

 
  
  monkey.velocityY=monkey.velocityY+0.7
  
  
  if(keyDown("space")&& monkey.y>=480){
    monkey.velocityY=-20
  }

  if (index === monkey.index){
  camera.position.x = displayWidth/2;
  camera.position.y = monkey[index-1].y;
  }

    

  
  switch(score){
   case 5: monkey.scale=0.2
          break;
   case 10: monkey.scale=0.3
          break;
   case 15: monkey.scale=0.4
          break;
   case 20: monkey.scale=0.5
          break;
   default: break;
}
    monkey.collide(ground)
  
  spawnObstacle()
  spawnBanana()
    
    
    
  
   if(monkey.isTouching(Obstaclegroup)){
     monkey.scale=0.1
    
   }
  
   
  
  
  drawSprites()
 if(score===20){
  text("Great Job",380,80)
   monkey.addImage(monkey_stopped)
   Bananagroup.destroy()
   Obstaclegroup.destroy()
   
 }
  text("Score: "+score,380,50)
  
}
function spawnObstacle() {
if(frameCount % 300 === 0) {
obstacle = createSprite(400,580,10,40);
obstacle.velocityX = -6 
obstacle.addImage(stone_img)
//assign scale and lifetime to the obstacle           
obstacle.scale = 0.2;
obstacle.lifetime = 70;
//add each obstacle to the group
Obstaclegroup.add(obstacle);
}
}
function spawnBanana() {
if (frameCount % 80===0){
banana=createSprite(400,590,20,20)
banana.y=random(300,400)
banana.addImage(banana_img)
banana.velocityX=-6
banana.lifetime=70
banana.scale=0.1
Bananagroup.add(banana);
}
}
