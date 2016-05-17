import {Actor} from './actors.js';

export {Actor} from './actors.js';

export default class Movie {
    constructor(title, genre = 'drama', runtime = 120, ...actors) {
        this.title = title;
        this.genre = genre;
        this.runtime = runtime;
        this.actors = actors;
    }

    get characters() {
        let characters = [];
        this.actors.forEach(actor => {
            characters.push(actor.characters);
        });
        return characters;
    }

    addActor(actor) {
        this.actors.push(actor);
    }

    toString() {
        return `${this.title} (${this.genre}) [${this.runtime}min]`;
    }

    *[Symbol.iterator]() {
        for(let a of this.actors) {
            yield a;
        }
    }
}

export let demo = new Movie("The Good, the Bad and the Ugly", "");
demo.addActor(new Actor("Eli", "Wallach", "Tuco"));
demo.addActor(new Actor("Clint", "Eastwood", "Blondie"));
demo.addActor(new Actor("Lee", "Van Cleef", "Sentenza"));
