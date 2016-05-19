export default class Movie {
    constructor(title, genre = "drama", runtime = 120, ...actors) {
        this.title = title;
        this.genre = genre;
        this.runtime = runtime;
        this.actors = actors;
    }

    toString() {
        var output = this.title + " (" + this.genre + ") [" + this.runtime + "min] " + " staring " + this.actors;
        return output
    }

    addActor(actor) {
        this.actors.push(actor);
    }

    get characters() {
        return this.actors;
    }
};