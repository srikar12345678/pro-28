
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
  boy=loadImage("images/boy.png");
  //tree1=loadImage("images/tree.png")
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(930,200,30);
	mango3=new mango(930,150,30);
	mango4=new mango(1000,250,20);
	mango5=new mango(1050,170,40);
	mango6=new mango(1150,200,30);
	stone1=new Stone(250,420);
	
	


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	slingshot1= new Chain(stone1.body,{x:250,y:400});
	
	Engine.run(engine);

}

function draw() {
  

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  detectCollison(stone1,mango1);
  detectCollison(stone1,mango2);
  detectCollison(stone1,mango3);
  detectCollison(stone1,mango4);
  detectCollison(stone1,mango5);

  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  slingshot1.display();

  groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
	slingshot1.fly();
}
function detectCollison(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;


var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)

{
Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone1.body,{x:235,y:420});
    launcherObject.attach(stone1.body);
  }
}
