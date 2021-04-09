class Box{
constructor(x,y){
    var options ={

        restitution: 0.5,
        isStatic : false,
        friction: 1 ,
        density: 1
    }

    this.body = Bodies.rectangle(x,y,70,70,options);
    World.add(world,this.body);
    this.width = 70;
    this.height = 70;

}

 display(){

     
     var pos = this.body.position;
push();
translate(pos.x,pos.y);
rotate(this.body.angle);
fill("white");
strokeWeight(5);
stroke("green");
rect(0,0,this.width,this.height);
pop();

    }
}