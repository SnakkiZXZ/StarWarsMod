var x = 0
const starBreacker = extendContent(UnitType, "starbreak", {});
starBreacker.create(prov(() => new JavaAdapter(HoverUnit, {
    draw(){
        Draw.rect(Core.atlas.find("starwars-starbreak"), this.x, this.y, this.rotation-90);
        if(this.target){
        if(this.timer.get(15)){
            if(x<15){
            unit = Vars.content.getByName(ContentType.unit,  "starwars-Istrebitel").create(this.getTeam());
			unit.set(this.x, this.y);
            unit.add();
            Effects.effect(Fx.spawn, this.x, this.y, this.rotation)
            };
            x++;
            if(x>130){
                x=0
            }
        }
    }
    }
})));