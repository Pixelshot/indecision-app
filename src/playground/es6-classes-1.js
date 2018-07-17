// Setup constructor to take name and age (default to 0)
// getDescription() - Bruce is 40 year(s) old.

class Person {
    constructor(name = 'Anonymous', age = 0) {
        //name = 'Anonymous' creates a default name and will be shown if there is no 
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi ' + this.name + '!';
        return `Hi I'm ${ this.name }.`; // ES6 template strings.
    }

    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`
    }

    getJob() {
        return `Hello, my name is ${ this.name }`
    }
};

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    
    hasMajor() {
        return !!this.major;
        // flipping this.major twice(with !!) just means we're making turning them into a boolean value.
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor) {
            description += ` Their major is ${ this.major }`
        }
        return description;
    }
}

// Challenge 
// Traveler - Person
// Add support for homeLocation
// Override getGreeting
// If there is a home location: 'Hi I'm Bruce. I'm visiting from Gotham'
// Else stick with original greeting: 'Hi I'm Bruce.'

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${ this.homeLocation }`;
        }

        return greeting;
    }
}

class Profession extends Person {
    constructor(name, age, work) {
        super(name, age)
        this.work = work;
    }

    getProfession() {
        let getJob = super.getJob();
        if(this.work) {
            getJob += ` and I am a(n) ${ this.work }`;
        }
        return getJob;    
    }
}

// This is for Profession
const me = new Profession('Bruce', 42, 'Programmer');
console.log(me.getProfession());

// This is for Person class
// const me = new Person('Bruce', 42);
// console.log(me.getDescription());
// const other = new Person();
// console.log(other.getDescription());

// This is for Student class
// const me = new Student('Bruce', 17, 'Computer Science');
// console.log(me.getDescription());
// const other = new Student();
// console.log(other.getDescription());

// This is for Traveler class
// const me = new Traveler('Bruce', 42, 'Gotham City');
// console.log(me.getGreeting());
// const other = new Traveler();
// console.log(other.getGreeting());