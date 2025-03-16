function fetchdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // const data = { id: 1, roll: 23, name: "rahul" };
            const data = 0;
            if (data) resolve(data);
            else reject("false");
        }, 3000);
        //reject("Error fetching data");
    });
}
fetchdata()
    .then((data) => {
        console.log("Data received:", data); // Output: { id: 1, name: 'John Doe' }
    })
    .catch((error) => {
        console.error("Error:", error); // Handle any potential errors
    });