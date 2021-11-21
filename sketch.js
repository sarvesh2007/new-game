var background;
var backgroundImage
var knight,knightImage
var invisibleground
var wizard,wizardImage
function preload(){
    backgroundImage=loadImage("background.png")
    knightImage=loadImage("knight.png")
    wizardImage=loadImage("wizard.png")
}
function setup(){

    createCanvas(800,600)
   bg=createSprite(400,300)
   bg.addImage("background",backgroundImage)
   bg.velocityX=-3;
   bg.scale=0.9
   knight=createSprite(70,500)
   knight.addImage(knightImage)
   knight.scale=0.2
   knight.setCollider("circle",0,0,1)
   knight.debug=true
obstacleGroup=new Group()
   
   invisibleground=createSprite(100,580,200,5)
   invisibleground.visible=false
}

function draw(){
    background("black");
    
    if(bg.x<100){
        bg.x = 400
    }
    if(keyDown(UP_ARROW) && knight.y>470){
     knight.velocityY=-4 
    }
    knight.velocityY=knight.velocityY+0.8
    knight.collide(invisibleground)
    
     
    spawnobstacles()
    drawSprites();
    if(knight.isTouching(obstacleGroup)){
        knight.velocityY=0
        obstacleGroup.setVelocityXEach(0)
        bg.velocityX=0
        stroke("red")
        textSize(40)
        text("game over",300,300)  
            }
}
 function spawnobstacles(){
     if(frameCount%120==0){
    var obstacle=createSprite(700,550,10,10)
    obstacle.addImage(wizardImage)
    obstacle.velocityX=-3
    obstacleGroup.add(obstacle)
    obstacle.scale=0.5;
}



 }