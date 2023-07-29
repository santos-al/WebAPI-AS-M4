var startButton = document.querySelector(".start-button");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
var timerElement = document.querySelector('.timer-count')
let test = 0

choiceA.addEventListener("click", function () {
    console.log("Answer A");
})

function startTimer() {
    startButton.addEventListener("click", () => {
        var timerCount = 10;
        let timer = setInterval(() => {
            timerCount--;
            timerElement.textContent = timerCount;
            if (timerCount > 0) {
                if (test === 1) {
                    clearInterval(timer);
                    winGame();
                }
            }
            else if (timerCount === 0) {
                clearInterval(timer);
                // loseGame()
                console.log('loser')
            }
        },
        1000);
        console.log("Start");
    })
}

startTimer();