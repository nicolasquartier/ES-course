import actor from './Actor.js';
console.log("test");
let a = actor("Tom", "Hanks", "Forrest Gump", "Captain Miller", "Paul EdgeComb");
console.log(`Actor: ${a.toString()}`);

// let m = new Movie("Forrest Gump", "drama", 135, new Actor("Tom", "Hanks", "Forrest", "Gump"));
// m.addActor(new Actor("Robin", "Wright", "Jenny Curran"));
// console.log(`Movie: ${m}`);
//
// let n = new Movie("Fight Club");
// n.addActor(new Actor("Edward", "Norton", "The Narrator"));
// n.addActor(new Actor("Brad", "Pitt", "Tyle Durden"));
// console.log(`Movie ${n} staring ${n.characters.join(', ')}`);
