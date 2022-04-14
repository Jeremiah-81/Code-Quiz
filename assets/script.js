/*quiz questions*/

var queryArray = [
{  
   question: "How can you make bold text in CSS?",
   decisions: ["font-type:bold;", "font-weight:bold;", "style:bold;", "font:bold;"],
   answer: "font-weight:bold",
},
{ 
   question: "Which one of these operators is used for comparison in javascript?",
   decisions: ["<!---->", "&&", "<>", "=="],
   answer: "==",
},
{ 
   question: "How do you put a comment into a CSS file?",
   decisions: ["/*This is a comment*/", "<This is a comment>", "--This is a comment--", "#This is a comment#"],
   answer: "/*This is a comment*/",
},
{ 
   question: "Meta data goes in the body of an HTML file?",
   decisions: ["True", "False"],
   answer: "False",
}
]
console.log(queryArray[0])
console.log(queryArray[0].question)

var startBtn = document.getElementById("start-button");
var questionBox = document.querySelector("#question-box");
var time = document.querySelector("#time");
var hourglass = queryArray.length *15;
var timerInterval; 
var codeQuestion = 0;
var watcher = time;


function startTime() {
   var timerInterval = setInterval(function() {
      timeLeft--;
      watcher.textContent = timeLeft + "remaining seconds.";

      if (timeLeft === 0) {
         clearInterval(timerInterval);
         gameUpdate();
      }
   }, 1000);
 }
 startTime();
 


// when player begins the game.
 function gameStart(){
 var queryquestion = document.createElement("p");
 var decisionsList = document.createElement("ol");

 queryquestion.textContent = ""
     for (var i = 0; i < queryArray[codeQuestion].decisions.length; i++)
     {
      queryquestion.textContent = queryArray[codeQuestion].question;
 var playersChoice = document.createElement("li");
      playersChoice.textContent = queryArray[codeQuestion].decisions[i];
      decisionsList.append(playersChoice);   
 }
 
}  
// player answers.
function reviewAnswer(event){
   var playerAnswer = event.target.textContent;
   var rightAnswer = document.createElement("p")
   if( playerAnswer === queryArray[codeQuestion].rightanswer.answer){
       rightAnswer.textContent = ("Right answer!");
       time.append(rightAnswer);
   } else {
      rightAnswer.textContent = ("Wrong answer!");
      hourglass -= 5;
      time.append(rightAnswer);
   }

   codeQuestion++;
   questionBox.append(queryquestion);
   questionBox.append(decisionsList);


}
// timer countdown for game.
questionBox.innerHTML ="hourglass";

  if(hourglass < 0 ) {
     clearInterval(x);
     document.getElementById("hourglass").innerHTML = "expired";
  }
{1000};



function playquiz() {
   gameStart();
   time.textContent = hourglass;
}

startBtn.addEventListener("click", playquiz);
questionBox.addEventListener("click", reviewAnswer); 



