
module.exports = {
    
    drawWeap(base, weap, vec){
        
        base.
        
        Draw.rect(weap.getRegion(), );
        
    }
    weaponPlus(name, cont){
        const weap = extendContent(Weapon, name, {
            
            getTarget(){
                
                return this.target
                
            },
            setTarget(target){
                
                this.target = target
                
            },
            
        });
        return weap
    },
}