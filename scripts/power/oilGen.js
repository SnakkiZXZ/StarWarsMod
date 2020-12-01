
const oilgen = extendContent(PowerGenerator, "oil-generator", {
    
    getPowerProduction(tile){
        
        entity = tile.ent();
        if(entity == null) return 0;
        
        return this.powerProduction * (entity.getLiquidCount() > 0.01 ? entity.getLiquidCount() : 0);
        
    },
    
    update(tile){
        this.super$update(tile);
        entity = tile.ent()
        if(entity == null) return;
        
        entity.setLiquidCount(entity.liquids.get(Liquids.oil) / this.liquidCapacity);
        entity.updateHeat();
        
        if(entity.getLiquidCount() > 0.01){
            
            Effects.effect(Fx.lava, tile.drawx(), tile.drawy())
            
        }
        
        //print(tile.entity.x + " l " + tile.drawx() + "  h  " + this.x);
        
    },
    
    draw(tile){
        this.super$draw(tile);
        entity = tile.ent()
        if(entity == null) return;
        
        Draw.color(Liquids.oil.color);
        Draw.alpha(entity.getLiquidCount);
        
        Draw.rect(Core.atlas.find(this.name + "-liquid"), tile.drawx(), tile.drawy());
        
        Draw.color();
        
        Draw.rect(Core.atlas.find(this.name + "-top"), tile.drawx(), tile.drawy());
        
        Draw.color(Pal.turretHeat);
        Draw.alpha(entity.getSinHeat());
        Draw.blend(Blending.additive);
        Draw.rect(Core.atlas.find(this.name + "-rim"), tile.drawx(), tile.drawy());
        Draw.color();
        Draw.blend();
        
        Draw.reset();
        
    },
    
    generateIcons(){
        
        return [
            
            Core.atlas.find(this.name),
            Core.atlas.find(this.name + "-top"),
            
            ]
        
    }
    
});
oilgen.entityType = prov(() => extend(PowerGenerator.GeneratorEntity, {
    _heat: 0,
    _liquidCount: 0,
    
    setLiquidCount(c){
        this._liquidCount = c
    },
    getLiquidCount(){
        return this._liquidCount
    },
    updateHeat(){
        
        this._heat = Mathf.lerpDelta(this._heat, this._liquidCount, 0.02);
        
    },
    getHeat(){
        return this._heat
    },
    getSinHeat(){
        
        
        return Math.min(this._heat, 0.4 + Math.abs(Math.sin(Time.time() / 18)))
        
    },
    
}));
oilgen.liquidCapacity = 35;