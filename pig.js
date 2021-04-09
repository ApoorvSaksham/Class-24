class Pig{
    constructor(x,y){
        var options ={

            restitution: 0.5,
            isStatic : false
        }
    
        this.body = Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        this.width = 50;
        this.height = 50;
    
    }
    display(){

     
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   rotate(this.body.angle);
   fill("green");
   strokeWeight(5);
   stroke("red");
   rect(0,0,this.width,this.height);
   pop();
   
       }
    
}