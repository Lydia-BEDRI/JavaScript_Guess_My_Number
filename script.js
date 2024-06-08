'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 2;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;

};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //there is no input
    if (!guess) {
        displayMessage("⛔ No Number!");
    }

    // winning
    else if (secretNumber === guess) {
        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {

            displayMessage(guess > secretNumber ? "⚠️ Too High!" : "⚠️ Too Low!");
            // document.querySelector('.message').textContent = guess > secretNumber ? "⚠️ Too High!" : "⚠️ Too Low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage(" 😓 You lost the game !");
            document.querySelector('.score').textContent = 0;
        }
    }

});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage("Start guessing ...");
    document.querySelector('.guess').value = "";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});