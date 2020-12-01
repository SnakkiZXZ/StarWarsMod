
const sStarBreacker = extendContent(UnitType, "superbracker-palach", {});
starBreacker.create(prov(() => new JavaAdapter(FlyingUnit, {
    update(){
        
        this.super$update();
        
        if(this.getTimer().get(1, 60) ){
            unit = Vars.content.getByName(ContentType.unit,  "starwars-Istrebitel").create(this.getTeam());
			unit.set(this.x, this.y);
            unit.add();
            Effects.effect(Fx.spawn, this.x, this.y, this.rotation)
            
        }
        
        unit = Units.closestEnemy(this.getTeam(), this.x, this.y, this.range*2, boolf(Unit => !Unit.isDead()))

        if(unit != null && timerZ > 15){
            
            Calls.createBullet(Bullets.missileExplosive, this.getTeam(), this.x, this.y, this.angleTo(unit), 1, 2);
            
            timerZ = 0
        }
        else {
            timerZ++;
        };
    
    },
    draw(){
        
        this.super$draw();
        
        unit = Units.closestEnemy(this.getTeam(), this.x, this.y, this.range*2, boolf(Unit => !Unit.isDead()))
        
        Draw.rect(Core.atlas.find("starwars-superbracker-weapon-equip"), this.x, this.y, (unit != null) ? (this.angleTo(unit)-90) : (this.rotation-90))
        
    },
})));
sStarBreacker.timers = 5;