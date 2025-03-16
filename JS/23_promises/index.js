const fun = (()=>{
    return new Promise((resolve,reject)=>{
        let count = false;
        if(count) resolve("Successfully resolved");
        else reject("There is no count value");
    })
    .then((message)=>{
       console.log(message,"first task performed after successful execution of promise.");  
    })
    .then(()=>{
        console.log("second task performed after successful execution of promise.");    
    })
    .then(()=>{
        console.log("third task performed after successful execution of promise.");
    })
    .catch((error)=>{
        console.log(error,"error");
    })
    // .catch(()=>{
    //     console.log("second catch");
        
    // })
})
fun();