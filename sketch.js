var iss,spaceCraft,hasDocked=false;
var bgImg,issImg,spaceCraftImg,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3;
function preload(){

  bgImg=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png");
  spaceCraftImg=loadImage("spacecraft1.png");
  spaceCraftImg1=loadImage("spacecraft2.png");
  spaceCraftImg2=loadImage("spacecraft3.png");
  spaceCraftImg3=loadImage("spacecraft4.png");
}


function setup() {
  createCanvas(1100,700);
 iss = createSprite(550, 300, 50, 50);
 iss.addImage(issImg)
 iss.scale=0.7;

 




}

function draw() {
  background(bgImg);  
  drawSprites();

  if(!hasDocked){
  
    var spaceCraft = createSprite(Math.round(random(50, 750),550, 550, 10),625);
    spaceCraft.addImage(spaceCraftImg)
    spaceCraft.scale=0.3;
  
if (keyDown==="left") {
  spaceCraft.addImage(spaceCraft2Img)
 spaceCraft.x=spaceCraft.x-5

}
if (keyDown==="right") {
  spaceCraft.addImage(spaceCraft3Img)
 spaceCraft.x=spaceCraft.x+5

}
if (keyDown==="down") {
  spaceCraft.addImage(spaceCraft1Img)
 spaceCraft.velocityY=0

}
if (keyDown==="up") {
  spaceCraft.addImage(spaceCraft1Img)
 spaceCraft.x=spaceCraft.x-5

}
Text("DOCKING SUCCESSFUL!")
}

}