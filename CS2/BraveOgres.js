// If an ogre is closer than 5 meters, then attack it.
// Otherwise attack the "Door".
while(true) {
    
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    
    if (distance<5) {
        hero.attack(enemy);
    }
    else {
        hero.attack("Door");
    }
}
