const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById ('answer-buttomns')

let shuffledQuestions 
let currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame(){
    console.log('good to go')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}
function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
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
function resetState(){
    nextButton.classList.add('hide')
}

function selectAnswer(e) {

}

const questions = [
    {
    question: ' What is 1 + 3 =  ??',
    answer: [
        {text: '4',correct: true },
        {text: '5', correct: false},
        {text: '88', correct: false},

      
    ]

    },
    {
        question: ' What is 5 + 3 =  ??',
        answer: [
            {text: '8',correct: true },
            {text: '10', correct: false},
            {text: '22', correct: false}
          
        ]
    
        }
]