var count = 120;
var highScores = 0; 
let scoreArray = [];

var startQuizBtn = document.querySelector("#generateQuiz");
startQuizBtn.addEventListener("click", displayQuestion);
//this method was told to me by JAmes from ASk bootcamp, this needs to be incorporated

document.getElementById("window2").style.display="none"; 

var quizQuestion = document.getElementById("runningQuestion");
var quizChoice1 = document.getElementById("runningChoice1");
var quizChoice2 = document.getElementById("runningChoice2");
var quizChoice3 = document.getElementById("runningChoice3");
var quizChoice4 = document.getElementById("runningChoice4");

var questions = [
{question: "this is my first question",
choices: ["a","b","c","d"], 
answer: "c"},
{question: "this is my second question",
choices: ["e","f","g","h"], 
answer: "g"},
{question: "this is my second question",
choices: ["i","j","k","l"], 
answer: "k"},
{question: "this is my second question",
choices: ["m","n","o","p"], 
answer: "o"},
{question: "this is my second question",
choices: ["q","r","s","t"], 
answer: "s"},
{question: "this is my second question",
choices: ["u","v","w","x"], 
answer: "w"},
]
;

var questionNumber = 0;

function evaluation(event) 
{
var clickedAnswer = event.target;
console.log(clickedAnswer);
var clickedText = clickedAnswer.innerText;
console.log(clickedText);
if (clickedText === questions[questionNumber].answer)
{
    alert("correct");
}
else {
    alert("incorrect");
};
questionNumber++
console.log(questionNumber)
displayQuestion();
}

function displayQuestion ()

{
console.log("hey")
document.getElementById("window1").style.display="none"; 
document.getElementById("window2").style.display="block"; 
    quizQuestion.innerText = questions[questionNumber].question;
    quizChoice1.innerText = questions[questionNumber].choices[0];
    quizChoice2.innerText = questions[questionNumber].choices[1];
    quizChoice3.innerText = questions[questionNumber].choices[2];
    quizChoice4.innerText = questions[questionNumber].choices[3];
}

quizChoice1.addEventListener("click", evaluation);
quizChoice2.addEventListener("click", evaluation); 
quizChoice3.addEventListener("click", evaluation);
quizChoice4.addEventListener("click", evaluation);
