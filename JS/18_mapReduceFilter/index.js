// map(multiply by 5)
const arr1 = [2, 4, 6, 8, 10];
const ans = arr1.map((ele) => ele * 5);
console.log(ans);

//reduce is used to give single value

const sumOfArray = arr1.reduce((acc, sum) => {
    return acc + sum;
}, 0);
console.log(sumOfArray);

//filter (elements are divided by four or not)

const ansArray = arr1.filter((ele) => ele % 4 == 0);
console.log(ansArray);


// Problem: Given an array of student objects, find the total score of students
// who scored more than 60, after multiplying their score by 2.
// Javascript code
const students = [
    { name: 'Alice', score: 50 },
    { name: 'Bob', score: 65 },
    { name: 'Charlie', score: 80 },
    { name: 'David', score: 45 },
];

const totalScore = students.filter((ele) => ele.score > 60)
    .map((ele) => ele.score * 2)
    .reduce((acc, curr) => {
        return acc + curr;
    }, 0)
console.log(totalScore);
