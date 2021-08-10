// Move to the treasure room and defeat all the ogres.

hero.moveUp(4);
hero.moveRight(4);
hero.moveDown(3);
hero.moveLeft(2);

while(true) {
    var enemy = hero.findNearestEnemy();
    hero.attack(enemy);
    hero.attack(enemy);
}