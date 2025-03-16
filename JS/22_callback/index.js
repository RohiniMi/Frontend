// **Simple Callback:**
//     - Create a function that takes another function as an argument and calls it after a certain action is completed. Use this to print a message to the console.

const fun = (name, callBackFun) => {
    console.log("function start executing.");
    console.log("Before calling the callBackFun");
    callBackFun(name);
    console.log("After calling the callBack function");
}

const greet = (name) => {
    console.log(`Hi! ${name}`);
}
// setTimeout(greet, 6000, "Rohini");
// setTimeout(fun, 3000, "Rohini", greet);

const fruits = ["apple", "mango", "orange", "kiwi", "date", "apricot", "litchi"];
fruits.forEach((ele) => {
    console.log(ele);
});

const lengthOfFruits = fruits.map((ele) => ele.length);
console.log(lengthOfFruits);


const fruitsWithFourLength = fruits.filter((ele) => ele.length == 4);
console.log(fruitsWithFourLength);


//callback hell
setTimeout(() => {
    console.log("First Execution");
    setTimeout(() => {
        console.log("Second Execution");
        setTimeout(() => {
            console.log("Third Execution");
        }, 3000)
    }, 2000)

}, 1000)