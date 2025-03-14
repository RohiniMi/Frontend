// 1. **`let` and `const`:**
//     - Write examples to show the difference between `var`, `let`, and `const`.
//     - Highlight the benefits of block scope variables over function scope.

{
    let x = 90;
    console.log(x);

}
//const x ; //generates error
// x = 90;

const y = 90;
console.log(y);

// . **Arrow Functions:**
//     - Convert a traditional function to an arrow function and explain the differences in syntax and behavior.
const sum = (a, b) => {
    return a + b;
}
let ans = sum(8, 90);
console.log(ans);

// 3. **Default Parameters:**
//     - Write a function that uses default parameters and explain how they save from undefined errors.

const mul = (a, b = 1) => {
    return a * b;
}
console.log(mul(8));


// 4. **Classes:**
//     - Define a class using the new class syntax and create an instance of it.
//     - Discuss how classes in ES6 are just syntactic sugar over JavaScript's prototype-based inheritance.

class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    message = () => {
        return `Hi ${this.name}`;
    }
}
let instance = new Employee("Rohini", 23);
console.log(instance.name);
console.log(instance.age);
console.log(instance.message());



