const Eff = require("Effects");

const fragTitBullet = extend(ArtilleryBulletType, {
    
})
fragTitBullet.speed = 1;
fragTitBullet.damage = 15;
fragTitBullet.bulletWidth = 9;
fragTitBullet.bulletHeight = 12;
fragTitBullet.lifetime = 80;
fragTitBullet.splashDamageRadius = 20;
fragTitBullet.splashDamage = 15;

const titaniumBullet = extend(BasicBulletType, {
    
    draw(b){
        
        this.super$draw(b);
        
        Fill.circle(b.x, b.y, 2)
        
    },
    
    update(b){
        
        this.super$update(b);
        
        Effects.effect(Eff.bulletTraitTri(Pal.command, 60, 4, b.rot()), b.x + Mathf.range(1), b.y + Mathf.range(1));
        
    },
    
    despawned(b){
        
        Effects.effect(Fx.plasticExplosionFlak, b.x, b.y);
        
        Effects.shake(2, 5, b.x, b.y)
        
        for(i = 0; i < 10; i++){
            
        Bullet.create(fragTitBullet, b, b.x, b.y, Mathf.random(0, 360), Mathf.random(0.1, 0.5));
        }
        
    },
    
    hit(b){
        
        Effects.effect(Fx.plasticExplosionFlak, b.x, b.y);
        
        Effects.shake(2, 5, b.x, b.y)
        
        for(i = 0; i < 20; i++){
            
        Bullet.create(fragTitBullet, b, b.x, b.y, Mathf.random(0, 360), Mathf.random(0.1, 0.5));
        }
        
    },
    
});
titaniumBullet.speed = 10;
titaniumBullet.damage = 85;
titaniumBullet.bulletWidth = 8;
titaniumBullet.bulletHeight = 20;
titaniumBullet.shootEffect = Fx.shootSmallFlame;
titaniumBullet.smokeEffects = Fx.plasticExplosionFlak;
titaniumBullet.ammoMultiplier = 2;

const thoriumBullet = extend(BasicBulletType, {
    
    draw(b){
        
        this.super$draw(b);
        
        Fill.circle(b.x, b.y, 2)
        
    },
    
    update(b){
        
        this.super$update(b);
        
        Effects.effect(Eff.bulletTraitTri(Pal.command, 60, 4, b.rot()), b.x + Mathf.range(1), b.y + Mathf.range(1));
        
    },
    
    despawned(b){
        
        Effects.effect(Fx.plasticExplosionFlak, b.x, b.y);
        
        Effects.shake(2, 5, b.x, b.y)
        
        Damage.dynamicExplosion(b.x, b.y, 0, 30, 10, 16, Color.red);
        
    },
    
    hit(b){
        
        Effects.effect(Fx.plasticExplosionFlak, b.x, b.y);
        
        Effects.shake(2, 5, b.x, b.y)
        
        Damage.dynamicExplosion(b.x, b.y, 0, 30, 10, 16, Color.red);
        
    },
    
});
thoriumBullet.speed = 10;
thoriumBullet.damage = 89;
thoriumBullet.bulletWidth = 8;
thoriumBullet.bulletHeight = 20;
thoriumBullet.shootEffect = Fx.shootSmallFlame;
thoriumBullet.smokeEffects = Fx.plasticExplosionFlak;
thoriumBullet.ammoMultiplier = 1;

const surgeBullet = extend(BasicBulletType, {
    
    draw(b){
        
        this.super$draw(b);
        
        Fill.circle(b.x, b.y, 2)
        
    },
    
    update(b){
        
        this.super$update(b);
        
        Effects.effect(Eff.bulletTraitTri(Pal.surge, 60, 4, b.rot()), b.x + Mathf.range(1), b.y + Mathf.range(1));
        
    },
    
    despawned(b){
        
        Effects.effect(Fx.plasticExplosionFlak, b.x, b.y);
        
        Effects.shake(2, 5, b.x, b.y)
        
        for(i = 0; i < 4; i++){
            
        Lightning.create(b.getTeam(), Pal.surge, 23, b.x, b.y, Mathf.random(360), 10);
        
        }
        
    },
    
    hit(b){
        
        Effects.effect(Fx.plasticExplosionFlak, b.x, b.y);
        
        Effects.shake(2, 5, b.x, b.y)
        
        for(i = 0; i < 8; i++){
            
        Lightning.create(b.getTeam(), Pal.surge, 23, b.x, b.y, Mathf.random(360), 10);
        
        }
        
    },
    
});
surgeBullet.speed = 10;
surgeBullet.damage = 98;
surgeBullet.bulletWidth = 8;
surgeBullet.bulletHeight = 20;
surgeBullet.shootEffect = Fx.shootSmallFlame;
surgeBullet.smokeEffects = Fx.plasticExplosionFlak;
surgeBullet.ammoMultiplier = 2;



const relsa = extendContent(ArtilleryTurret, "magnit-relstron", {
});
relsa.ammo(Items.titanium, titaniumBullet, Items.thorium, thoriumBullet, Items.surgealloy, surgeBullet)

/*
    "thorium": {
        "speed": 50,
        "damage": 90,
"bulletWidth": 8,
"bulletHeight": 20,
"shootEffect": "shootSmallFlame",
"smokeEffect": "plasticExplosionFlak",
"ammoMultiplier": 2,
		"splashDamageRadius": 50,
		"splashDamage": 40
    }
*/