// Use your pet to fetch potions for the hero.

// Write your code here.
function goFetch(event,handler) {
    while(true) {
        var item = hero.findNearestItem();
        if (item) {
            pet.fetch(item);
        }
    }
}

pet.on("spawn", goFetch); {
    hero.shield();
}