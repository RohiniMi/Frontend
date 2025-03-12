// 1. **Create and Access**:
//     - Create an array called `fruits` with the elements "apple", "banana", "cherry", and "date".
//     - Log the first and last elements of the array to the console.

const fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[0]); //first element
console.log(fruits[fruits.length - 1]); //last element

// ### Part 2: Modifying Arrays

// 1. **Adding Elements**:
//     - Add "elderberry" to the end of the `fruits` array and "apricot" to the beginning of the array.
//     - Log the modified array to the console.
// 2. **Removing Elements**:
//     - Remove the last element of the `fruits` array and the first element of the array.
//     - Log the modified array and the removed elements to the console.

fruits.push("elderberry") //adding at last
fruits.unshift("apricot") //add element at the begining of the array
console.log(fruits);

// ### Part 3: Array Methods
// 1. **Looping Through an Array**:
//     - Use the `forEach()` method to log each fruit in the `fruits` array with its index.
// 2. **Searching for an Element**:
//     - Use the `indexOf()` method to find the index of "cherry" in the `fruits` array. If it exists, log its index; otherwise, log a message saying it does not exist.
// 3. **Creating a String from an Array**:
//     - Use the `join()` method to create a string from the `fruits` array, with elements separated by a comma and a space. Log the resulting string.

fruits.forEach((element, index) => {
    console.log(`${index}: ${element}`);
})

const cherryIndex = fruits.indexOf("cherry");
if (cherryIndex != -1) {
    console.log(cherryIndex);
}
else{
    console.log("Element does not found."); 
}

let str = "";
fruits.forEach((ele)=>{
    str += ele + ", ";
})
console.log(str);

const sortedArray = fruits.sort();
console.log(sortedArray);

const reversedArray = fruits.reverse();
console.log(reversedArray);

const vegetables = ['carrots', "peas", "potatos", "tomatos", "spinach"];
const ans = vegetables.find((ele) => {
    return ele === "spinach";


});
console.log(ans);
