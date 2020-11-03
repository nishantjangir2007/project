var car,wall;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  
  car.velocityX=speed;
  car.shapecolor=color("white");
   car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapecolor=color("grey");

}

function draw() {
  background("black"); 
 
  if (wall.x-car.x<(car.width+wall.width/2)) {
    car.velocityX=0;
    var deformation=0.5*width*speed*speed/2250}
    if (deformation>180) {
      car.shapecolor=color("red");
    }
    if (deformation<180&& deformation>100) {
      car.shapecolor=color("yellow");
    }
    if (deformation<100) {
      car.shapecolor=color("green");
    }
  drawSprites();
}