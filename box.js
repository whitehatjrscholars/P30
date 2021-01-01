class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0,
        'friction':1.2,
        'density':4.2
    }
    this.visibility = 255
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width*1.50;
    this.height = height;
    this.image = loadImage("hexagon.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
    fill(255);
    tint(255, this.visibility)
    image(this.image,pos.x,pos.y,this.width,this.height);
    pop();
  }
};
