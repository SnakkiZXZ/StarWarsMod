

module.exports = {	

    chargeHeal(color1, color2, int){
        
        return newEffect(30, e => {
    
    Draw.color(color1, color2, e.fin());
    rand = new Rand();
    rand.setSeed(e.id);
    var foutpow = 1-Interpolation.pow3In.apply(e.fin())
    
    for(i=0; i<int; i++){
        
    x = rand.random(-15, 15);
    y = rand.random(-15, 15);
    Fill.circle(e.x+x*foutpow, e.y+y*foutpow, 2*e.fin())
    
    }})
      
    },

}
