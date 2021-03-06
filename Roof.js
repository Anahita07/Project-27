class Roof{
    constructor(x,y,width,height){
        var options ={
           isStatic : true
        }
    
        // Bodies.rectangle(x,y,width,height)
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER)
        fill(255);
        rect(pos.x, pos.y ,this.width,this.height);
        pop();
    }

}