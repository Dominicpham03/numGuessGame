'use strict';
let secrectNumber = Math.trunc(Math.random() * 20) + 1;

//document.querySelector('.number').textContent = secrectNumber;
let score = 20;

let highscore = 0;





document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    } else if (guess === secrectNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secrectNumber;
    } else if (guess > secrectNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lose';
            document.querySelector('body').style.backgroundColor = 'red';
            score--;
            document.querySelector('.score').textContent = score

        }
    } else if (guess < secrectNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.message').textContent = 'You lose';
            score--;
            document.querySelector('.score').textContent = score

        }
    }

});

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '? ';
    document.querySelector('.message').textContent = 'Start guessing...';
    score = 20;
    document.querySelector('.score').textContent = score;
    secrectNumber = Math.trunc(Math.random() * 20) + 1;



});
