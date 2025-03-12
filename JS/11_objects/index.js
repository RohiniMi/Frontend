const person = {
    username: "Rohini",
    email: "rohinimittal246@gmail.com",
    password: "abc@1234",
    age: 23,
    isLoggedIn: true
}
console.log(person);
const updateMail = (person,email)=>{
    person.email = email;
}
updateMail(person,"rohini.mittal@abes.ac.in");//updating the email
console.log(person);

//accessing protery
console.log(person.age);
console.log(person["age"]);
let x = "age";
console.log(person[x]);

//nested object
const address = {
    street : "Brahampuri",
    city: "Meerut",
    zipcode : "250002",
    country : "India"
}

person.address = address;
console.log(person);

//iterate over object

console.log(Object.values(person));
console.log(Object.keys(person));
console.log(Object.values(person.address)); //fetching the nested values


