// Free the wild burl from the ogres!
// If "cleave" is ready, then use it.
// Else if the distance to an enemy less than 5, then attack it.
// Else attack the "Door".
while(true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    
    if (hero.isReady("cleave")) {
        hero.cleave(enemy);
    } 
    
    else if (distance < 5) {
        hero.attack(enemy);
    }    

    else {
        hero.attack("Door");
    }
}
