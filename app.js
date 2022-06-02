let body = $("body");
let btns = $(".btn");
let title = $(".title");
let colors = ['red', 'green', 'blue', 'yellow'];

let answers = [];
let userGuesses = [];
let gameStarted = false;
let level = 0;
let gameOver = new Audio('sounds/gameover.mp3');

document.addEventListener('keydown', () => {
    if (!gameStarted) {
        answers = [];
        userGuesses = [];
        level = 0;
        addAnswer();
        gameStarted = true;
    }
});

$(".btn").click(function () {
    let guess = $(this).attr("id");
    userGuesses.push(guess);
    let btnSound = new Audio(`sounds/${guess}.mp3`);
    btnSound.play();
    checkGuess();
    $(this).addClass("click");
    setTimeout(function () {
        $(`#${guess}`).removeClass("click");
    }, 131.25);
});

function addAnswer() {
    userGuesses = [];
    let rndBtnIdx = Math.floor(Math.random() * 4);
    let newBtn = btns[rndBtnIdx];
    answers.push(colors[rndBtnIdx]);
    let transitionSound = new Audio(`sounds/${colors[rndBtnIdx]}.mp3`);
    transitionSound.play();
    newBtn.classList.add("transition");
    setTimeout(function () {
        newBtn.classList.remove("transition");
    }, 162.5);
}

function checkGuess() {
    if (userGuesses[userGuesses.length - 1] !== answers[userGuesses.length - 1]) {
        title.text(`Game Over: Press Any Key`);
        gameOver.play();
        gameStarted = false;
        body.addClass("wrong");
        setTimeout(function () {
            body.removeClass("wrong")
        }, 131.25);
    } else {
        if (userGuesses.length >= answers.length) {
            level++;
            title.text(`Level: ${level}`);
            setTimeout(addAnswer, 650);
        }
    }
}