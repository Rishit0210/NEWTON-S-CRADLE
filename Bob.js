class Bob{

    constructor(x,y)
    {
        var option1 ={
            isStatic:false
        }
        this.body = Bodies.circle(x,y,55,option1);
        World.add(world,this.body)
        this.width=width;
        this.height=height;
        this.x=x
        this.y=y
    }
    display(){
     
        fill('blue')
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,55,55)
      }
}