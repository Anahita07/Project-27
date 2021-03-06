const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob3,bob5;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/2-200,500,50);

	bob1 = new Bob(100,200,20);
	bob2 = new Bob(200,200,20);
	bob3 = new Bob(300,200,20);
	bob4 = new Bob(400,200,20);
	bob5 = new Bob(600,200,20);

	rope1 = new Rope(bob1.body,roof.body,-160,0);
	rope2 = new Rope(bob2.body,roof.body,-80,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,80,0);
	rope5 = new Rope(bob5.body,roof.body,160,0);


	//Create the Bodies Here.

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("green");

 Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
 
}

function keyPressed() {
	
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
   }
 }
