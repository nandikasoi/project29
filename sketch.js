const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2;
var block1,block2,block3,block4,block5;
var block6,block7,block8;
var block8;

var polygon,slingshot;

function setup() {
  createCanvas(800,400);
  var stand1 = new Stand1(325,230,50,20);
  var stand2 = new stand2(400,300,60,20);

  // on stand1 level two 
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  // level three
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);
  // top
  block9 = new Block(390,155,30,40);

  // polygon holder with slings
  polygon = Bodies.circles(50,200,20);
  World.add(world,polygon);

  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  slingshot = new Slingshot(this.polygon,{x:100 , y:200});

}

function draw() {
  background(32,32,32);  
  
  stand1.dispaly();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  polygon.display();
  slingshot.display();

}

function mouseDragged () {

  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}

function mousePressed () {
  polygon.fly();
}