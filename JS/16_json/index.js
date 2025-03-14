const obj = {
    name : "Rohini",
    age: 23
}

//obj to json
const objToJson = JSON.stringify(obj);
console.log(objToJson);


//json to obj
const jsonString = '{"name": "Rohini", "age": 22, "city": "Shamli"}';
const jsonToObj = JSON.parse(jsonString);
console.log(jsonToObj);
