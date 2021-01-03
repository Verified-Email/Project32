class Box{
  constructor(x, y){
    var options={
      restitution:0.8,
      density:1.0,
      friction:1.0,
    }
    this.body=Bodies.rectangle(x,y,30,40,options);
    this.x=x;
    this.y=y;
    this.width=30;
    this.height=40;
    World.add(world,this.body)
    this.visibility=255;

  }
  display(){
    if (this.body.speed < 3) {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,30,40);
      pop();
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility-2;
      tint(255,this.visibility);
      pop();
    }
  }
  score(){
    if(this.visibility < 225 && this.visibility > 0){
        score++;
    }
}
}