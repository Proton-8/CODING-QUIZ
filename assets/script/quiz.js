

let questions = [
    {
        question : "What color is water?",
        imgSrc : "img/???.png",
        choiceA : "Red",
        choiceB : "Blue",
        choiceC : "Green",
        correctAnswer : "A"},
        {
            question : "What color is the sky?",
            imgSrc : "img/???.png",
            choiceA : "Red",
            choiceB : "Blue",
            choiceC : "Green",
            correctAnswer : "A"},
    
        
       // prompt: "Which one of these is a JavaScript package manager? \n(a) red\n (b) T\n (c) npm",
    
        //correctAnswer: "c"
        //    },
  // {
       // prompt: "What color is the Sky?\n(a) red\n (b) purple\n (c) blue",
      //  correctAnswer: "c"
   // }
]
var score = 0;
for (var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].correctAnswer){
        score++;
        alert (" You are CORRECT !! ");
    } else {
        alert (" Sorry, Wrong Answer :-( ");
    }
    }
    alert ("you got" + score +"of" + questions.length)

