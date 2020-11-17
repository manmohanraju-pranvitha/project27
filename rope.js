class Rope{
    constructor(bodyA,bodyB){
      //  this.offsetX=offsetX;
       //this.offsetY=offsetY;
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
         //  pointB:{x:this.offsetX,y:this.offsetY}
            
        }
        
        
        

        this.rop=Constraint.create(option);
        World.add(world,this.rop);
    }
    
    display(){
        if(this.rop.bodyA){

        
        var pointA=this.rop.bodyA.position;
        var pointB=this.rop.bodyB.position;
        strokeWeight(6);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}