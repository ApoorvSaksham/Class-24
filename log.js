class Log{
    constructor(x,y,height,angle){
        var options ={

            restitution: 0.5,
            isStatic : false,
            friction: 1.0,
            density: 1
        }
    
        this.body = Bodies.rectangle(x,y,20,height,options);
        World.add(world,this.body);
        this.width = 20;
        this.height = height;
    Matter.Body.setAngle(this.body,angle);
    }
    display(){

     var angle = this.body.angle;
        var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   fill("yellow");
   strokeWeight(5);
   stroke("red");
   rect(0,0,this.width,this.height);
   pop();
   
     }
    
}