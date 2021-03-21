var count = 120;
var highScores = 0; 
let scoreArray = [];

var startQuizBtn = document.querySelector("#generateQuiz");
startQuizBtn.addEventListener("click", dislayQuestion ());
//this method was told to me by JAmes from ASk bootcamp, this needs to be incorporated

var quizQuestion = document.getElementById("runningQuestion"); 
var quizChoice1 = document.getElementById("runningChoice1");
var quizChoice2 = document.getElementById("runningChoice2");
var quizChoice3 = document.getElementById("runningChoice3");
var quizChoice4 = document.getElementById("runningChoice4");

var questions = [
{question: "this is my first question",
choices: ["a","b","c","d"], 
answer: "c"}
];

var questionNumber = 0;

function evaluation(event) 
{
var clickedAnswer = event.target;
var clickedText = clickedAnswer.innerText;

if (clickedText === question[questionNumber].answer)
{alert ="correct"
}
else {
    alert = "incorrect"
}
}

function dislayQuestion ()
{
    quizQuestion.innerText = questions[questionNumber].question;
    quizChoice1.innerText = questions[questionNumber].choices;
    quizChoice2.innerText = questions[questionNumber].choices;
    quizChoice3.innerText = questions[questionNumber].choices;
    quizChoice4.innerText = questions[questionNumber].choices;
}

quizChoice1.addEventListener("click", evaluation);
quizChoice2.addEventListener("click", evaluation); 
quizChoice3.addEventListener("click", evaluation);
quizChoice4.addEventListener("click", evaluation);

