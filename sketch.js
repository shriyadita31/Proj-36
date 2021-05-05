const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var b1,b2,b3,b4;
var b10,b11,b12,b13,b14;
var b21,b22,b23,b24;
var b31,b32,b33,b34,b30;
var b40,b41,b42,b43,b44;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  b1 = new Box(600, 100, 70, 70);
  b2 = new Box(600, 100, 70, 70);
  b3 = new Box(600, 100, 70, 70);
  b4 = new Box(600, 100, 70, 70);
  b10 = new Box(600, 100, 70, 70);
  b11 = new Box(700, 100, 70, 70);
  b12 = new Box(700, 100, 70, 70);
  b13 = new Box(700, 100, 70, 70);
  b14 = new Box(700, 100, 70, 70);
  b21 = new Box(700, 100, 70, 70);
  b22 = new Box(800, 100, 70, 70);
  b23 = new Box(800, 100, 70, 70);
  b24 = new Box(800, 100, 70, 70);
  b31 = new Box(800, 100, 70, 70);
  b32 = new Box(800, 100, 70, 70);
  b33 = new Box(800, 100, 70, 70);
  b34 = new Box(800, 100, 70, 70);
  b40 = new Box(800, 100, 70, 70);

  b30 = new Box(900, 100, 70, 70);


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b40.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display()

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}