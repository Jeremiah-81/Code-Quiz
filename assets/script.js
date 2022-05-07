/*quiz questions*/

var queryArray = [
  {
    question: "How can you make bold text in CSS?",
    decisions: [
      "font-type:bold;",
      "font-weight:bold;",
      "style:bold;",
      "font:bold;",
    ],
    answer: "font-weight:bold;",
  },
  {
    question:
      "Which one of these operators is used for comparison in javascript?",
    decisions: ["<!---->", "&&", "<>", "=="],
    answer: "==",
  },
  {
    question: "How do you put a comment into a CSS file?",
    decisions: [
      "/*This is a comment*/",
      "<This is a comment>",
      "--This is a comment--",
      "#This is a comment#",
    ],
    answer: "/*This is a comment*/",
  },
  {
    question: "Meta data goes in the body of an HTML file?",
    decisions: ["True", "False"],
    answer: "False",
  },
  {
    question: "You make a visit to Garak buisness what do you leave with?",
    decisions: ["Tool", "Food", "Slacks", "Machine parts"],
    answer: "Slacks",
  },
];


// var players_name = initials
var max_questions = 5;
var points = JSON.parse(localStorage.getItem("mostRecentScore")) || [];
// Tring this
startGame = () => {
  if (availableQuestion.length === 0 || questionBox > max_questions) {
    locall.push({ score: hourglass, initials: "player initials" });
    localStorage.setItem("mostRecentScore", points);

    return window.localStorage.assign(index.html);
  }
};

var startBtn = document.getElementById("startbutton");
var questionBox = document.querySelector("#question-box");
var scoreText = document.querySelector("#score");
var timeEl = document.querySelector("#time");
var hourglass = 60;
var countDown = queryArray.length * 15;
var timerInterval;
// var score = 0;
var codeQuestion = 0;

function startTime() {
  timerInterval = setInterval(function () {
    hourglass--;
    timeEl.textContent = hourglass + "-SECONDS";

    if (hourglass === 0) {
      clearInterval(timerInterval);
      score(25);
    }
  }, 1000);
}

// game start works good
//make loop for other questions and score keep
startBtn.addEventListener("click", gameStart);

//the game starts here.
function gameStart() {
  startBtn.style.display = "none";
  console.log("gamestarted");
  // zero is the first question
  codeQuestion = 0;
  score = 25;
  startTime();
  setupquestion(codeQuestion, questionBox);
}

function endGame() {
  qContainer.innerHTML = "Game Over";
  cleraInterval(timerInterval);
}

var questionBox = document.getElementById("question-box");
function setupquestion(qNumber, qContainer) {
  qContainer.innerHTML = "";
  var queryquestion = document.createElement("p");
  var decisionsList = document.createElement("ol");
  if (qNumber == queryArray.length) {
    clearInterval(timerInterval);
    return;
  }

  queryquestion.textContent = queryArray[qNumber].question;
  qContainer.append(queryquestion);
  for (var i = 0; i < queryArray[qNumber].decisions.length; i++) {
    var playersChoice = document.createElement("button");
    var playerBtnChoice = document.createElement("li");

    playersChoice.textContent = queryArray[qNumber].decisions[i];
    playerBtnChoice.append(playersChoice);
    decisionsList.append(playerBtnChoice);
  }

  qContainer.append(decisionsList);
  return;
  // start timer here
}

// question appers and player answers.
function reviewAnswer(event) {
  var playerAnswer = event.target.textContent;
  var rightAnswer = document.createElement("p");
  if (playerAnswer === queryArray[codeQuestion].answer) {
    rightAnswer.textContent = "Right answer!";
    time.append(rightAnswer);
    console.log(score);
  } else {
    rightAnswer.textContent = "Wrong answer!";
    hourglass -= 5;
    time.append(rightAnswer);
  }
  
  // this generates the next question.
  codeQuestion++;
  setupquestion(codeQuestion, questionBox);
}

startBtn.addEventListener("click", playquiz);
questionBox.addEventListener("click", reviewAnswer);
function playquiz() {}



//write comments below.

// function score () {
//   playersChoice = decisions(function () {
//   points = localStorage.getItem("score");
//   })
// }

// questionBox.addEventListener("click", reviewAnswer);

// timer countdown for game.
// questionBox.innerHTML ="hourglass";

// if (hourglass < 0) {
//   clearInterval(x);
//   document.getElementById("hourglass").innerHTML = "expired";
// }
// {
//   1000;

// function playquiz() {
//  var newscore = localStorage.getItem(start);
//     time.textContent = hourglass;

// queryquestion.textContent = "";
// for (var i = 0; i < queryArray[codeQuestion].decisions.length; i++) {
// queryquestion.textContent = queryArray[codeQuestion].question;

// var playersChoice = document.createElement("li");
// playersChoice.textContent = queryArray[codeQuestion].decisions[i];
// decisionsList.append(playersChoice);

// questionBox.append(queryquestion);
// questionBox.append(decisionsList);
// codeQuestion++;
