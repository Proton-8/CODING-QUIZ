const startButton = document.getElementById('start-btn')
const startButton2 = document.getElementById('start-btn2')
const nextButton = document.getElementById('next-btn')
// const submitButton = document.getElementById('submit')
const finalScore = 0
const mainEl = document.getElementById('main');
const finalName = document.getElementById('name')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerElement = document.querySelector(".timer-count");
const timePenalty = 5;


let submitEl = document.querySelector("#submit");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let submissionResponseEl = document.querySelector("#response");







let shuffledQuestions ;
let currentQuestionIndex;
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
           // timerCount = timerCount - timePenalty
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
   score++;
  alert(" AWESOME, You are CORRECT !!!");
  }
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
  //alert("next button")
} 
else {
    questionContainerElement.classList.add('hide');
     console.log("no more questions")  ;
    clearInterval(timer);
     finalName.classList.remove('hide');
    submitEl.classList.remove('hide');
    isWin ='true'
    finish()
    
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
     // alert("time not zero");

      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        alert('WIN and time ends');
        clearInterval(timer);
        console.log("ok made it to 154")
        finish()
      }
    }
    // Tests if time has run out
    if (timerCount <= 0) {
      alert("Time is up...");
      // Clears interval
      clearInterval(timer);
    console.log("ok made it 162")
      finish()
    }
  }, 1000);
}

//---------------work in progress-----------------------------------------------------------

//Z input............

// Selectors
//const currentTimeEl = document.querySelector('#currentTime')
//const timerEl = document.querySelector('#startTime')
//const questionsDivEl = document.querySelector('#questionsDiv')
//const wrapperEl = document.querySelector('#wrapper')
//const questionsTextEl = document.querySelector('#questionsText')
//const choicesUlEl = document.querySelector('#choicesUl')


// Action to be performed on click store in named function
console.log(submitEl)
function finish(){
  alert("made it to the finish...");
  submitEl.addEventListener('click', function(event){
    event.preventDefault();
    console.log('THIS BETTER WORK!!!')
  })

// function showResponse(event) {
//   // Prevent default action
//   
//   console.log(event);
//   var response = "Thank you for your submission " + nameInput.value + "! Your score is " + score + ".";
//   submissionResponseEl.textContent = response;

}
  
// Add listener to submit element
// submitEl.addEventListener("click", showResponse);


/*
 questionsDivEl.textContent = '';
 timerEl.textContent = '';

  Creating Header
  
  const createHeaderEl = document.createElement('h1');
  createHeaderEl.setAttribute('id', createHeaderEl);
  createHeaderEl.textContent = 'All done!';

  //questionsDivEl.appendChild(createHeaderEl);

  //Creating Text
  const createTextEl =document.createElement('p');
  createTextEl.setAttribute('id', 'createTextEl');

 // questionsDivEl.appendChild(createTextEl);


  //Creates Label
  const createlabelEl = document.createElement('label');
  createlabelEl.setAttribute('id', 'createlabelEl');
  createlabelEl.textContent = '';

  //questionsDivEl.appendChild(createlabelEl);

  //Creates Input
  alert("made it to create input 211 ...");
  const createInputEl = document.createElement('input');
  createInputEl.setAttribute('type', 'text');
  createInputEl.setAttribute('id', 'createInputEl');
  createInputEl.textContent ='';

 // questionsDivEl.appendChild(createInputEl);

  //Creates Submit Button
  const createSubmitEl = document.createElement('button');
  createSubmitEl.setAttribute('type', 'submit');
  createSubmitEl.setAttribute('id', 'submitButtonEl');
  createSubmitEl.textContent = 'Sumbit';

 // questionsDivEl.appendChild(createSubmitEl); */


//This is what you want to focus on.
//   // Captures initials and score and put them into local storage
//     submitEl.addEventListener('click', function(){
//     let initials = nameInput.value()

//     if (initials === null) {
//       alert("Please enter your initials");
//     }else {
//       var finalScore = {
//         initials: initials,
//         score: score
//       }
//       console.log(finalScore);
//       let scoreData = localStorage.getItem('score');
//       if (scoreData === null) {
//         scoreData = [];
//       }else {
//         scoreData = JSON.parse(scoreData);
//       }
//       scoreData.push(finalScore);
//       const newScore = JSON.stringify(scoreData);
//       localStorage.setItem('score', newScore);
//       // Takes user to High Score page
//       window.location.replace('./highScores.html')
//     }

//   })
// }