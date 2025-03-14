// map(multiply by 5)
const arr1 = [2,4,6,8,10];
const ans = arr1.map((ele)=>ele*5);
console.log(ans);

//reduce is used to give single value

const sumOfArray = arr1.reduce((acc,sum)=>{
    return acc+sum;
},0);
console.log(sumOfArray);

//filter (elements are divided by four or not)

const ansArray = arr1.filter((ele)=>ele%4==0);
console.log(ansArray);


