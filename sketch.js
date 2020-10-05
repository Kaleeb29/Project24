
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var container,paper;
var ground;  

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
    container = new Dustbin(500,350,100,150);
	  paper = new Paper(200,350); 
    ground = new Ground(400,650,800,10);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  container.display();
  paper.display();
  ground.display();
  
  drawSprites();

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }

}