// Define a function that accepts a parameter.
// Defeat munchkins, ignore throwers.
function main(enemy) {
    if(hero.isReady("cleave")) {
        hero.cleave(enemy);
    }
    else {
        hero.attack(enemy);
    }
}

while(true) {
    var target = hero.findNearestEnemy();
    var distance = hero.distanceTo(target);
    if(distance<5) {
        main(target);
    }
    else {
        hero.moveXY(41, 32);
    }
}