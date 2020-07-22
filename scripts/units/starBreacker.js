
var timerX = 0
var timerY = 0
var timerZ = 0
const starBreacker = extendContent(UnitType, "starbreak", {});
starBreacker.create(prov(() => new JavaAdapter(HoverUnit, {
    update(){
        
        this.super$update();
        
        if(timerY > 15){
            if(timerX < 15){
            unit = Vars.content.getByName(ContentType.unit,  "starwars-Istrebitel").create(this.getTeam());
			unit.set(this.x, this.y);
            unit.add();
            Effects.effect(Fx.spawn, this.x, this.y, this.rotation)
            };
            timerX++;
            if(timerX > 130){
                timerX = 0;
            };
            timerY = 0
        }
        else {
            
            timerY++;
        };
        
        unit = Units.closestEnemy(this.getTeam(), this.x, this.y, 300, boolf(Unit => !Unit.isDead()))

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
        
        unit = Units.closestEnemy(this.getTeam(), this.x, this.y, 300, boolf(Unit => !Unit.isDead()))
        
        Draw.rect(Core.atlas.find("starwars-superbracker-weapon-equip"), this.x, this.y, (unit != null) ? (this.angleTo(unit)-90) : (this.rotation-90))
        
    },
})));