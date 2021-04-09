class Bird{
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
   pos.x = mouseX;
   pos.y = mouseY;

   push();
   translate(pos.x,pos.y);
   rotate(this.body.angle);
   fill("red");
   strokeWeight(5);
   stroke("black");
   rect(0,0,this.width,this.height);
   pop();
   
       }
}