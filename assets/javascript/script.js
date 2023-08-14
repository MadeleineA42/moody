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

const questionList = [
    {
        question: "What holiday best describes you?",
        answers: [
            { text: "Christmas", happy: true },
            { text: "Tax Day", sad: true },
            { text: "April Fools", stressed: true },
            { text: "Valentines Day", loved: true },
            { text: "Election Day", angry: true },
        ],
    },
    {
        question: "What color best descibes how you feel?",
        answers: [
            { text: "Yellow", happy: true },
            { text: "Blue", sad: true },
            { text: "Green", stressed: true },
            { text: "Pink", loved: true },
            { text: "Red", angry: true },
        ],
    },
    {
        question: "What animal best descibes your mood?",
        answers: [
            { text: "Dog", happy: true },
            { text: "Donkey", sad: true },
            { text: "Mouse", stressed: true },
            { text: "Dove", loved: true },
            { text: "Bull", angry: true },
        ],
    },
    {
        question: "What cartoon best describes how you're feeling today?",
        answers: [
            { text: "Spongebob", happy: true },
            { text: "Eeyore", sad: true },
            { text: "Courage the Cowerdly Dog", stressed: true },
            { text: "Pepe Le Pew", loved: true },
            { text: "Grumpy from Snow White", angry: true },
        ],
    },
    {
        question: "How do you view the glass?",
        answers: [
            { text: "Half Full", happy: true },
            { text: "Half Empty", sad: true },
            { text: "Soon to be Broken", stressed: true },
            { text: "IDC I'm in Love!", loved: true },
            { text: "Forget the glass, it better be alcohol...", angry: true },
        ],
    },
    {
        question: "What weekday best describes you?",
        answers: [
            { text: "Friday", happy: true },
            { text: "Tuesday", sad: true },
            { text: "Monday", stressed: true },
            { text: "Thursday", loved: true },
            { text: "Wednesday", angry: true },
        ],
    },
    {
        question: "What type of weather best describes your mood?",
        answers: [
            { text: "Sunny", happy: true },
            { text: "Rainy", sad: true },
            { text: "Tornado", stressed: true },
            { text: "A Beautiful Sunset with a glass of wine", loved: true },
            { text: "Lightning", angry: true },
        ],
    },
    {
        question: "What's your dream vacation right now?",
        answers: [
            { text: "Beach", happy: true },
            { text: "In a lonely, dark forest", sad: true },
            { text: "New York City on New Years Eve", stressed: true },
            { text: "Paris", loved: true },
            { text: "A Rage Room", angry: true },
        ],
    },
    {
        question: "If you were a plant, what would you be?",
        answers: [
            { text: "Sunflower", happy: true },
            { text: "Charlie Brown Christmas Tree", sad: true },
            { text: "Cactus", stressed: true },
            { text: "Red Rose", loved: true },
            { text: "Venus Fly Trap", angry: true },
        ],
    },
    {
        question: "Which dessert best describes you?",
        answers: [
            { text: "Candy", happy: true },
            { text: "Ice Cream", sad: true },
            { text: "Oatmeal Raisin Cookie that looks like Chocolate Chips", stressed: true },
            { text: "Cotton Candy", loved: true },
            { text: "Fruit Cake", angry: true },
        ],
    },
    {
        question: "What Movie Genre best describes your mood?",
        answers: [
            { text: "Comedy", happy: true },
            { text: "Drama", sad: true },
            { text: "Thriller", stressed: true },
            { text: "Romantic", loved: true },
            { text: "Action", angry: true },
        ],
    },
];

endResults.style.display = "none"

startBtn.addEventListener("click", startQuiz)
function startQuiz() {
    showQuestion();
    questionIndex = 0;
}

function showQuestion() {
    answerEl.innerHTML = "";
    questionEl.innerText = "";
    endResults.style.display = "none"

    let currentQuestion = questionList[questionIndex];
    questionEl.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        answerEl.appendChild(button);
        button.classList.add("btn");
        if (answer.happy) {
            button.dataset.emotion = "happy";
        }
        if (answer.sad) {
            button.dataset.emotion = "sad";
        }
        if (answer.stressed) {
            button.dataset.emotion = "stressed";
        }
        if (answer.loved) {
            button.dataset.emotion = "loved";
        }
        if (answer.angry) {
            button.dataset.emotion = "angry";
        }
        button.addEventListener("click", function () {
            selectAnswer(button);
            console.log("answer selected!");
        });
    });
}
