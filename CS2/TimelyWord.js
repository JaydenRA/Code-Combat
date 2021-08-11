//The pet should speak only when it hears a question.

function insultGuard() {
    pet.say("Yes I can talk, now LET ME IN!");   
}

pet.on("hear", insultGuard);

//Easiest task so far :(