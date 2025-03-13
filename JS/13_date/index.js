const getCurrentDate = () => {
    const date = new Date();
    return date.getDate();
}
console.log(getCurrentDate());

const date = new Date();
const formatDate = (date) => {
    let formatedDateString = "";
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    formatedDateString = currentYear.toString() + "-" + currentMonth.toString() + "-" + currentDate.toString();
    return formatedDateString;

}
console.log(formatDate(date));


// 3. **Calculate Age:**
//     - Make a function `calculateAge` that calculates the age from a birthdate passed to it.
const calculateAge = (birthdate) => {
    const birthYear = (new Date(birthdate)).getFullYear();
    const currentYear = date.getFullYear();
    let age = currentYear - birthYear;

    const birthMonth = (new Date(birthdate)).getMonth();
    const currentMonth = date.getMonth();


    const birthDate = (new Date(birthdate)).getDate();
    const currentDate = date.getDate();

    if (birthMonth > currentMonth || birthDate > currentDate) age = age - 1;
    console.log(age);

}
calculateAge("2001-06-13");

// const addDays = (date, num) => {
//     const date = new Date(date);
//     return 

// }