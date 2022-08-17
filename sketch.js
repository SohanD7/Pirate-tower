const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world, ground;
var background_gif, tower, cannon, cannonBase;
var angle;
var balls = [];


function preload() {
  background_gif = loadImage("assets/background.gif");
  tower = loadImage("assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  angleMode(DEGREES);
  angle = 20;
  cannon = new Cannon(170, 90, 100, 100, angle);

}

function draw() {
  background(189);
  Engine.update(engine);

  image(background_gif, 0, 0, 1200, 600);

  image(tower, 50, 160, 170, 350);

  rect(ground.position.x, ground.position.y, width * 2, 1);

  cannon.display();
  for (var i = 0; i < balls.length; i++)
  {
    showCannonballs(balls[i],i);
  }
}

function showCannonballs(ball,i)
{
  if (ball)
  {
    ball.display();
  }
}

function keyPressed()
{
  if (keyCode == RIGHT_ARROW)
  {
    cannonball = new Cannonball(cannon.x, cannon.y + 20);
    balls.push(cannonball);
  }
}

function keyReleased() 
{
  if (keyCode == RIGHT_ARROW) {
    balls[balls.length-1].shoot();
  }
}