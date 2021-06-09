var highScoresul=document.getElementById("highScores")
//the array we just updated is being pulled again and parsed to variable called highScores
var highScores = JSON.parse(localStorage.getItem("highScores"));
function showHighScores ()
{
    console.log(highScoresul)
console.log(highScores);
//sort the parsed array in ascending order
//sort another method function , two parameters a and b, shuffled ot creating a new array
highScores.sort((a,b) => b.score-a.score)
console.log(highScores);
//once sorted now displayed on html appenchild method
for(var i=0; i<highScores.length; i++)
{
    var li = document.createElement("li");
    var text = document.createTextNode("initials: "+highScores[i].initials+" score: "+highScores[i].score);
    li.appendChild(text)
//    var p = "<p>initials: "+highScores[i].initials+"</p>"
//    var p1 = "<p>score: "+highScores[i].score+"</p>"
// highScoresul.appendChild(p)
highScoresul.appendChild(li)
}


}
showHighScores();