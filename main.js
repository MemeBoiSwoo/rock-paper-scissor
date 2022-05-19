const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const streakText = document.querySelector('#streakText');
const bestText = document.querySelector('#bestText');
const resetBtn = document.querySelector('#resetBtn');
const playerChoice = document.querySelector('#playerChoice');
const choiceBtns = document.querySelectorAll(".choiceBtn");
const gameTexts = document.querySelectorAll('.gameText');

let player;
let computer;
let result;
let streak = 0;
let best = 0;
let totalRolls = 0;

resetBtn.addEventListener("click", () => {
    best = 0;
    streak = 0;
    resultText.style.color = null;
    playerText.textContent = "Player: ";
    computerText.textContent = "Computer: ";
    resultText.textContent = "Result: ";
    bestText.textContent = myPrint("Best", best);
    streakText.textContent = myPrint("Streak", streak);
});

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = myPrint("Player", player);
    myPrintImg(player, 0);
    computerText.textContent = myPrint("Computer", computer);
    myPrintImg(computer, 1);
    resultText.textContent = myPrint("Result", checkWinner());
    if (checkWinner() == "You Win!") {
        streak++;
    }
    else {
        streak = 0;
    }
    if (streak > best) {
        best = streak;
    }
    streakText.textContent = myPrint("Streak", streak);
    bestText.textContent = myPrint("Best", best);
}));

function myPrintImg(x, num) {
    //num 0 is player num 1 is computer
    const image = document.createElement('img');
    image.style.width = '100px';
    image.style.height = '100px';
    image.setAttribute('class', 'mx-3');
    if (x == "Rock") {
        image.src = './rock.jpg';
    }
    else if (x == "Paper") {
        image.src = './paper.jpg';
    }
    else if (x == "Scissor") {
        image.src = './scissor.jpg';
    }
    document.getElementsByClassName('gameText')[num].appendChild(image);
}

function myPrint(str, x) {
    return `${str}: ${x}`;
}

function computerTurn() {
    const randNumber = Math.floor(Math.random() * 3) + 1; //Math.floor(Math.random() * (max - min) ) + min;
    switch (randNumber) {
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissor";
            break;
        default:
            computer = "Rock";
    }
}

function checkWinner() {
    if (player == computer) {
        resultText.style.color = 'blue';
        return "Draw!";
    }
    resultText.style.color = 'red';
    switch (computer) {
        case "Rock":
            if (player == "Paper") {
                resultText.style.color = 'green';
                return "You Win!";
            }
            return "You Lose!"
            break;
        case "Paper":
            if (player == "Scissor") {
                resultText.style.color = 'green';
                return "You Win!";
            }
            return "You Lose!"
            break;
        case "Scissor":
            if (player == "Rock") {
                resultText.style.color = 'green';
                return "You Win!";
            }
            return "You Lose!"
            break;
        default:
            resultText.style.color = 'red'; 
            return "You Lose!"

    }
}
