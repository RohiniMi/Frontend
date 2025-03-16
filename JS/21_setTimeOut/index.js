setTimeout(() => console.log("This message will take 3 seconds to display."), 3000);

//clearing TimeOut
const fun = setTimeout(() => {
    console.log("This message will take 5 seconds to display.");
}, 5000)
// clearTimeout(fun);

//setTimeout with argument

const printFun = (name)=>{
  console.log(`Hi! ${name}`); 
}
const greet = setTimeout(printFun,4000,"Rohini");


// 4. **Recurring Timeout:**
let count = 0;

const intervalId = setInterval(() => {
    console.log("Interval running...");

    count++;
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Interval stopped after 5 executions.");
    }
}, 1000);
