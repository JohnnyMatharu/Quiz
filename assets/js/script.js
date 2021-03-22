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
//localStorage.setItem("highscores",[initials:"hh",scores:]);
var finalGrade = document.getElementById("printGrades");
//var highScoresul=document.getElementById("highScores")
var questions = [
{question: "What is library of Javascript?",
choices: ["HTML","Mongo","Mern","JQuery"], 
answer: "JQuery"},
{question: "Bootstrap is an addition to which code?",
choices: ["Html","Python","CSS","Javascript"], 
answer: "CSS"},
{question: "GetElementbyId is similar to a",
choices: ["function","Query Selector","array","boolean"], 
answer: "Query Selector"},
{question: "Example of server side javascript",
choices: ["Express","Node.js","Vanilla Javascript","React"], 
answer: "Node.js"},
{question: "What is full form of HTML",
choices: ["High Markup Language","Higher Markdown Language","Hypertext Markup Language","High Marked Library"], 
answer: "Hypertext Markup Language"},
{question: "What is full stack web development",
choices: ["its not real","it is connected to web domains","it means stacking of codes in que by server","It means combinations of front end and back end"], 
answer: "It means combinations of front end and back end"},
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
    count=count-10;
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
setTimeout(finalSubmit, 120000);
setInterval(timeText, 2000);
 function timeText ()
 {
    count--;
    console.log(count);
document.getElementById("timer").innerHTML = count;

}



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

//set an object with the score and initials as keys
// get the array of scores saved on local storage
// push the object to the array then store the array.
var entry = {
    initials:document.querySelector("#inputInitial").value, score:quizScores
};
var scores = JSON.parse(localStorage.getItem("highScores")) || [];
scores.push(entry);
localStorage.setItem("highScores",JSON.stringify(scores));
});

//you need to save the scores using JSON string
}


quizChoice1.addEventListener("click", evaluation);
quizChoice2.addEventListener("click", evaluation); 
quizChoice3.addEventListener("click", evaluation);
quizChoice4.addEventListener("click", evaluation);

