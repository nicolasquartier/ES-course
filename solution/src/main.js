import Movie from './movies.js';
import {demo as example} from './movies.js';
import {Actor} from './movies.js';

let a = new Actor("Tom", "Hanks", "Forrest Gump", "Captain Miller", "Paul Edgecomb");
console.log(`Actor: ${a}`);

let m = new Movie("Forrest Gump", "drama", 135, new Actor("Tom", "Hanks", "Forrest", "Gump"));
m.addActor(new Actor("Robin", "Wright", "Jenny Curran"));
console.log(`Movie: ${m}`);

let n = new Movie("Fight Club");
n.addActor(new Actor("Edward", "Norton", "The Narrator"));
n.addActor(new Actor("Brad", "Pitt", "Tyler Durden"));
console.log(`Movie ${n} staring ${n.characters.join(', ')}`);

console.log(example.toString());

let starWars = new Movie("Star Wars Episode IV: A New Hope", "fantasy", 124);
starWars.addActor(new Actor("Alec", "Guiness", "Obi Wan Kenobi"));
starWars.addActor(new Actor("Mark", "Hamill", "Luke Skywalker"));
starWars.addActor(new Actor("Carrie", "Fisher", "Princes Leia"));
starWars.addActor(new Actor("Anthony", "Daniels", "C3PO"));
starWars.addActor(new Actor("David", "Prowse", "Darth Vader"));
for(let actor of starWars) {
    console.log(`${actor.fullName} as ${actor.characters}`);
}