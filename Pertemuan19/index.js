console.log("JavaScript Class & OOP")

//Class & Constructur
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// const person1 = new Person ("Glain", "Damping");
// person1.displayFullName();
// const person2 = new Person ("John","Doe");
// person2.displayFullName();

//Inheritance
class Student extends Person{
    constructor (firstName, lastName, NIM, age){
        super(firstName, lastName);
        this.NIM = NIM;

    }

    //Static member
    static sayHello(){
        console.log(`Hello World`)
    }

    display(){
        console.log(`Your NIM is ${this.NIM}`)
    }
   
//Setter and Getter
    set studentScore(score){
        this.score = score;
    }

    get studentScore(){
        return this.score;
    }
}

const john = new Student("Glain", "Damping","105011810021");
john.displayNIM();
john.displayFullName();
Student.sayHello();

john.studentScore = 90;
console.log(john.studentScore);