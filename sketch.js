
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving" ,monkey_running)
  monkey.scale = 0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  
  FodGroup = createGroup()
  

  
}


function draw() {
  background("white")
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime,100,50)
         
  if(keyDown("space")&&monkey.y>159){
    monkey.velocityY = -12
    
    
  }
  
  monkey.velocityY =monkey.velocityY+0.8
  
  if(ground.x<0){
    ground.x = ground.width/2
  }
  food()
  obstacles()
  console.log(frameCount)
  
  monkey.collide(ground)
  drawSprites()

  
}

function food(){
  if(frameCount %80===0){
    var banana = createSprite(250,150,100,200)
  banana.addImage("bn",bananaImage)
  banana.scale = 0.1
    banana.y = Math.round(random(120,200))
    banana.velocityX = -6
    banana.lifetime = 200
    FodGroup.add(banana)
  }
}

function obstacles(){
  if(frameCount%70===0){
    var stone = createSprite(250,350,150,110)
    stone.addImage(obstaceImage)
    stone.scale = 0.2
    stone.velocityX = -7
    
    
  }
}






