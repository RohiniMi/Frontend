const obj = {
    name: "Rohini",
    age: 23,
    city: "Meerut"
}

//obj to json
const objToJson = JSON.stringify(obj);
console.log(objToJson);


//json to obj
const jsonString = ['{"name": "Rohini", "age": 22, "city": "Shamli"}'];
const jsonToObj = JSON.parse(jsonString);
console.log(jsonToObj);

//retrieve json data
jsonString.forEach(element => console.log(element));

//adding obj to json
jsonString.push(objToJson);
console.log("retrieval sfter adding");
jsonString.forEach(element => console.log(element));
