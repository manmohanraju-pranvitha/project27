
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1;



	


    function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

bob1=new Bob(200,600,80,50);
bob2=new Bob(300,600,80,50);
bob3=new Bob(400,600,80,50);
bob4=new Bob(500,600,80,50);
bob5=new Bob(600,600,80,50);
roof1=new Roof(400,100,800,15);
rope1=new Rope(bob1.body,roof1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  
  drawSprites();
 
}



