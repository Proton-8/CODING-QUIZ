const startButton = document.getElementById('start-btn')
const startButton2 = document.getElementById('start-btn2')
const nextButton = document.getElementById('next-btn')
const finalScore = 0
const mainEl = document.getElementById('main');
const finalName = document.getElementById('name')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerElement = document.querySelector(".timer-count");
const timePenalty = 5;

let scores =  JSON.parse(localStorage.getItem("scores")) || [];
let shuffledQuestions 
let currentQuestionIndex
let score = 0;
let winCounter = 0;
let loseCounter = 0;
let isWin = false;
let timer;
let timerCount = 30;



startButton.addEventListener('click', startGame)
//listen for Next Button to be 'clicked' and move onto next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    rightAnswers = 0;
    startTimer();
    resetGame();
    console.log('good to go');
startButton.classList.add('hide');
//startButton2.classList.add('hide');
shuffledQuestions = questionArray.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
setNextQuestion();
}


function setNextQuestion() {
    resetState();   
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}
function showQuestion(question){
    questionElement.innerText = question.question
   // let myAnswers = questionArray[0].answers
   
  // console.log (myAnswers)
  
  
  question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            winCounter++
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    })
}


function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)

    }
}

function selectAnswer(e) {
console.log(e.target)
const selectedButton = e.target;
const correct = selectedButton.dataset.correct;
setStatusClass (document.body, correct);
//convert into an array from our answer button children
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
    rightAnswers++;
    //console.log(rightAnswers);
   // alert (" You are CORRECT !! ");
})
// check to see if there are any more questions
if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide')
} 
else {
    questionContainerElement.classList.add('hide')
    clearInterval(timer);
    finalName.classList.remove('hide')

    //console.log (winCounter);
    
}

}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')}
        else{
            element.classList.add('wrong')}
            //timerCount = timerCount - timePenalty
        }
    
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questionArray = [
    {
    question: ' Inside which HTML element do we put the JavaScript ?',
    answers: [
        
        {text: '<js>', correct: false},
        {text: '<scripting>', correct: false },
        {text: '<script>', correct: true},
        {text:  '<javascript>', correct: false}
            ]

    },
    {
        question: ' Which of the following is not a valid JavaScript variable name ?',
        answers: [
            {text: '2names', correct: true },
            {text: '_first_and_last_names', correct: false},
            {text: 'FirstAndLast22', correct: false},
            {text: 'None of the above', correct: false}
          
        ]
    },
    {

        question: ' Which one of these is a JavaScript package manager?',
        answers: [
            {text:"Node.js", correct: false},
            {text:"TypeScript", correct: false},
            {text:"npm", correct: true }

                 ]
          
    },
    {

        question: ' Is it possible to nest functions in JavaScript? ',
        answers: [
            {text:"False", correct: false},
            {text:"True", correct: true }

                 ]
          
    },
    {
        question: ' What is mean by “this” keyword in javascript? ',
        answers: [
            {text: ' It referes previous object ', correct: false},
            {text: ' It refers current object ', correct: true },
            {text: ' It is variable which contains value ', correct: false},
            {text: ' None of the above ', correct: false}
          
        ]
    }
    

]


function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
}
// Attaches event listener to button
//resetButton.addEventListener("click", resetGame);



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
        questionContainerElement.classList.add('hide');
        nextButton.classList.add('hide')
        mainEl.textContent = " Time is Up ! ";
       
      stopTest();
        loseGame();
      }
    }, 1000);
  }
