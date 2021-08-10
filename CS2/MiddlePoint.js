// Patrol up and down, stopping at each X mark, in a loop.
// Build "fire-trap"s to stop the ogres from invading.
// It's best if you only build when you see an ogre.

while(true) {
    hero.moveXY(32, 16);
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        hero.buildXY("fire-trap", 32, 16);   
    }    
    
    hero.moveXY(32, 34);
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        hero.buildXY("fire-trap", 32, 34);   
    }   
    
    hero.moveXY(32, 52);
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        hero.buildXY("fire-trap", 32, 52);   
    }   
}

// Run a couple times for it to work