class OldSyntax {
    constructor() {
        this.name = 'Jason';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hello my name is ${this.name}.`
    }
}
const oldSyntax = new OldSyntax()
// console.log(oldSyntax);
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());
// ----------

class NewSyntax {
    name = 'Bourne';
    getGreeting = () => {
        return `Hello my name is ${this.name}.`
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting
console.log(newGetGreeting());
// For more info on Old and New syntax, refer to section 6 video #58.