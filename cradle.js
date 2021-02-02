class Cradle{
    constructor(bodyA,pointB){
    var options = { 
    bodyA : bodyA,
    pointB : pointB
    }
    this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
}