var wall,car; 


function setup() {
  createCanvas(800,400);
  wall=createSprite(650, 200, 100, 200);

  car=createSprite(200, 200,50, 50);
  car.velocityX=3;
}

function draw() {
  background("green");  

  bounceoff(car,wall);
  if(wall.x-car.x <(car.width=wall.width)/2 )
  {
  car.velocityX =0;
  var deformation=0.5*weight*speed*speed/22509;
  
  if (deformation>180)
  {
  car.shapeColor=(225,0,0);
  }

  if (deformation<180 && deformation<100)
  {
   car.shapeColor=color(230,230,0)
  }

  if(deformation<100)
  {
   car.shapeColor=color(0,255,0)
  }





  }
 
  drawSprites();
}

