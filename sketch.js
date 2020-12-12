
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof(700,100,550,40)

    bobObject1=new Bob(475,500)
    bobObject2=new Bob(585,500)
    bobObject3=new Bob(695,500)
    bobObject4=new Bob(805,500)
    bobObject5=new Bob(915,500)
    
	  Engine.run(engine);
    chain1=new Chain(bobObject1.body,roof.body,-40*5.6,0)
    chain2=new Chain(bobObject2.body,roof.body,-40*2.9,0)
    chain3=new Chain(bobObject3.body,roof.body,-40*0.2,0)
    chain4=new Chain(bobObject4.body,roof.body,+40*2.5,0)
    chain5=new Chain(bobObject5.body,roof.body,+40*5.2,0)
}


function draw() {
  rectMode(CENTER);
  background(200);

  roof.display();

  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  
  drawSprites();
 
}

function keyPressed(){

  if (keyCode === UP_ARROW){
    
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:150,y:-700});
    
  }
}



