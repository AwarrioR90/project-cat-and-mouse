var canvas , bg,background;
var together;
var tom, tomImg1 , tomImg2,tomImg3
var jerry,jerryImg1, jerryImg2, jerryImg3;

    

function preload(){

   bg = loadImage("images/garden.png");
   tomImg1 = loadImage("images/cat1.png");
   tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
tomImg3 = loadImage("images/cat4.png");
   jerryImg1 = loadImage("images/mouse1.png");
   jerryimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
   jerryImg3 = loadImage("images/mouse4.png");
}






function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   
   
tom =  createSprite(870,600)
tom.addImage(tomImg1)
tom.scale = 0.2;
  jerry = createSprite(200,600)
   jerry.addImage(jerryImg1);
   jerry.scale = 0.15
}

function draw() {
  background(bg);
if(tom.isTouching(jerry)){
tom.velocityX = 0,
tom.addAnimation(tomImg3);
tom.x = 300;
jerry.addAnimation(jerryImg3);
}
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){


if (keyCode === LEFT_ARROW){

tom.velocityX = -5;
tom.addAnimation(tomImg2);
jerry.addAnimation(jerryImg2);


}







}
  





  //For moving and changing animation write code here



