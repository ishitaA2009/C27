class Chain{
    constructor(bodyA,bodyB){
        var options={
          bodyA: bodyA,
          bodyB: bodyB,
          stiffness:0.8,
          length:100
        }

      this.chain = Constraint.create(options);
      World.add(world,this.chain);
      console.log(this.chain);
    }

    display(){

      var posA= this.chain.bodyA.position;
      var posB= this.chain.bodyB.position;

        line(posA.x,posA.y,posB.x,posB.y);

    }
}
