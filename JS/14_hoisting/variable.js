// 2. **Variable Hoisting:**
//     - Create an example that shows the hoisting of a `var` declared variable.
//     - Explain why `let` and `const` declarations are not hoisted in the same way.

console.log(num);
num = 10;
var num;

// console.log(notHoisted);//generate error
let notHoistedVar;
notHoistedVar = 10;
console.log(notHoistedVar);

// **Temporal Dead Zone:**
//     - Provide an example that shows the temporal dead zone for `let` and `const` variables.
//     - Explain the error thrown if a variable is used before declaration.
greet(); // Output: Hello, World!

function greet() {
    console.log("Hello, World!");
}
