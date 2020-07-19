const Eff = require("Effects")
const range = 50
const heal = 5
const color = [Color.valueOf("00FF6166"), Color.valueOf("4AFF8Faa"), Color.valueOf("6CFF8B"), Color.valueOf("A1FFCF")]
const rad = [5, 4, 3, 2]

const plasmaHeal = extend(BasicBulletType, {
    hitTile(b, tile){
        
        for(x = -range+tile.drawx(); x<range+tile.drawx(); x += 8){
        for(y = -range+tile.drawy(); y<range+tile.drawy(); y += 8){
        
        other = Vars.world.tileWorld(x, y)
        if(other != null){
            if(other.entity != null && other.getTeam() == b.getTeam() && other.entity.healthf() < 1){
                
                other.entity.healBy(heal / 100 * other.entity.maxHealth())
                Effects.effect(Fx.healBlock, Pal.heal, other.drawx(), other.drawy(), other.block().size)
                
            }
        }
        
    }}
    
    Effects.effect(Fx.healWave, b.x, b.y);
    Effects.shake(1, 20, b.x, b.y);
    
    },
    draw(b){
        
        for(s = 0; s < 4; s++){
            Draw.color(color[s]);
            Fill.circle(b.x, b.y, rad[s])
        }
        
    },
    collides(b, tile){
        
        return tile.getTeam() != b.getTeam() || tile.entity.healthf() < 1
        
    }
});
plasmaHeal.damage = 0;
plasmaHeal.speed = 2;
plasmaHeal.lifetime = 120;
plasmaHeal.collidesTeam = true;
plasmaHeal.despawnEffect = Fx.healWave;

const healthTurret = extendContent(ChargeTurret,"healthTurret",{
    findTarget(tile){
        
    entity = tile.ent()
    entity.target = Units.findAllyTile(tile.getTeam(), tile.drawx(), tile.drawy(), this.range, boolf(tile => !tile.isDead() && tile.entity.healthf() < 1 ))
    
    },
    validateTarget(tile){
        
        entity = tile.ent()
        return entity.target
        
    },
    setStats(){
        this.super$setStats();

        this.stats.add(BlockStat.repairTime, (100 / heal * this.reload / 60), StatUnit.seconds);
    }
});
healthTurret.shootType = plasmaHeal
healthTurret.powerUse = 1.5
healthTurret.targetAir = false
healthTurret.targetGround = false
healthTurret.chargeEffect = Eff.chargeHeal(color[0], color[3], 5)
healthTurret.shootEffect = Fx.shootHeal;
healthTurret.smokeEffect = Fx.none;
healthTurret.chargeBeginEffect = Eff.chargeHeal(color[0], color[3], 5)
healthTurret.rotatespeed = 5