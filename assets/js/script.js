var count = 120
var highScores = 0 
let scoreArray = [];

//add a query selector.textcontent for all content to display check css styling
//add timer function here

var start = function ()
{//display 1
<h1>"Coding Quiz Challenge"</h1>
alert = "Please answer all of the following questions, there will be 120 seconds for 6 questions, for every wrong question 10 seconds will be deducted. Quiz will stop at 120 seconds, so please try to finish before that time"
<button>Start Quiz</button>
question1();
};


var question1 = function()
{
//display 2
<h1>"Question 1</h1>
<div><option>option 1</option><div>
<div><option>option 2</option></div>
<div><option>option 3</option></div>
<div><option>option 1</option></div>

/* Event listener, onclick display right or wrong bottom of options*/
{/* save response of user in variable called userOption */}

if (userOption == true){
scores = scores + 20
}
else { count-10}

question2();
};

var question2 = function()
{
//display 2
<h1>"Question 2</h1>
<div><option>option 1</option><div>
<div><option>option 2</option></div>
<div><option>option 3</option></div>
<div><option>option 1</option></div>

/* Event listener, onclick display right or wrong bottom of options*/
{/* save response of user click in variable called userOption */}

if (userOption == true){
scores = scores + 20
}
else { count-10}

question3();
};



var question3 = function()
{
//display 2
<h1>"Question 3</h1>
<div><option>option 1</option><div>
<div><option>option 2</option></div>
<div><option>option 3</option></div>
<div><option>option 1</option></div>

/* Event listener, onclick display right or wrong bottom of options*/
{/* save response of user click in variable called userOption */}

if (userOption == true){
scores = scores + 20
}
else { count-10}

question4();
};



var question4 = function()
{
//display 2
<h1>"Question 4</h1>
<div><option>option 1</option><div>
<div><option>option 2</option></div>
<div><option>option 3</option></div>
<div><option>option 1</option></div>

/* Event listener, onclick display right or wrong bottom of options*/
{/* save response of user click in variable called userOption */}

if (userOption == true){
scores = scores + 20
}
else { count-10}

question5();
};



var question5 = function()
{
//display 2
<h1>"Question 5</h1>
<div><option>option 1</option><div>
<div><option>option 2</option></div>
<div><option>option 3</option></div>
<div><option>option 1</option></div>

/* Event listener, onclick display right or wrong bottom of options*/
{/* save response of user click in variable called userOption */}

if (userOption == true){
scores = scores + 20
}
else { count-10}

question6();
};



var question6 = function()
{
//display 2
<h1>"Question 6</h1>
<div><option>option 1</option><div>
<div><option>option 2</option></div>
<div><option>option 3</option></div>
<div><option>option 1</option></div>

/* Event listener, onclick display right or wrong bottom of options*/
{/* save response of user click in variable called userOption */}

if (userOption == true){
scores = scores + 20
}
else { count-10}

finalScores();
};


var finalScores =function()
{}
//display 
<h1>"All Done!"</h1>
alert = "Your Final score"+"score"
<br>
Enter initials: <form><input> </input></form>
<button>Submit</button>

scoreArray.push scores;
}

/* there is event listener for button or link view scores, double check if this is to check highest scores or present scores */
var displayScores = function()
{/* display View Scores after pressing view scores */
<h1>"High Scores"</h1>
<div>"initials" + "-" + highScores().value</div>
};

/* double check what they actually mean by highscores */}
var highScores = function()
{
return max scoreArray;
}



/* here, follow bottom and instructor, check online, then refernce peers */


// local storage can store an object in array , in that case strinigy it and leater to use it we can parse it. 
//for timer use setinterval(function to run, how often in mini seconds), clearInterval (var of interval funtction)
// clear interval after last question or ran out of time, count=0, correlate as screenshot or with question number
// for incorrect subtract 10 from count, display as time left 
// html simple, 




//Js pseudocode




// You will add query listener to .window class, turn to id if you need, submit button with event listener, reaction are prompt messages on window and funtion(highest score).  

//Header: both will disppear when quiz scores are given 

//Div flexbox: left side div 'view high scores' 

//Div Same flecbox: right side div 'time'


//Section: 

//Display:1  Coding Quiz Challenge: center large,  center "explaination", center 'Start Quiz' button. Hover colour change to lighter, Everything in this section is a diplay of prompt but in a style  

//Display:2 Main quiz section choices and bottom div to display right or wrong answer, there is no submit button here, 6 questions one by one

//Display:3 'All done' large, next line 'your final score is : "..."'', next line Add initials (input box), submit button, this is last page for above divs to display scores and time

//Display:4 High scores large, this will have initial entered , '-', Highest score number in next line, and third line 2 buttons, 1. Go back, 2. Clear High scores



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
