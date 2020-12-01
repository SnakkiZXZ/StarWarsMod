const Eff = require("libs/Effects");

const plasma = extend(BasicBulletType, {
    
    update(b){
        
        this.super$update(b);
        
        if(Mathf.chance(0.2)){
            
        Effects.effect(Eff.trail(Pal.heal, 4, 8), b.x, b.y);
        
        }
        
    },
    
});
plasma.lifetime = 54;
plasma.speed = 5;
plasma.damage = 65;
plasma.bulletHeight = 19;
plasma.bulletWidth = 15;
plasma.shootShake = 0.5;
plasma.shootEffect = Fx.shootBig2;
plasma.smokeEffect = Fx.shootBigSmoke2;
plasma.frontColor = Color.valueOf("aaff00");
plasma.backColor = Color.valueOf("00ff00");
plasma.hitEffect = Eff.plasmaHit(3, Pal.heal, Color.green, 20, 14, 9);
plasma.despawnEffect = Eff.plasmaHit(3, Pal.heal, Color.green, 20, 14, 9);

const shootCoord = [-4, 4]

const groun = extendContent(PowerTurret, "antiAir", {
    
    shoot(tile, type){
        
		entity = tile.ent();

		for(var i = 0; i < this.shots; i++){
		    
			this.tr.trns(entity.rotation, this.size * Vars.tilesize / 2, shootCoord[i]);
			
			this.bullet(tile, type, entity.rotation + Mathf.range(this.inaccuracy + type.inaccuracy));
			
			this.effects(tile);
			
		};

		this.useAmmo(tile);
		
    },
	
	bullet(tile, type, angle){
	    
        Bullet.create(type, tile.entity, tile.getTeam(), tile.drawx() + this.tr.x, tile.drawy() + this.tr.y, angle, 1);
        
    }
    
});
groun.shootType = plasma;
groun.powerUse = 8;
groun.xRand = 4;