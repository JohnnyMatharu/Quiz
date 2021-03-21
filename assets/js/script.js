var count = 120;
var quizScores = 0; 
let scoreArray = [];

var startQuizBtn = document.querySelector("#generateQuiz");
startQuizBtn.addEventListener("click", displayQuestion);

var finalSubmitBtn = document.querySelector("#finalSubmission");
finalSubmitBtn.addEventListener("click", finalSubmit);

document.getElementById("window2").style.display="none"; 

var quizQuestion = document.getElementById("runningQuestion");
var quizChoice1 = document.getElementById("runningChoice1");
var quizChoice2 = document.getElementById("runningChoice2");
var quizChoice3 = document.getElementById("runningChoice3");
var quizChoice4 = document.getElementById("runningChoice4");

var finalGrade = document.getElementById("printGrades");

var questions = [
{question: "First Question",
choices: ["a","b","c","d"], 
answer: "c"},
{question: "Second Question",
choices: ["e","f","g","h"], 
answer: "g"},
{question: "Third Question",
choices: ["i","j","k","l"], 
answer: "k"},
{question: "Fourth Question",
choices: ["m","n","o","p"], 
answer: "o"},
{question: "Fifth Question",
choices: ["q","r","s","t"], 
answer: "s"},
{question: "Sixth Question",
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
    quizScores = quizScores + 20;
}
else {
    alert("incorrect");
};
questionNumber++
console.log(questionNumber)
if (questionNumber >= 6)
{
    finalSubmit();
} 
else
{
displayQuestion();
}
}

// function finalPage () {document.getElementById("finalPage").style.display="none";}

function displayQuestion ()

{
   // setTimeout()
console.log("hey")
document.getElementById("window1").style.display="none"; 
document.getElementById("window2").style.display="block"; 
    quizQuestion.innerText = questions[questionNumber].question;
    quizChoice1.innerText = questions[questionNumber].choices[0];
    quizChoice2.innerText = questions[questionNumber].choices[1];
    quizChoice3.innerText = questions[questionNumber].choices[2];
    quizChoice4.innerText = questions[questionNumber].choices[3];
}


function finalSubmit ()
{
document.getElementById("window1").style.display="none"; 
document.getElementById("window2").style.display="none";
document.getElementById("finalPage").style.display="block";
finalGrade.innerText = "Quiz Over, Your final scores are" + "   " + quizScores + "   " + "Please enter your initials and save your scores. Thank you ! for participating, GoodBye!";
var initials = document.getElementById ("formInitials");
initials.addEventListener('submit',function(event) {
event.preventDefault();
localStorage.setItem("initials", document.querySelector("#inputInitial").value);
});
console.log(initials);
//you need to save the scores using JSON string
}


quizChoice1.addEventListener("click", evaluation);
quizChoice2.addEventListener("click", evaluation); 
quizChoice3.addEventListener("click", evaluation);
quizChoice4.addEventListener("click", evaluation);

