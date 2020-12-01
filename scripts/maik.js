const Eff = require("libs/Effects");

const m = extendContent(Block, "maik", {
    
    update(tile){
        
        if(tile.entity.power.status >= 1){
        tile.entity.updateTimed()
        
        
        if(tile.entity.timer.get(1, 120)){
            
            Effects.effect(Eff.bigWave(30, Color.red, 30), tile)
            
        }
        }
        
        if(tile.entity.returnTime() > 10000 && tile.entity.returnTime() < 10002){
            
            unit = Vars.content.getByName(ContentType.unit,  "starwars-starbreak").create(tile.getTeam());
            unit.add();
            tile.entity.setterTime(12000)
            
            
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
        
        if(this._time <= 10000){
        this._time++
        }
        
    },
    returnTime(){
        
        return this._time
        
    },
    setterTime(i){
        
        this._time = i
        
    }
    
}))