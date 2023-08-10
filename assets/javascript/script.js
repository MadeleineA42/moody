const questionEl = document.getElementById("question")
const answersEl = document.getElementById("answers")
const startBtn = document.getElementById("start")

var currentIndex = 0

startBtn.addEventListener("click", startQuiz);
function startQuiz() {
    showQuestion();
}

function showQuestion () {
    
}



const questions = [
    {
        question: "Question 1",
        answers: [
            {text: "answer 1", correct: true},
            {text: "answer 2", correct: false},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false},
        ]
    }, {
        question: "Question 2",
        answers: [
            {text: "answer 1", correct: true},
            {text: "answer 2", correct: false},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false},
        ]
    }, {
        question: "Question 3",
        answers: [
            {text: "answer 1", correct: true},
            {text: "answer 2", correct: false},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false},
        ]
    }, {
        question: "Question 4",
        answers: [
            {text: "answer 1", correct: true},
            {text: "answer 2", correct: false},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false},
        ]
    }, {
        question: "Question 5",
        answers: [
            {text: "answer 1", correct: true},
            {text: "answer 2", correct: false},
            {text: "answer 3", correct: false},
            {text: "answer 4", correct: false},
        ]
    }
];