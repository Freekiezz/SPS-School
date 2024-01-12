// controller.js
function playGame(userChoice) {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[randomIndex];
    var result = determineResult(userChoice, computerChoice);

    // Controller actions
    disableButtons();
    updateResult(result);

    var count = 2;
    var countdown = setInterval(function () {
        updateResult(result + "<br>Volgend spel in " + count + "...");
        count--;
        if (count < 0) {
            clearInterval(countdown);
            updateResult(result);
            enableButtons();
        }
    }, 1000);

    // Update win streak
    if (result === "Jij hebt gewonnen!!!") {
        winningStreak++;
    } else {
        winningStreak = 0;
    }
    updateStreak(winningStreak);
}
