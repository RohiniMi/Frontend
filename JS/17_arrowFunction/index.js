//simple arrow function with argument
const greet = ()=>console.log("Hello");
greet();

//with one argument
const greetWithName = (name)=>console.log(`Hello! ${name}`);
greetWithName("Rohini");

//with two arguments
const greetingWithFullName = (firstName,lastName)=>console.log(`Hello! ${firstName} ${lastName}`);
greetingWithFullName("Rohini","Mittal");

// with default parameters
const greetingWithDefaultParameters = (firstName,lastName="")=>console.log(`Hello! ${firstName} ${lastName}`);
greetingWithDefaultParameters("Rohini");
greetingWithDefaultParameters("Rohini","Mittal");

//arrow function with rest parameters
const sum = (...args)=>{
    let s = 0;
    args.forEach((e)=>{
        s += e;
    });
    return s;
}
let ans = sum(1,2,3,4,5,6,7,8,9,10);
console.log(ans);
