//there are multiple choice questions, check the assignment

var questions = [
{ q: "There is no difference in HTML class and id?", a: "f"},
{ q: "Coding is easy to learn by cramming books?", a: "f" },
{ q: "Coding is usully not a team work, its one man's job?", a: "f"},
{ q: "Console log is one the best ways to find structure errors?", a: "t"},      
{ q: "All coding shouls look the same for all coders?", a: "f"},
{ q: "Draw.io is a nice tool to create algorythems, data structures and pseudocodes?", a: "t"},
]

var highestScores = 0;
for (  var i = 0; i < questions.length; i++) {
var answer = confirm(questions[i].q);

if (answer === true && questions[i].a == 't' || answer === false && question[i].a === 'f')
score++;
alert('Correct Answer!');
else {
    alert ('You are wrong !');
}
]

//check the following line for why it has $, is it Jquery?
alert ('Your final score is ${score}');
