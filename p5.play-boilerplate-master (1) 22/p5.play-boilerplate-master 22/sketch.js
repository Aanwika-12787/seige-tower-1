const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//
var box,base;
var slingshot;
var box1
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var box9

//
function setup() {
  createCanvas(800,400);
 // engine = Engine.create();
    //world = engine.world;
    //
    box1= new Box(330,235,30,40);
    box2= new Box(360,235,30,40);
    box3= new Box(390,235,30,40);
    box4= new Box(420,235,30,40);
    box5= new Box(450,235,30,40);
    //
    box6= new Box(360,195,30,40);
    box7= new Box(390,195,30,40);
    box8= new Box(420,195,30,40);
    //
    box9= new Box(390,155,30,40);

  createSprite(400, 200, 50, 50);

}

function draw() {
  background(255,255,255);
   box1.display(); 
   box2.display(); 
   box3.display(); 
   box4.display(); 
   box5.display(); 
   box6.display(); 
   box7.display(); 
   box8.display(); 
   box9.display(); 
  drawSprites();
}