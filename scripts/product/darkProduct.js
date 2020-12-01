const Eff = require("libs/Effects");

const darkcm = extendContent(GenericCrafter, "dark-cristal-manuhat", {
});
darkcm.updateEffect = Eff.plasmaHit(4, Pal.lightFlame, Pal.meltdownHit.cpy().mul(1, 1, 1, 0.5), 30, 15, 8);

const magn = extendContent(GenericCrafter, "magnitivator", {
});
magn.updateEffect = Eff.magnitDischarge(Pal.lancerLaser, Pal.stoneGray, 25, 12, 3, 1);

const omnikraf = extendContent(GenericCrafter, "omnidrive-krafter", {
});
omnikraf.craftEffect = Eff.shockWawe(Pal.stoneGray, Pal.lancerLaser, 16, 45);
//omnikraf.craftEffect = Eff.plasmaHit(4, Pal.lightFlame, Pal.meltdownHit.cpy().mul(1, 1, 1, 0.5), 30, 15, 8);
omnikraf.updateEffect = Fx.nuclearsmoke
