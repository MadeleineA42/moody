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
        question: "What holiday describes your current MOOd?",
        answers: [
            { text: "Valentines Day", loved: true },
            { text: "Christmas", happy: true },
            { text: "Tax Day", sad: true },
            { text: "Election Day", angry: true },
            { text: "April Fools", stressed: true },
        ],
    },
    {
        question: "What color descibes your current MOOd?",
        answers: [
            { text: "Pink", loved: true },
            { text: "Yellow", happy: true, },
            { text: "Green", stressed: true },
            { text: "Red", angry: true },
            { text: "Blue", sad: true },
        ],
    },
    {
        question: "What animal describes your current MOOd?",
        answers: [
            { text: "Dog", happy: true },
            { text: "Donkey", sad: true },
            { text: "Mouse", stressed: true },
            { text: "Dove", loved: true },
            { text: "Bull", angry: true },
        ],
    },
    {
        question: "What cartoon character describes your current MOOd?",
        answers: [
            { text: "Spongebob", happy: true },
            { text: "Eeyore", sad: true },
            { text: "Courage the Cowerdly Dog", stressed: true },
            { text: "Pepe Le Pew", loved: true },
            { text: "Grumpy from Snow White", angry: true },
        ],
    },
    {
        question: "In your current MOOd, how do you view the glass?",
        answers: [
            { text: "Half Full", happy: true },
            { text: "Half Empty", sad: true },
            { text: "Soon to be Broken", stressed: true },
            { text: "IDC I'm in Love!", loved: true },
            { text: "Forget the glass, it better be alcohol...", angry: true },
        ],
    },
    {
        question: "What weekday describes your current MOOd?",
        answers: [
            { text: "Monday", stressed: true },
            { text: "Tuesday", sad: true },
            { text: "Wednesday", angry: true },
            { text: "Thursday", loved: true },
            { text: "Friday", happy: true },
        ],
    },
    {
        question: "What type of weather describes your current MOOd?",
        answers: [
            { text: "A Beautiful Sunset with a glass of wine", loved: true },
            { text: "Sunny", happy: true },
            { text: "Lightning", angry: true },
            { text: "Rainy", sad: true },
            { text: "Tornado", stressed: true },
        ],
    },
    {
        question: "In your current MOOd, what is your dream vacation?",
        answers: [
            { text: "Beach", happy: true },
            { text: "Paris", loved: true },
            { text: "A Rage Room", angry: true },
            { text: "In a lonely, dark forest", sad: true },
            { text: "New York City on New Years Eve", stressed: true },
        ],
    },
    {
        question: "If you were a plant, how would it represent your current MOOd?",
        answers: [
            { text: "Red Rose", loved: true },
            { text: "Charlie Brown Christmas Tree", sad: true },
            { text: "Cactus", stressed: true },
            { text: "Sunflower", happy: true },
            { text: "Venus Fly Trap", angry: true },
        ],
    },
    {
        question: "Which dessert best describes your current MOOd?",
        answers: [
            { text: "Fruit Cake", angry: true },
            { text: "Candy", happy: true },
            { text: "Cotton Candy", loved: true },
            { text: "Oatmeal Raisin Cookie that looks like Chocolate Chips", stressed: true },
            { text: "Ice Cream", sad: true },
        ],
    },
    {
        question: "What Movie Genre best describes your current MOOd?",
        answers: [
            { text: "Romantic", loved: true },
            { text: "Drama", sad: true },
            { text: "Action", angry: true },
            { text: "Comedy", happy: true },
            { text: "Thriller", stressed: true },
        ],
    },
];

endResults.style.display = "none";

startBtn.addEventListener("click", startQuiz);
function startQuiz() {
    showQuestion();
    questionIndex = 0;
}

function showQuestion() {
    answerEl.innerHTML = "";
    questionEl.innerText = "";
    endResults.style.display = "none";

    let currentQuestion = questionList[questionIndex];
    questionEl.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
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

function selectAnswer(button) {
    const selection = button.dataset.emotion;

    if (selection === "happy") {
        happyPoints += 1;
        console.log("happy", happyPoints);
    }
    if (selection === "sad") {
        sadPoints += 1;
        console.log("sad", sadPoints);
    }
    if (selection === "stressed") {
        stressedPoints += 1;
        console.log("stressed", stressedPoints);
    }
    if (selection === "loved") {
        lovedPoints += 1;
        console.log("loved", lovedPoints);
    }
    if (selection === "angry") {
        angryPoints += 1;
        console.log("angry", angryPoints);
    }

    questionIndex++;
    if (questionIndex < questionList.length) {
        showQuestion();
    } else {
        answerEl.innerHTML = "";
        questionEl.innerText = "";
        getMoodRating();
        showResults();
    }

    function getMoodRating() {
        if (happyPoints >= 3) {
            console.log("You're Happy!");
            happyResult.innerHTML =
                '<a href="./src/happy.html"><img src="./assets/images/happy-cow.png" alt="Happy MOOdy" class="max-w-full h-auto w-96"></a>';
            sadResult.innerHTML = "";
            stressedResult.innerHTML = "";
            lovedResult.innerHTML = "";
            angryResult.innerHTML = "";
        }
        else if (sadPoints >= 3) {
            console.log("You're Sad.");
            happyResult.innerHTML = "";
            sadResult.innerHTML =
                '<a href="./src/sad.html"><img src="./assets/images/sad-cow.PNG" alt="Sad MOOdy" class="max-w-full h-auto w-96"></a>';
            stressedResult.innerHTML = "";
            lovedResult.innerHTML = "";
            angryResult.innerHTML = "";
        }
        else if (stressedPoints >= 3) {
            console.log("You're Stressed!");
            happyResult.innerHTML = "";
            sadResult.innerHTML = "";
            stressedResult.innerHTML =
                '<a href="./src/stressed.html"><img src="./assets/images/stressed-cow.PNG" alt="Stressed MOOdy" class="max-w-full h-auto w-96"></a>';
            lovedResult.innerHTML = "";
            angryResult.innerHTML = "";
        }
        else if (lovedPoints >= 3) {
            console.log("You're Loved!");
            happyResult.innerHTML = "";
            sadResult.innerHTML = "";
            stressedResult.innerHTML = "";
            lovedResult.innerHTML =
                '<a href="./src/loved.html"><img src="./assets/images/loved-cow.PNG" alt="Loved MOOdy" class="max-w-full h-auto w-96"></a>';
            angryResult.innerHTML = "";
        }
        else if (angryPoints >= 3) {
            console.log("You're Angry!");
            happyResult.innerHTML = "";
            sadResult.innerHTML = "";
            stressedResult.innerHTML = "";
            lovedResult.innerHTML = "";
            angryResult.innerHTML =
                '<a href="./src/angry.html"><img src="./assets/images/angry-cow.PNG" alt="Angry MOOdy" class="max-w-full h-auto w-96"></a>';
        }
    }

    function showResults() {
        endResults.style.display = "block";
    }
}
