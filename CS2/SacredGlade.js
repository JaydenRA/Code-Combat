// Don't let an ogre come close to the center.
// If you see an ogre, then attack it.
// Otherwise move to the red X mark.
while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        hero.attack(enemy);
        hero.attack(enemy);
    } 
    else {
        hero.moveXY(30, 24);
    }
}