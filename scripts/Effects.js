

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
    bulletTraitTri(color, lifetime, size, rotation){
        
        return newEffect(lifetime, e => {
            
            Draw.color(color);
            Draw.alpha(e.fout());
            
            e.scaled(16, cons(s => {
		const angle = new Angles.ParticleConsumer({accept: function(x, y, en, out){
		    
			Fill.circle(s.x + x, s.y + y, out * 2 * 3 + 0.5);
			Fill.circle(s.x + (x / 2), s.y + (y / 2), out * 2);
			
		}});
	
		Angles.randLenVectors(e.id, s.finpow(), 3, 14, angle);
		
	}));
            
            
            Lines.lineAngleCenter(e.x, e.y, rotation, size)
            
        });
        
    },
    
    //new effect
    bulletHit(size, color, lifetime, range, int1, int2){
        
        return newEffect(lifetime, e => {
            
            Draw.color(color);
            
            Angles.randLenVectors(e.id, int1, range * e.finpow(), e.rotation, 180, Floatc2((x, y) => {
            
            Fill.circle(e.x + x, e.y + y, 0.5 + size * e.fout())
            
        }));
        
        Angles.randLenVectors(e.id, int2, 2 + range * e.finpow(), e.rotation, 180, Floatc2((x, y) => {
            
            Fill.circle(e.x + x, e.y + y, (size / 2) * e.fout())
            
        }));
            
        });
        
    },
    
    //new effect
    plasmaHit(size, color1, color2, lifetime1, lifetime2, range){
        
        return newEffect(lifetime2, e =>{
            
            Draw.color(color1, color2, e.fin());
            
            e.scaled(lifetime2, cons(s =>{
                
                Angles.randLenVectors(s.id, 1, range * s.finpow(), s.rotation, 180, Floatc2((x, y) => {
            
            Fill.circle(s.x + x, s.y + y, 0.5 + size * s.fout())
            
        }));
        
        Angles.randLenVectors(s.id, 2, 2 + range * s.finpow(), s.rotation, 180, Floatc2((x, y) => {
            
            Fill.circle(s.x + x, s.y + y, (size / 2) * s.fout())
            
        }));
                
            }));
            
        Lines.stroke(4 * e.fout());
            
        Lines.circle(e.x, e.y, range * 2 * e.finpow())
            
        });
        
    },
    
    //new effect
    trail(color, size, lifetime){
        
        return newEffect(lifetime, e => {
            
            Draw.color(color);
            
            const an = new Angles.ParticleConsumer({accept: function(x, y, en, out){
		    
			Fill.circle(e.x + x, e.y + y, out * size + 0.5);
			Fill.circle(e.x + (x / 2), e.y + (y / 2), out * (size / 2));
			
		}});
	
		Angles.randLenVectors(e.id, e.finpow(), 1, 4, an);
            
        });
        
    },
    
    //new effect

}
