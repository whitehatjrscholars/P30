class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.5,
          'density':2.2
      }
      this.visibility = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 3){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      stroke(0);
      strokeWeight(1);
      fill(135,206,234);
      rect(pos.x,pos.y,this.width,this.height);
      pop();
      }else{
        World.remove(world, this.body)
        push()
        this.visibility = this.visibility - 5;
        pop();
      }

      
    }
  };