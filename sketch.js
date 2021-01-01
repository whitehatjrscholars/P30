const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box,ground,bar1,bar2,bar3,barImage,slingshot;

function setup(){
    var canvas = createCanvas(1536,700);
    engine = Engine.create();
    world = engine.world;

    
    box = new Box(150,400,75,75);
    ground = new Ground2(1536/2,698,1536,40);
    base1 = new Ground2(650,600,300,20);
    base2 = new Ground2(1150,350,170,20);

    block1 = new Block(550,558,40,60);
    block2 = new Block(590,558,40,60);
    block3 = new Block(630,558,40,60);
    block4 = new Block(670,558,40,60);
    block5 = new Block(710,558,40,60);
    block6 = new Block(750,558,40,60);

    block11 = new Block2(590,498,40,60); 
    block12 = new Block2(630,498,40,60); 
    block13 = new Block2(670,498,40,60); 
    block14 = new Block2(710,498,40,60); 

    block22 = new Block3(630,438,40,60);
    block23 = new Block3(670,438,40,60);

    block24 = new Block(650,378,40,60);

    blockl2 = new Block(1110,308,40,60);
    blockl1 = new Block(1150,308,40,60);
    blockl3 = new Block(1190,308,40,60);

    blockl11 = new Block3(1130,248,40,60);
    blockl12 = new Block3(1170,248,40,60);

    blockl21 = new Block2(1150,188,40,60);
    
    slingshot = new SlingShot(box.body,{x:150,y:350});
}  

function draw(){
    background(55,43,43);
    Engine.update(engine);
    box.display();
    ground.display();
    base1.display();
    base2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block11.display();
    block13.display();
    block14.display();
    
    block12.display();

    block22.display();
    block23.display();

    block24.display();
    
   blockl2.display();
   blockl1.display();
   blockl3.display();
   
   blockl11.display();
   blockl12.display();

   blockl21.display();

   slingshot.display();

   textSize(28);
   textFont("Century Gothic");
   text("Press 'Space' To Try Again!",10,27);
   

}

function mouseDragged(){
    Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(box.body,{x:235, y:420})
		slingshot.attach(box.body);
  }
  
  if(keycode === space){
    box.x=200;
    box.y=200;
  }
}
