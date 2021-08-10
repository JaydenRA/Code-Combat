// If you see an enemy and it's closer than 15 metres, then attack it.
// Otherwise move to the center point.

while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        var distance = hero.distanceTo(enemy);
        
        if(distance<15) {
            hero.attack(enemy);
        }
        else {
            hero.moveXY(40, 34);
        }
    }
    else {
        hero.moveXY(40, 34);
    }
}