const Eff = require("Effects")

const redArc = extendContent(ChargeTurret, "redArc", {
});

const redLithning = extend(BasicBulletType, {
    
    draw(b){},
    
    update(b){
        
        Lightning.create(b.getTeam(), Pal.meltdownHit, this.damage, b.x, b.y, b.rot(), redArc.range/6.5)
        
    },
    
});
redLithning.lifetime = 1;
redLithning.damage = 40;
redLithning.pierce = true;


//extend redArc
redArc.shootType = redLithning
redArc.chargeEffect = Eff.chargelightning(Pal.meltdownHit, 15)