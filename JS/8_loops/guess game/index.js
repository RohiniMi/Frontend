const guessButton = document.querySelector(".guess-button");
const userGuessedNumber = document.querySelector(".guessed-number");
const restartButton = document.querySelector(".restart-button");
const span = document.querySelector("#span");
let randomNumber,attempts;
restartButton.addEventListener("click", (e) => {
    e.preventDefault();
    userGuessedNumber.value = "";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
});

guessButton.addEventListener("click", (e) => {
    e.preventDefault();
    const val = userGuessedNumber.value;
    if (!val || val>100) {
        span.innerHTML = "Please enter correct value";
    }
    else if (val < randomNumber) {
        span.innerHTML = "value is too low";
    }
    else if(val>randomNumber){
        span.innerHTML = "value is too high";
    }
    else if(val==randomNumber){
        span.innerHTML = "Hurrah! your guess is correct";
    }
})
