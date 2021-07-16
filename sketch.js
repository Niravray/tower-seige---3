
//adding Engine and worlds.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,polygon_img;
var slingShot;
var score = 0;

function preload()
{
	polygon_img = loadImage('polygon.png');
}

function setup() {


	//setting canvas.
	createCanvas(1300, 680);

    //creating engine.
        engine = Engine.create();
        world = engine.world;

        Engine.run(engine);

     polygon = Bodies.circle(100,100,35);
    World.add(world,polygon);

    

	//Creating the groundObject Here.
    ground1 = new Ground (650,670,1300,20);
	ground2 = new Ground (700,200,200,20);
    ground3 = new Ground (390,300,250,20);



    //creating the boxObject here.
	//level1
	block1 = new Box (300,275,30,40);
	block2 = new Box (330,275,30,40);
    block3 = new Box (360,275,30,40);
	block4 = new Box (390,275,30,40);
	block5 = new Box (420,275,30,40);
	block6 = new Box (450,275,30,40);
	block7 = new Box (480,275,30,40);
	//level2
	block8 = new Box (330,235,30,40);
	block9 = new Box (360,235,30,40);
	block10 = new Box(390,235,30,40);
	block11 = new Box (420,235,30,40);
	block12 = new Box (450,235,30,40);
    //level3
	block13 = new Box (360,195,30,40);
	block14 = new Box (390,195,30,40);
	block15 = new Box (420,195,30,40);
	//level4
	block16 = new Box (390,155,30,40);

    //another tower
    //level1
    block17 = new Box (640,175,30,40);
    block18 = new Box (670,175,30,40);
    block19 = new Box (700,175,30,40);
    block20 = new Box (730,175,30,40);
    block21 = new Box (760,175,30,40);
    block22 = new Box (670,135,30,40);
    block23 = new Box (700,135,30,40);
    block24 = new Box (730,135,30,40);
    block25 = new Box (700,95,30,40);


    slingshot = new SlingShot (this.polygon,{x:100,y:200})

   

	
  
}


function draw() {
background(0); 
textSize(20);
 fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
   text("SCORE : "+score,750,40); 
   textSize(10); 
   text("Press Space to get a second Chance to Play!!",650 ,350);
//displaying objects.
 ground1.display();
  ground2.display(); 
  ground3.display(); 
  //displaying blocks 
  //fill("blue"); 
  //stroke(15); 
  fill("skyblue"); 
  block1.display(); 
  block2.display();
   block3.display();
    block4.display();
     block5.display();
      block6.display(); 
      block7.display(); 
      fill("pink"); 
      block8.display(); 
      block9.display(); 
      block10.display(); 
      block11.display(); 
      block12.display(); 
      fill("turquoise"); 
      block13.display(); 
      block14.display(); 
      block15.display(); 
      fill("grey"); 
      block16.display()
      fill("skyblue");
       block17.display();
        block18.display();
         block19.display(); 
         block20.display(); 
         block21.display(); 
         fill("turquoise"); 
         block22.display(); 
         block23.display(); 
         block24.display(); 
         fill("pink") 
         block25.display();
          fill("gold")

  imageMode (CENTER);
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();

  block1.score(); 
  block2.score();
   block3.score(); 
   block4.score(); 
   block5.score(); 
   block6.score(); 
   block7.score(); 
   block8.score();
   block9.score(); 
   block10.score(); 
   block11.score(); 
   block12.score(); 
   block13.score(); 
   block14.score();
    block15.score(); 
    block16.score(); 
    block17.score(); 
    block18.score(); 
    block19.score(); 
    block20.score(); 
    block21.score(); 
    block22.score(); 
    block23.score(); 
    block24.score(); 
    block25.score()

  //drawSprites();
 
}


function mouseDragged(){
     Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
     } 
     function mouseReleased(){
          slingshot.fly(); 
       } 

     function keyPressed(){ 
         if(keyCode === 32){
         slingshot.attach(this.polygon); 
        } 
    }