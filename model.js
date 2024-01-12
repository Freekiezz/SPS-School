// model.js
var winningStreak = 0;

function determineResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Het is gelijk spel!!!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Jij hebt gewonnen!!!";
    } else {
        return "Jij hebt verloren!";
    }
}
