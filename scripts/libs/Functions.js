

module.exports = {	
    
    getMax(int1, int2){
        
        if(int1 > int2){
            return int1
        }
        else {
            return int2
        }
        
    },
    
    getMin(int1, int2){
        
        if(int1 < int2){
            return int1
        }
        else {
            return int2
        }
        
    },
    
    tileRadius(x1, y1, range, func){
        
        under = Vars.world.tileWorld(x1, y1)
        if(under != null){
            
        for(x = -range+under.drawx(); x<range+under.drawx(); x += 8){
        for(y = -range+under.drawy(); y<range+under.drawy(); y += 8){
            
tile = Vars.world.tileWorld(x, y);
            if(tile != null){
            
            func(tile)
            
            }
        }}
        }
        
    },
    
    
    
}