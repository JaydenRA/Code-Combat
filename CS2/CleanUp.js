// Move to each red X and check if an enemy is there.
// If an enemy exists, defeat it before moving on.

while(true) {
    hero.moveXY(18, 14);
    var BL = hero.findNearestEnemy();
    if(BL) {
        hero.attack(BL);
        hero.attack(BL);
    }
    
    hero.moveXY(18, 54);
    var TL = hero.findNearestEnemy();
    if(TL) {
        hero.attack(TL);
        hero.attack(TL);
    }    
    
    hero.moveXY(62, 54);
    var TR = hero.findNearestEnemy();
    if(TR) {
        hero.attack(TR);
        hero.attack(TR);
    }    
    
    hero.moveXY(62, 14);
    var BR = hero.findNearestEnemy();
    if(BR) {
        hero.attack(BR);
        hero.attack(BR);
    }    
}