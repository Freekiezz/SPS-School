// view.js
function updateStreak(winningStreak) {
    var streak = document.getElementById("streak");
    streak.innerHTML = "Winning Streak: " + winningStreak;
}

function updateResult(result) {
    var footer = document.getElementById("result");
    footer.innerHTML = result;
}

function disableButtons() {
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}

function enableButtons() {
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}
