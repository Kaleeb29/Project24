class Dustbin{
 constructor(x,y,width,height){
     var options = {
     

     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;
     var pos = this.body.position;
     World.add(world,this.body);
 }
  display(){
    rectMode(CENTER);
    fill("red");
    rect(400,350, this.width, this.height);
  }
}