hoisted();
function hoisted(){
    console.log("hello");
    
}
//notHoisted(); //generates error
const notHoisted = ()=>{
    console.log("hello");
    
}
notHoisted(); //works fine