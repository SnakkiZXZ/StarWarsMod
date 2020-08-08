const Eff = require("Effects")

const sandStorm = extend(BasicBulletType, {
    
    draw(b){
        
        
        Draw.color(Items.sand.color);
        Fill.circle(b.x, b.y, 3 * b.fout())
        
    },
    
});
sandStorm.lifetime = 100;
sandStorm.damage = 4;
sandStorm.speed = 1;
sandStorm.despawnEffect = Fx.none;
sandStorm.ammoMultiplier = 5;
sandStorm.hitEffect = Eff.bulletHit(2, Items.sand.color, 15, 10, 1, 2);

const glassStorm = extend(BasicBulletType, {
    
    draw(b){
        
        
        Draw.color(Items.metaglass.color);
        Fill.circle(b.x, b.y, 3 * b.fout())
        
    },
    
});
glassStorm.lifetime = 60;
glassStorm.damage = 5;
glassStorm.speed = 1.5;
glassStorm.despawnEffect = Fx.none;
glassStorm.ammoMultiplier = 3;
glassStorm.hitEffect = Eff.bulletHit(2, Items.metaglass.color, 15, 10, 1, 2);

const snorter = extendContent(ItemTurret, "raspilitel", {
    
    init(){
        
        this.ammo(Items.sand, sandStorm, Vars.content.getByName(ContentType.item,  "starwars-glass"), glassStorm);
        
        this.super$init()
        
    }
    
});