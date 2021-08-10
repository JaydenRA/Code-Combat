// Define your own function, and call it.
// If you see an enemy, attack it.
// Otherwise move to the mark.

function main() {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        hero.attack(enemy);
    }
    else {
        hero.moveXY(30, 26);
    }
}

while(true) {
    main();
}