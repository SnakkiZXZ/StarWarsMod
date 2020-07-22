const Eff = require("Effects")


const redLaser = extendContent(PowerTurret, "redLaser", {
});

//bullet
const laser = extend(BasicBulletType, {
    
    draw(b){
        
        this.super$draw(b);
        Draw.color(Pal.meltdownHit, Color.red, b.fin());

        for(i = 0; i < 7; i++){
        Tmp.v1.trns(b.rot(), i * 8);
        
        sl = Mathf.clamp(b.fout() - 0.5) * (80 - i * 10);
        
        Drawf.tri(b.x + Tmp.v1.x, b.y + Tmp.v1.y, 4, sl, b.rot() + 90);
        
        Drawf.tri(b.x + Tmp.v1.x, b.y + Tmp.v1.y, 4, sl, b.rot() - 90);
        
            }
                    
        Drawf.tri(b.x, b.y, 20 * b.fout(), (80 + 50), b.rot());
        
        Drawf.tri(b.x, b.y, 20 * b.fout(), 10, b.rot() + 180);
        
        Draw.reset();
        
    },
    
    update(b){
        
        if(b.timer.get(18)){
            
        Damage.collideLine(b, b.getTeam(), Fx.lava, b.x, b.y, b.rot(), 80);
        
        }
        
    },
    
});
laser.lifetime = 17;
laser.speed = 1;
laser.damage = 70;
laser.pierce = true;


//extend redLaser
redLaser.shootType = laser;
redLaser.smokeEffect = Eff.laserShoot(Color.red, Pal.meltdownHit, 40, 12)