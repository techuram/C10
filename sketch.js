

function preload(){
  sea_img = loadImage("sea.png");
  ship_img = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}




function setup(){
  
  createCanvas(400,400);

  sea = createSprite(10, 150, 50, 200);
  sea.addImage(sea_img);
  sea.scale = 0.3;
  sea.velocityX = -10
  //sea.x = sea.width/2

  ship = createSprite(200, 200);
  ship.addAnimation("ship", ship_img);
  ship.scale = 0.2;
}


function draw() {
  //background(0);
  
  if(sea.x < 0){
  sea.x = sea.width/8
  }
  
  drawSprites();
  
}

