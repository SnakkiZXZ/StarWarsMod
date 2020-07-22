

module.exports = {	

    //new effect
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
    
    //new effect
    chargelightning(color, size){
        
        return newEffect(38, e => {
    
    Draw.color(color);
    
    /*rand = new Rand();
    rand.setSeed(e.id);
    
    var foutpow = 1-Interpolation.pow3In.apply(e.fin())
    
    for(i=0; i<5; i++){
        
    x = rand.random(-15, 15);
    y = rand.random(-15, 15);
    
    Lines.lineAngle(e.x+x*foutpow, e.y+y*foutpow, Mathf.angle(e.x+x*e.fout(), e.y+y*e.fout()), 4);
    
        }*/ 
        
        Angles.randLenVectors(e.id, 2, 1 + size * e.fout(), e.rotation, 120, Floatc2((x, y) => {
            
            Lines.lineAngle(e.x+x, e.y+y, Mathf.angle(x, y), 4);
            
        }))
    
    Fill.circle(e.x, e.y, 3*e.fin())
    
    })
        
    },
    
    //new effect
    laserShoot(color1, color2, size, int){
        
        return newEffect(15, e => {
        
        Draw.color(color1, color2, e.fin());
        
        Angles.randLenVectors(e.id, int, 1 + size * e.finpow(), e.rotation, 20, Floatc2((x, y) => {
            
            Drawf.tri(e.x+x, e.y+y, 3+3*e.fin(), 3+5*e.fin(), Mathf.angle(x, y))
            
        }));
        
        })
        
    },
    
    //new effect

}
