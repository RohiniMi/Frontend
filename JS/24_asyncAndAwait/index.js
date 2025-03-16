// async function automatically returns the promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { id: 1, roll: 23, name: "rahul" };
        if (data) resolve({"data":data,"message":"Promise is resolved"});
        else reject({"data":"null","message":"Promise is rejected"});
    }, 3000)


})
const asyncFun = async () => {
    const data = await promise;
    console.log(`data from promise is ${data.data.id} and message is ${data.message}`);
    // return Promise.resolve(0); // change value
}
// asyncFun()
//     .then((data) => {
//         console.log("Data: ", data.data);
//     })
//     .catch((error) => {
//         console.log("Error: ", error);
//     })

asyncFun();