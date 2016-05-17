class Person {
    constructor(firstName = 'John', lastName = 'Doe') {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}

export class Actor extends Person {
    constructor(firstName, lastName, ...characters) {
        super(firstName, lastName);
        this.characters = characters
    }

    toString() {
        return `${this.fullName} as [${this.characters.join(', ')}]`;
    }
}