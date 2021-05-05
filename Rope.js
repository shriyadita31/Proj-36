class  Rope{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.8,
          length: 400
      }
      this.sling = Constraint.create(options);
      this.pointB=pointB;
      World.add(world, this.sling);

  }
  fly(){
      this.sling.bodyA =null;
  }
  display(){
      if(this.sling.bodyA){
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      
      strokeWeight(0);
      stroke("turquoise");
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
      }
  
}