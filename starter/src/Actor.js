import p from './Person.js';

export default class Actor extends p{
    constructor(firstName, lastName, ...characters) {
        super(firstName, lastName);
        this.characters = characters;
    }

    get charactersArray() {
        return this.characters;
    }

    toString() {
        return this.firstName + " " + this.lastName + " as ["+ this.characters + "]";
    }
}