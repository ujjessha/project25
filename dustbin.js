class Dustbin{
    constructor(x,y,width,height){

        this.image=loadImage("dustbingreen.png");
        
        var options={
            isStatic:false,
            restituution:0.3,
            friction:0.5,
            density:1.2

        }
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    }

 display(){

    var pos =this.body.position;
   
    push();

    translate(pos.x,pos.y);
    rectMode(CENTER);
    console.log(this.width);
    console.log(this.height);

    rect(0, 0, this.width, this.height);
    image(this.image,0 ,0 , 150, 20);
    pop();
  }
}