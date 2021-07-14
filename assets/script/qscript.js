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

//let scores =  JSON.parse(localStorage.getItem("scores")) || [];
let shuffledQuestions 
let currentQuestionIndex
let score = 0;
let winCounter = 0;
//let loseCounter = 0;
let isWin = false;
let timer = 0 ;
let timerCount = 10;




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
  //  console.log('good to go');
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
   
  // Create a button for each answer right or wrong // 
  
  question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        //add the button class
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            // If correct, add 1 to the score !
            score++
            console.log (score);
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
const correct = selectedButton.dataset.correct;
setStatusClass (document.body, correct);
//convert into an array from our answer button children
Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
    //rightAnswers++;
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
     // if (timerCount >= 0) {
        // Tests if win condition is met
        //if (isWin && timerCount > 0) {
          // Clears interval and stops timer
         // clearInterval(timer);
        //  winGame();
    //    }
  //    }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        questionContainerElement.classList.add('hide');
        nextButton.classList.add('hide')
        mainEl.textContent = " Time is Up ! ";
       // mainE1.textContent = "You got"  + 
       alert ('you got  '+ score +' correct!');       
      stopTest();
        loseGame();
      }
    }, 1000);
  }

//   let secondsLeft = 76;
// // Quiz Timer:
// let timer = () => {
//   let timerInterval = setInterval(() => {
//     secondsLeft--;
//     timeEl.textContent = 'Time: ' + secondsLeft;
//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       startScreen.style.display = 'none';
//       endScreen.style.display = 'block';
//       questionScreen.style.display = 'none';
//     }
//   }, 1000);
// }