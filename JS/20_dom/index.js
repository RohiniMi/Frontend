const heading = document.getElementById("heading");
const div = document.querySelector(".div-content");
const para = document.getElementById("para-container");

const newDiv = document.createElement("div");
newDiv.id = "div-container";
newDiv.textContent = "This is the appended div";
document.body.appendChild(newDiv);

para.innerText = "Hello, World!";
para.style.color = "white";
para.style.backgroundColor = "blue";