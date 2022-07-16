/*
Exercise 1:
    Define a filter function on the String object. The function accepts an array of strings that
    specifies a list of banned words. The function returns the string after removing all the
    banned words.
    Example:
    console.log("This house is not nice!".filter('not'));
    Output: "This house is nice!"
*/
String.prototype.filter = function( arg ) {
    return this.replace(arg,"").replace("  "," ");
};
console.log("This house is not nice!".filter('not'));


/*
Exercise 2:
    Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
    that works by repeatedly stepping through the list to be sorted,
    Example:[6,4,0, 3,-2,1].bubbleSort();
    Output : [-2, 0, 1, 3, 4, 6]
*/
Array.prototype.bubbleSort = function() {
    var swap = function (arr, index1, index2) {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    };
    

    let stop;

    for (let i = 0; i < this.length; i++){
        for (let j = 0, stop = this.length-i; j < stop; j++){
            if (this[j] > this[j+1]){
                swap(this, j, j+1);
            }
        }
    }
    return this;
}
const arr = [6, 4, 0, 3, -2, 1];
console.log(arr.bubbleSort());


/*
Exercise 3:
3a. Create an object called Teacher derived from a Person function constructor, and
implement a method called teach that receives a string called subject, and prints out:
[teacher's name] is now teaching [subject]. The ‘teach’ method should be on the Teacher
prototype. Create two Teacher objects and call their teach method. The Person constructor
should set name and age fields, but not subject since that only applies to Teachers. You
should have a Teacher constructor that sets the subject field. The Person prototype should
have a method, favoriteHobby, that prints ‘My name is [name] and my hobby is
[somePerson.hobby]’. The Person prototype should have a property ‘species’ and the value
for all Persons should be ‘homo sapien’.
3b. Implement the same object relations using Object.create. When using Object.create
you can use a regular function instead of a function constructor in order to set the values of
object properties on object instances. Or, you could set them directly on the object
instances.
*/

/* 3a */
{
    class Person{
        hobby;
        name;
        age;
        constructor(name, age){
            this.name = name;
        }

        setHobby = hobby => {
            this.hobby = hobby;
        }

        favoriteHobby = () => {
            console.log("My name is " + this.name + " and my hobby is " + this.hobby);
        }
    }
    class Teacher extends Person {
        constructor(name, age, subject){
            super(name, age);
            this.subject = subject;
        }

        teach = () => {
            console.log(this.name + " is now teaching " + this.subject);
        }
    }

    const aPerson = new Person("Vinh Phuc Hua", 41);
    aPerson.setHobby("Programming");
    aPerson.favoriteHobby(); 

    const teacher1 = new Teacher("Teacher A", 27, "Data Science");
    teacher1.teach();

    const teacher2 = new Teacher("Teacher B", 48, "Computer Science");
    teacher2.teach();
};

/* 3b */
(function (){ 
    const Person = function(name, age)
    {
        this.name = name;
        this.age = age;
    }
    Person.prototype.setHobby = function(hobby) {
        this.hobby = hobby;
    }

    Person.prototype.favoriteHobby = function() {
        console.log("My name is " + this.name + " and my hobby is " + this.hobby);
    }

    

    const Teacher = function(name, age, subject) {
        Person.call(this, name, age);
        this.subject = subject;
    }

    Teacher.prototype = Object.create(Person.prototype);

    Teacher.prototype.teach = function() {
        console.log(this.name + " is teaching " + this.subject);
    }

    const aPerson = new Person("Vinh Phuc Hua", 41);
    aPerson.setHobby("Programming");
    aPerson.favoriteHobby(); 

    const teacher1 = new Teacher("Teacher A", 27, "Data Science");
    teacher1.teach();

    const teacher2 = new Teacher("Teacher B", 48, "Computer Science");
    teacher2.teach();

})();


/*
Exercise 4:
Write code that will create person, student, and professor objects.
    • Person objects have
        o name and age fields
        o a greeting method that prints out: “Greetings, my name is [name] and I am [age] years old.”
        o a salute method that prints out: “Good morning!, and in case I dont see you, good afternoon, good evening and good night!”
    • Student objects inherit name, age, and salute from person. They also have a field ‘major’ and have their own greeting method. 
        Their greeting is “Hey, my name is [name] and I am studying [major]. The greeting should be output to the console.
    • Professor objects inherit name, age, and salute from person. They also have a field ‘department’ and have their own greeting method. 
        Their salutation is “Good day, my name is [name] and I am in the [department] department.” Output it to the console.
    • Create a professor object and a student object. Call both the greeting and salutation methods on each.
    • Do this exercise once using the object prototype approach for inheritance and then using the function constructor approach.
*/

(function(){
    class Person {
        name;
        age;

        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        greeting() {
            console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old");
        }

        salute() {
            console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
        }
    }

    class Student extends Person {
        field;
        constructor(name, age, field){
            super(name, age);
            this.field = field;
        }
        greeting() {
            console.log("Their greeting is “Hey, my name is " + this.name + " and I am studying " + this.field  + ".");
        }
    }

    class Professor extends Person {
        department;

        constructor(name, age, department){
            super(name, age);
            this.department = department;
        }
        greeting() {
            console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
        }
    }

    const aPerson = new Person("Person A", 20);
    aPerson.greeting();
    aPerson.salute();
    
    const aStudent = new Student("Student B", 22, "Web Application Programming");
    aStudent.greeting();
    aStudent.salute();

    const aProfessor = new Professor("Professor C", 55, "Computer Science");
    aProfessor.greeting();
    aProfessor.salute();
})();

{ 
    //Person object
    const Person = function(name, age)
    {
        this.name = name;
        this.age = age;
    }

    Person.prototype.greeting = () => {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old");
    }

    Person.prototype.salute = () => {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }

    //Student object
    const Student = function(name, age, field) {
        Person.call(this, name, age);
        this.field = field;
    }
    
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.greeting = () => {
        console.log("Their greeting is “Hey, my name is " + this.name + " and I am studying " + this.field  + ".");
    }

    //Professor object
    var Professor = function(name, age, department) {
        this.department = department;
        return Person.call(this, name, age);
    }
    
    Professor.prototype = Object.create(Person.prototype);
    Professor.prototype.greeting = () => {
        console.log(self);
        console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
    }
    
    const aPerson = new Person("Person A", 20);
    aPerson.greeting();
    aPerson.salute();
    
    const aStudent = new Student("Student B", 22, "Web Application Programming");
    aStudent.greeting();
    aStudent.salute();

    const aProfessor = new Professor("Professor C", 55, "Computer Science");
    console.log(aProfessor);
    aProfessor.greeting();
    aProfessor.salute();
};
