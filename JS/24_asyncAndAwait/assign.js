const fun = async () => {
    return "This is a string returns by async function";
}
console.log(fun()); //automatically return a promise
fun().then(console.log); //return only string

const fetchdata = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        resolve("Successfully Resolved");
    }, 2000)
})

const displayData = async () => {
    const data = await fetchdata;
    console.log(data);
}
displayData();

//displaydata function with handling
const fetchdataErrorHandling = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false;
        success ? resolve("Successfully Resolved") : reject("promuse is rejected");
    }, 2000)
})
const displayDataWithErrorHandling = async () => {
    try {
        const data = await fetchdataErrorHandling;
        console.log(data);

    }
    catch {
        console.log("unable to fetch data");

    }
}
displayDataWithErrorHandling();

//converting this displaydata(async/await) -> .then()/.ctach()

fetchdataErrorHandling
    .then((message) => {
        console.log("Message: ", message);
    })
    .catch((error) => {
        console.log("Error: ", error);

    });