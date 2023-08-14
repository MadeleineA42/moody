let questionEl = document.getElementById("question");
let answerEl = document.getElementById("answers");
let startBtn = document.getElementById("start");
let endResults = document.getElementById("results");
let finalMood = document.getElementById("moodResult");
let happyResult = document.getElementById("happyResult");
let sadResult = document.getElementById("sadResult");
let stressedResult = document.getElementById("stressedResult");
let lovedResult = document.getElementById("lovedResult");
let angryResult = document.getElementById("angryResult");

var questionIndex = 0;

startBtn.addEventListener("click", startQuiz);

var happyPoints = 0;
var sadPoints = 0;
var stressedPoints = 0;
var lovedPoints = 0;
var angryPoints = 0;
