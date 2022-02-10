/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/
/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Eowyn and
    Witch King of Angmar.
*/

let eowynAttack = 50;
let witchKingAttack = 50;

if (eowynAttack > witchKingAttack) {
  console.log("Eowyn is stronger.");
} else if (witchKingAttack > eowynAttack) {
  console.log("Witch King is stronger.");
} else if (eowynAttack === witchKingAttack) {
  console.log("They are the same strength.");
}

let eowynHealth = 110;
let eowynDefense = 0;

if (eowynHealth + eowynDefense <= witchKingAttack) {
  console.log("She dead.");
} else {
  eowynHealth = eowynHealth - witchKingAttack;
  // eowynHealth -= witchKingAttack;
  console.log(`She is down to ${eowynHealth}.`);
  console.log("She is down to " + eowynHealth + ".");
}

let coinLandsHeads = true;

if (coinLandsHeads === true) {
  console.log("Witch King gets to run away.");
} else {
  console.log("Witch King got stabbed in the face.");
}

// Hello world
for (let i = 0; i < 5; i++) {
  if (eowynHealth > 0) {
    eowynHealth = eowynHealth - witchKingAttack;
    console.log(`Eowyn has ${eowynHealth} left.`);
  } else {
    console.log(`Eowyn dead.`);
  }
}

while (eowynHealth > 0) {
  eowynHealth -= witchKingAttack;
  console.log(`Eowyn has ${eowynHealth} left.`);
  if (eowynHealth <= 0) {
    console.log("Eowyn has been slain.");
  }
}
