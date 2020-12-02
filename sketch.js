var car 
var wall
var speed,weight
function setup () {
    createCanvas(400,400)
car=createSprite(50,200,50,50)
wall=createSprite(400,200,50,height/2)
wall.shapeColor="red"
speed=random(5,9)
weight=random(400,1500)
car.velocityX=speed


}
function draw (){
background("purple")





if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/233) {

car.velocityX=0


deformation = 0.5*weight*speed*speed/22500

if(deformation>180){
    car.shapeColor=color(255,0,0)
}
if(deformation<180&&deformation>100){
car.shapeColor=color(230,230,0)
}
if(deformation<100){
    car.shapeColor=color(0,255,0)
}
    }

    drawSprites()
}
















