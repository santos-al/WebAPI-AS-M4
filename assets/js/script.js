var startButton = document.querySelector(".start-button");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
var timerElement = document.querySelector('.timer-count')

var timerCount = 90;

choiceA.addEventListener("click", function () {
    console.log("Answer A");
})

function startTimer() {
    startButton.addEventListener("click", () => {
        let timer = setInterval(() => {
            timerCount--;
            timerElement.textContent = timerCount;
        },
        1000);
        console.log("Start");
    })
}

startTimer();