const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    log1 = new Log(600,100,200,20)
  ball=new Ball();
   
    chain=new Chain(log1.body,ball.body);
}

function draw() {
  background(0);  
  Engine.update(engine);
  log1.display();
  ball.display();
  chain.display();
 // strokeWeight(4);
  //line(log1.body.position.x,log1.body.position.y,ball.body.position.x,ball.body.position.y);
}