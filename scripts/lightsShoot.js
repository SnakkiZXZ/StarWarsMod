const Eff = require("Effects");
const Funct = require("Functions");

const color = Color.valueOf("FFD8B2");
const size = [8, 4, 16];

const lightsSilicon = extend(BasicBulletType, {
    
    draw(b){
        
        this.super$draw(b);
        
        finpow = Interpolation.pow2In.apply(b.fin());
        
        finlope = Interpolation.pow3In.apply(b.fslope())
        
        rotator = 130 * b.fin() * finpow;
        
        for(i = 0; i < 4; i++){
            
            Draw.color(color, color.cpy().mul(1, 0.6, 0.6, 0.4), color, b.fin());
            
        Draw.alpha(Funct.getMax(0.9, (1 - finlope)))
            
            Drawf.tri(b.x, b.y, (size[0] * b.fslope()), (size[1] + size[2] * b.fslope()), rotator - (90 * i));
            
            Draw.color(color);
            
            Drawf.tri(b.x, b.y, ((size[0] * b.fslope())* 0.5), ((size[1] + size[2] * b.fslope())* 0.8), rotator - (90 * i));
            
        };
        
        Fill.circle(b.x, b.y , (3.1 * b.fslope()))
        
    },
    
    update(b){
        
        Units.nearby(b.x - 20, b.y - 20, 40, 40, cons(Unit => {
            
            Unit.damage(this.damage * 0.2)
            if(b.timer.get(3)){
            Effects.effect(Fx.lava, Unit.x, Unit.y);
            };
            
        }));
        
        Funct.tileRadius(b.x, b.y, 20, (tile => {
            
            if(tile.entity != null && tile.getTeam() != b.getTeam() && b.timer.get(3)){
            
            tile.entity.damage(this.damage / 0.4);
            Effects.effect(Fx.lava, tile);
            
            
            }
            
        }))
        
    },
    
});
lightsSilicon.lifetime = 90;
lightsSilicon.speed = 2;
lightsSilicon.damage = 54;
lightsSilicon.pierce = true;
lightsSilicon.collides = false;
lightsSilicon.collidesAir = false;
lightsSilicon.collidesTeam = false;
lightsSilicon.collidesTiles = false;
lightsSilicon.hitEffect = Fx.none;

const lightsSteel = extend(BasicBulletType, {
    
    draw(b){
        
        this.super$draw(b);
        
        finpow = Interpolation.pow2In.apply(b.fin());
        
        finlope = Interpolation.pow3In.apply(b.fslope())
        
        rotator = 130 * b.fin() * finpow;
        
        for(i = 0; i < 4; i++){
            
            Draw.color(color, color.cpy().mul(1, 0.6, 0.6, 0.4), color, b.fin());
            
        Draw.alpha(Funct.getMax(0.9, (1 - finlope)))
            
            Drawf.tri(b.x, b.y, (size[0] * b.fslope()), (size[1] + size[2] * b.fslope()), rotator - (90 * i));
            
            Draw.color(color);
            
            Drawf.tri(b.x, b.y, ((size[0] * b.fslope())* 0.5), ((size[1] + size[2] * b.fslope())* 0.8), rotator - (90 * i));
            
        };
        
        Fill.circle(b.x, b.y , (3.1 * b.fslope()))
        
    },
    
    update(b){
        
        Units.nearby(b.x - 20, b.y - 20, 40, 40, cons(Unit => {
            
            Unit.damage(this.damage * 0.2)
            if(b.timer.get(3)){
            Effects.effect(Fx.lava, Unit.x, Unit.y);
            };
            
        }));
        
        Funct.tileRadius(b.x, b.y, 26, (tile => {
            
            if(tile.entity != null && tile.getTeam() != b.getTeam() && b.timer.get(3)){
            
            tile.entity.damage(this.damage / 0.4);
            Effects.effect(Fx.lava, tile);
            
            
            }
            
        }))
        
    },
    
});
lightsSteel.lifetime = 90;
lightsSteel.speed = 2;
lightsSteel.damage = 75;
lightsSteel.pierce = true;
lightsSteel.collides = false;
lightsSteel.collidesAir = false;
lightsSteel.collidesTeam = false;
lightsSteel.collidesTiles = false;
lightsSteel.hitEffect = Fx.none



const lightsShoot = extendContent(ItemTurret, "lights-shoot", {
});

lightsShoot.ammo(Items.silicon, lightsSilicon, Items.surgealloy, lightsSteel) 