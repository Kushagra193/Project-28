
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
treeimg = loadImage("Sprites\Sprites/tree.png");
boyimg = loadImage("Sprites\Sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground();
	stone = new Stone(100,460,23);
	mango1 = new Mango(600,290,34);
	mango2 = new Mango(855,325,35);
	mango3 = new Mango(670,260,35);
	mango4 = new Mango(730,200,35);
	mango5 = new Mango(710,320,36);
	mango6 = new Mango(780,250,35);
	mango7 = new Mango(825,170,33);
	mango8 = new Mango(880,260,35);
	mango9 = new Mango(940,220,35);
	mango10 = new Mango(980,305,35);

 attach = new Launcher(stones.body,{x:100,y:465});

 tree = createSprite(775,368);
 tree.addimage(treeimg);
 tree.scale = 0.42;

 boy = createSprite(160,550);
 boy.addimg(boyimg);
 boy.scale = 0.125;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollison(stones,mango1);
  detectCollison(stones,mango2);
  detectCollison(stones,mango3);
  detectCollison(stones,mango4);
  detectCollison(stones,mango5);
  detectCollison(stones,mango6);
  detectCollison(stones,mango7);
  detectCollison(stones,mango8);
  detectCollison(stones,mango9);
  detectCollison(stones,mango10);

  
  drawSprites();

  stones.display();
  ground.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  function mouseDragged(){
	  Matter.Body.setPosition(stones.bodyA,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	  attach.fly()
  }
  function detectCollison(Lstone,Lmango){
	  mangoBodyPosition = lmango.body.setPosition
	  stoneBodyPosition = lstone.body.setPosition

	  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmago.body.false);
	  }
  }
  function keyPressed(){
	  if(keyCode===32){
		  Matter.Body.setPosition(stones.body,{x:235,y:420})
		  launcherObject.attach(stones.body);
	  }
  }
 }



