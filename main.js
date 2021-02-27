// Rock, Paper, Scissors Game //
// rockpapergame.js          //


var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
console.log(computerChoice)
if(computerChoice < 0.34) {
    computerChoice = "rock";
}else if (computerChoice <= 0.67) {
    computerChoice = "paper";
}else{
    computerChoice = "scissors";
}
console.log(computerChoice)
document.getElementById('result').innerHTML = `Computer: ${computerChoice}\n User: ${userChoice}\n`;
console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2)
{
    return "Whoever wins, it's a fun game!";
};

document.getElementById('compare').innerHTML = `${compare(userChoice, computerChoice)}`;
// end of rockpapergame.js//