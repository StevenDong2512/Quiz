var question = document.querySelector(".question");
// converting to Array
var choices = Array.from(document.querySelectorAll(".choice-text"));

var scoreText = document.querySelector("#score");

var currentQuestion = {};
var answers = true;
var score = 0;
var questionCounter = 0;
var avilableQuestions = [];

var questions = [
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        choice1: "In the <body> section",
        choice2: "In the <head> section",
        choice3: "In the <script> section",
        choice4: "Anywhere",
        answer: "2",
    },
    {
        question: "Who is making the Web standards?",
        choice1: "Google",
        choice2: "Microsoft",
        choice3: "Apple",
        choice4: "The World Wide Web Consortium",
        answer: "4",

    },
    {
        question: "Which CSS property controls the text size?",
        choice1: "font-size",
        choice2: "text-style",
        choice3: "font-style",
        choice4: "text-size",
        answer: "1"

    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<sciprting>",
        choice2: "<js>",
        choice3: "<script>",
        choice4: "<javascript>",
        answer: "3"

    }
]


var bonus = 50;
var totalQuestions = 4;


// Start Quiz with 0 scores and questions index
startQuiz = () => {
    questionCounter = 0;
    score = 0;
    avilableQuestions = [...questions];
    getNextQuestion();
};

// Display question title
getNextQuestion = () => {
    // when there is no question left direct to the final page 
    if (avilableQuestions.length === 0) {
        return window, location.assign("final.html")
    }
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * avilableQuestions.length);
    currentQuestion = avilableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


    // Display choices 
    var choices = Array.from(document.querySelectorAll(".choice-text"));
    choices.forEach(choice => {
        var choiceIndex = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + choiceIndex];
    });
    // Change to a new question that hasn't been featured
    avilableQuestions.splice(questionIndex, 1);
    answers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', event => {
        if (!answers) return;

        answers = false;
        var selectedChoice = event.target;
        var selectedAnswer = selectedChoice.dataset["number"];


        // Turn the choice green if correct, red if incorrect
        var changeColor = "incorrect";
        if (selectedAnswer == currentQuestion.answer) {
            changeColor = "correct";
        }

        if(changeColor == "correct"){
            increaseScore(bonus)
        }

        selectedChoice.parentElement.classList.add(changeColor);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(changeColor);
        }, 900)

        getNextQuestion();
    });
});

increaseScore = num => {
    score += num;
    scoreText.innerText = score;
}

startQuiz();
