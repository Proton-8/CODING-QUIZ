const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('questionText')
const answerButtonsElement = document.getElementById ('answer-buttons')
const timerElement = document.querySelector(".timer-count");
let shuffledQuestions 
let currentQuestionIndex
let score = 0;
let winCounter = 0;
let loseCounter = 0;
let isWin = false;
let timer;
let timerCount = 30;





startButton.addEventListener('click', startGame)


function startGame(){
    startTimer();
    //console.log('good to go');
startButton.classList.add('hide');
shuffledQuestions = questionArray.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
setNextQuestion();
}
function setNextQuestion() {
   //resetState();   
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}
function showQuestion(questionText){
    questionElement.innerText = questionArray.questionText
   // let myAnswers = questionArray[0].answers
   
   console.log (myAnswers)
    questionArray.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    })
}

/*
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild (answerButtonElement.firstChild)

    }
}*/

function selectAnswer(e) {
console.log(e.target)
const selectedButton = e.target;
const correct = selectedButton.dataset.correct;
setStatusClass (document.body, correct);
// make into an array
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
})
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')}
        else{
            element.classList.add('wrong')}
        }
    
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questionArray = [
    {
    questionText: ' What is 1 + 3 =  ??',
    answers: [
        {text: '4', correct: true },
        {text: '5', correct: false},
        {text: '88', correct: false},
        {text: '808', correct: false}
            ]

    },
    {
        questionText: ' What is 5 + 3 =  ??',
        answers: [
            {text: '8', correct: true },
            {text: '10', correct: false},
            {text: '22', correct: false}
          
        ]
    },
    {

        questionText: ' Which one of these is a JavaScript package manager?',
        answers: [
            {text:"Node.js", correct: false},
            {text:"TypeScript", correct: false},
            {text:"npm", correct: true }

                 ]
          
    }
]


// Calls init() so that it fires when page opened
// init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);



// The setTimer function starts and stops the timer and triggers winGame() and loseGame()

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
console.log(timerCount);

//.............................................


var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Action to be performed on click store in named function
function showResponse(event) {
  // Prevent default action
  event.preventDefault();
  console.log(event);
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
}
  
// Add listener to submit element
submitEl.addEventListener("click", showResponse);

//.............................................












/*


for (var i=0; i < question.length; i++){
    let response = window.prompt(question[i].prompt);
    if(response == question[i].correct){
        score++;
        alert (" You are CORRECT !! ");
    } else {
        alert (" Sorry, Wrong Answer :-( ");
    }
    }
    alert ("you got " + score + " of" + question.length)
*/