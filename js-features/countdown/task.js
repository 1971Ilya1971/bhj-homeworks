let timer = document.getElementById("timer");

function timerMinus() {
    if (timer.textContent <= 0) {
        clearInterval(idInterval);
        alert("Вы победили в конкурсе!");
    } else {
        timer.textContent--;
    }
};

let idInterval = setInterval(timerMinus, 1000);