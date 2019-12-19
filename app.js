const userScore = 0;
const computerScore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

rock_div.addEventListener("click", function(){ console.log("Rock clicked"); });
paper_div.addEventListener("click", function(){ console.log("Paper clicked"); });
scissor_div.addEventListener("click", function(){ console.log("Scissor clicked"); });