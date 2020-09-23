const Eff = require("Effects");

const m = extendContent(Block, "maik", {
    
    update(tile){
        
        if(tile.entity.power.status >= 1){
        tile.entity.updateTimed()
        
        
        if(tile.entity.timer.get(1, 120)){
            
            Effects.effect(Eff.bigWave(30, Color.red, 30), tile)
            
        }
        }
        
        if(tile.entity.returnTime() > 10000){
            
            unit = Vars.content.getByName(ContentType.unit,  "starwars-superbracker-palach").create(tile.getTeam());
            unit.add();
            tile.entity.sleep();
            
        }
        
    },
    setBars(){
	    
	    this.super$setBars()
        this.bars.add("level", func(entity => new Bar("bar.cap", Pal.ammo, floatp(() => entity.returnTime() / 10000))));
	   
	},
    
})
m.update = true
m.timers = 2
m.entityType = prov(() => extend(TileEntity, {
    
    _time: 0,
    
    updateTimed(){
        
        this._time++
        
    },
    returnTime(){
        
        return this._time
        
    },
    
}))