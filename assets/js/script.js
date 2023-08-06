var startButton = document.querySelector(".start-button");
var choiceA = document.querySelector("#choiceA");
var choiceB = document.querySelector("#choiceB");
var choiceC = document.querySelector("#choiceC");
var choiceD = document.querySelector("#choiceD");
var timerElement = document.querySelector('.timer-count');
var choiceBox = document.querySelector('.choice');
var questionBox = document.querySelector('.question');
let test = 0
let questionNumber = 0;

let questions_list = [
    {
        question : 'Inside which HTML element do you Javascript?',
        options: ['A = <javascript>', 'B = <js>', 'C = <script>', 'D = <ecma>'],
        answer: '<script>'
    },
    {
        question : 'Which of the following is the correct way of adding a comment in Javascript?',
        options: ['A = <!--Comment-->', 'B = #Comment', "C = 'Comment'", 'D = //Comment'],
        answer: '//Comment'
    },
    {
        question : 'Which of the following is NOT an assignment operator in Javascript?',
        options: ['A = "="', 'B = "+="', 'C = "&&"', 'D = "-="'],
        answer: '&&'
    },
    {
        question : 'Which of the following is the correct way to write a "for" loop in Javascript?',
        options: ['A = for (i to 10)', 'B = for (i = 0; i < 10; i++)', 'C = for (i = 10; i--)', 'D = for (i = 7: i <= 30: i--)'],
        answer: 'for (i = 0; i < 10; i++)'
    },
    {
        question : 'How many times will this Javascript "for" loop excecute? "for (i = 1; i < 11; i++)"',
        options: ['A = 0', 'B = 9', 'C = 10', 'D = 11'],
        answer: '10'
    }
]


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

// print question and choices on screen
questionBox.textContent = currentQuestion;
choiceBox.textContent = currentChoices;

function getQuestion() {
    let currentQuestion = questions_list[questionNumber].question;
    let currentChoices = questions_list[questionNumber].options;

    console.log(currentQuestion);
    console.log(currentChoices);

    // print question and choices on screen
    questionBox.textContent = currentQuestion;
    choiceBox.textContent = currentChoices;
  }

  function questionClick(event) {
    var buttonEl = event.target;
  
    // if the clicked element is not a choice button, do nothing.
    if (!buttonEl.matches('.choice')) {
      return;
    }
  
    // check if user guessed wrong
    if (buttonEl.value !== questions[questionNumber].answer) {
      // penalize time
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
  
      // display new time on page
      timerEl.textContent = time;
  
      // play "wrong" sound effect
      sfxWrong.play();
  
      feedbackEl.textContent = 'Wrong!';
    } else {
      // play "right" sound effect
      sfxRight.play();
  
      feedbackEl.textContent = 'Correct!';
    }
  
    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute('class', 'feedback');
    setTimeout(function () {
      feedbackEl.setAttribute('class', 'feedback hide');
    }, 1000);
  
    // move to next question
    currentQuestionIndex++;
  
    // check if we've run out of questions
    if (time <= 0 || currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }
  