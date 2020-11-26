class Elastic{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.elastic = Constraint.create(options);
        World.add(world, this.elastic);
    }

    fly() {
        this.elastic.bodyA = null;
    }

    display(){
        if(this.elastic.bodyA) {
        var pointA = this.elastic.bodyA.position;
        var pointB = this.elastic.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
}