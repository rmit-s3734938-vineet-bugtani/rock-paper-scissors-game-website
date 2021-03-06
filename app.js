var userScore = 0;
var computerScore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const choices = ["r", "p", "s"];
const resetButton = document.getElementById("reset");

var userChoice;
var computerChoice;
const userSubscript = "user".sub().fontsize(3);
const computerSubscript = "comp".sub().fontsize(3);

rock_div.addEventListener("click", function() {
    game("r")
});
paper_div.addEventListener("click", function() {
    game("p")
});
scissor_div.addEventListener("click", function() {
    game("s")
});
resetButton.addEventListener("click", function() {
    reset()
});

function getComputerChoices() {
    const numericalChoice = Math.floor((Math.random() * 3));
    return choices[numericalChoice];
}

function win() {
    userScore++;
    userscore_span.innerHTML = userScore;
    result_div.innerHTML = symbolConverter(this.userChoice) + userSubscript + " beats " + symbolConverter(this.computerChoice) + computerSubscript + ".You win!!"
}

function symbolConverter(symbol) {
    if (symbol === "p") return "Paper"
    else if (symbol === "r") return "Rock"
    else return "Scissors"
}

function draw() {
    result_div.innerHTML = "Both chose " + symbolConverter(this.computerChoice) + ".Its a draw!!"
}

function lose() {
    computerScore++;
    computerscore_span.innerHTML = computerScore;
    result_div.innerHTML = symbolConverter(this.computerChoice) + computerSubscript + " beats " + symbolConverter(this.userChoice) + userSubscript + ".You lose!!"
}

function reset() {
    userScore = 0;
    computerScore = 0;
    userscore_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
    result_div.innerHTML = "Begin"
}

function game(userChoice) {
    this.userChoice = userChoice;
    this.computerChoice = getComputerChoices();
    var n = computerChoice.localeCompare(this.userChoice);
    if (n == 0) {
        draw();
    } else {
        switch (this.userChoice + computerChoice) {
            case "rs":
            case "sp":
            case "pr":
                win();
                break;
            default:
                lose();
        }
    }

}