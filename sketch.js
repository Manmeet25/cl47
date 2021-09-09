const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine ,world,platform1,demon,demon2,slingshort,platform2,bouncer,p1,s1;
var stones=[];
var score = 0;
function preload(){

  back=loadImage("images/backgr.jpg")
 pImg=loadImage("images/boy2.png")
 
}

function setup() {

  createCanvas(1350,600);

  engine = Engine.create()
  world = engine.world;

  platform1= new Platform(1200,350,400,60);
  platform2 = new Platform(650,height,1650,100);
 
  p1 =createSprite(1180,270,150,150);
  p1.addImage(pImg)
  p1.scale=0.3

  demon = new Demon(450,400,250,250);
  demon2 = new Demon(-700,450,250,250);  
 
 
  

 // slingshot = new SlingShot(s1.body,{x:1110, y:255});

}

function draw() {
  background(back);
  Engine.update(engine)

  platform1.display();
  platform2.display();
  

  p1.display();
  Matter.Body.setVelocity(demon.body,{x:+3,y:0})
  demon.display();
  Matter.Body.setVelocity(demon2.body,{x:+3,y:0})
  demon2.display();

for(var i=0;i<stones.length;i++){
 shootStones(stones[i],i)
}



 // slingshot.display();


    drawSprites();
  
}

function keyPressed(){
  if (keyCode===32){
    var stone = new Stone(1106,270,80,80);
    stones.push(stone);
    
  }
}
function shootStones(stone,index){
stone.display();

}