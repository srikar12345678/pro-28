class Stone{
    constructor(x, y) {
      var options = {
        isStatic:false,
          'restitution':1,
          'friction':0.3,
          'density':0.8
      }
      this.body = Bodies.circle(x,y,25, options);
      this.image=loadImage("images/stone.png");
      
      
      
     
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    push();
      
      
      
    imageMode(CENTER);
    image(this.image, pos.x,pos.y, 50,50);
      
      
  
    }
  };
  
  