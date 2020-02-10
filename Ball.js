class Ball {
    constructor(x,y,width,height) {
     
      this.body =  Bodies.circle(600,250,20);
      
      World.add(world, this.body);
    }
    display(){
        fill ("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,20,20);
    }
  };
