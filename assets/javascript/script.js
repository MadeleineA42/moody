const questions = [
    {
        //question index 0
        question: "What color is the sun?",
        answers: [
            { text: "Yellow", correct: true },
            { text: "Blue", correct: false },
            { text: "Red", correct: false },
        ]
    },
    {
        //question index 1
        question: "What animal is taller than a hippo?",
        answers: [
            { text: "Mouse", correct: false },
            { text: "Giraffe", correct: true },
            { text: "Dog", correct: false },
        ]
    },
    {
        //question index 2
        question: "What color is lime?",
        answers: [
            { text: "Yellow", correct: false },
            { text: "Blue", correct: false },
            { text: "Green", correct: true },
        ]
    },
];

const questionEl = document.getElementById("question");
const answerBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score")

let currentQuestionIndex = 0;
let score = 0;

document.getElementById("timer").style.display = "none"
document.getElementById("finishQuiz").style.display = "none"

//when the quiz is started, reset score and reset questions
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    //taking the question using indecies 0, 1, 2
    answerBtns.textContent = ""
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionEl.innerHTML = questionNum + ". " + currentQuestion.question;
    console.log(questionNum)

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    })
}

function nextQuestion() {
    currentQuestionIndex++
    showQuestion()
    //need to add function to go to id=finishQuiz after last question
    // if () {
    //     console.log("all done")
    //     allDone();
    // }
}

nextBtn.addEventListener("click", nextQuestion)

function resetQuiz() {
    nextBtn.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    //correct answers are in green, incorrect in red
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        console.log("Correct!");
    } else {
        selectedBtn.classList.add("incorrect");
        //need to figure out how to take off time when incorrect
        console.log("Incorrect!");
    }
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";
}
startQuiz();
