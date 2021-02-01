class Bird extends BaseClass{// bird is the the child of the base class (parent)
    constructor(x, y) {
      super(x,y,50,50);// Brings all the propeties from the parent class to the child class.                                  
      this.image = loadImage('sprites/bird.png');

    };
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
      
    }
  };
  