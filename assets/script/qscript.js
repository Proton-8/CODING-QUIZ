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

let shuffledQuestions 
let currentQuestionIndex
let score = 0;
let winCounter = 0;
//let loseCounter = 0;
let isWin = false;
let timer = 0 ;
let timerCount = 30;




startButton.addEventListener('click', startGame)
//listen for Next Button to be 'clicked' and move onto next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    startTimer();
// removes start button
startButton.classList.add('hide');

// THE main random question selector
shuffledQuestions = questionArray.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
setNextQuestion();
}

// advance to next question
function setNextQuestion() {
    resetState();   
    showQuestion(shuffledQuestions[currentQuestionIndex]);
 
// display the question with the answer options
}
function showQuestion(question){
    questionElement.innerText = question.question
   
  // Create a button for each answer right or wrong // 
  
  question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        //add the button class
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
                    }
        else {
           console.log ('wrong answer')
            timerCount = timerCount - timePenalty
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)

    })
}


// clears out the previous question
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)

    }
}
// passed from above
function selectAnswer(e) {
//console.log(e.target)
const selectedButton = e.target;
//check to see if the selection was correct
const correct = selectedButton.dataset.correct;
console.log (correct);
 if (correct) {
   score++;}
   // removes 5 secs for wrong answer
      else {
     timerCount = timerCount-timePenalty;
   }
console.log(score);
   
setStatusClass (document.body, correct);
//convert into an array from our answer button children
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
    
})
// check to see if there are any more questions
if (shuffledQuestions.length > currentQuestionIndex + 1) {
  nextButton.classList.remove('hide')
} 
else {
    questionContainerElement.classList.add('hide')
    clearInterval(timer);
    finalName.classList.remove('hide')

    
    
}

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




// The setTimer function starts and stops the timer 
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
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
     // loseGame();
    }
  }, 1000);
}

