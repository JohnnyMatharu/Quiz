var highScoresul=document.getElementById("highScores")
var highScores = JSON.parse(localStorage.getItem("highScores"));
function showHighScores ()
{
    console.log(highScoresul)
console.log(highScores);
highScores.sort((a,b) => b.score-a.score)
console.log(highScores);
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