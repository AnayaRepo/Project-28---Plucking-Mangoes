class Mango{
    constructor(x,y,radius) {
        var options = {
            isStatic: true,
            restitution:0,
            friction:1,
        }
        this.x=x; this.y=y; 
        this.r=radius;
        this.image=loadImage("mango.png"); 
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);
    }
    display(){
        //console.log(this.body.position);
        var pos= this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.r*2,this.r*2);
        pop();
    }
}