let rightButton;
let wrongButton;
let body;
let questionNum = 0;
let americanQuestionNum = 0;
let trueAnswer;
let falseAnswer;
let continueBtn;

let firstAnswer;
let secondAnswer;
let thirdAnswer;
let fourthAnswer;

const backgroundImages = ['url("/assets/Exercise/שאלה\ 1\ הקדמה.png")', 'url("/assets/Exercise/שאלה\ 1\ הקדמה.png")'];
const backgroundImagesAmerican = ['url("/assets/Exercise/שאלה\ אמריקאית\ 1.png")', 'url("/assets/Exercise/שאלה\ אמריקאית\ 1.png")'];
const allAnswers = ["right"];

window.onload = function() {
    Load();
}

//Loads all the variables
function Load() {
    rightButton = document.getElementById("rightButton");
    wrongButton = document.getElementById("wrongButton");

    body = document.getElementById("body");
    continueBtn = document.getElementById("continueBtn");

    trueAnswer = document.getElementById("trueAnswer");
    falseAnswer = document.getElementById("falseAnswer");

    firstAnswer = document.getElementById("firstAnswer");
    secondAnswer = document.getElementById("secondAnswer");
    thirdAnswer = document.getElementById("thirdAnswer");
    fourthAnswer = document.getElementById("fourthAnswer");
};

//Check if the answer is right or wrong
function CheckAnswer(whatChose) {
    if(whatChose === allAnswers[questionNum]) {
        rightButton.style.visibility = "hidden";
        wrongButton.style.visibility = "hidden";
        trueAnswer.style.visibility = "visible";
        continueBtn.style.visibility = "visible";
    }
    else {
        rightButton.style.visibility = "hidden";
        wrongButton.style.visibility = "hidden";
        falseAnswer.style.visibility = "visible";
        continueBtn.style.visibility = "visible";
    }
};

function GoNextAmericanQuestion() {
    body.style.backgroundImage = backgroundImagesAmerican[americanQuestionNum];
    ClearAmericanPage();
}

function GoNextQuestion() {
    questionNum++;
    body.style.backgroundImage = backgroundImages[questionNum];
    ClearPage();
}

function ClearAmericanPage() {
    continueBtn.style.visibility = "hidden";
    rightButton.style.visibility = "hidden";
    wrongButton.style.visibility = "hidden";
    falseAnswer.style.visibility = "hidden";
    trueAnswer.style.visibility = "hidden";

    firstAnswer.style.visibility = "visible";
    secondAnswer.style.visibility = "visible";
    thirdAnswer.style.visibility = "visible";
    fourthAnswer.style.visibility = "visible";
}

function ClearPage() {
    continueBtn.style.visibility = "hidden";
    rightButton.style.visibility = "visible";
    wrongButton.style.visibility = "visible";
    falseAnswer.style.visibility = "hidden";
    trueAnswer.style.visibility = "hidden";

    firstAnswer.style.visibility = "hidden";
    secondAnswer.style.visibility = "hidden";
    thirdAnswer.style.visibility = "hidden";
    fourthAnswer.style.visibility = "hidden";
}

function CheckAmericanAnswer(whatChose) {
    if(whatChose === 'true') {
        continueBtn.style.visibility = "visible";
        ArrangeAnswers();
    }
    else {
        ArrangeAnswers();
        continueBtn.style.visibility = "visible";
    }
};

function ArrangeAnswers() {
    firstAnswer.style.backgroundcolor = " agreen";
    secondAnswer.style.backgroundcolor = "red";
    thirdAnswer.style.backgroundcolor = "red";
    fourthAnswer.style.backgroundcolor = "red";

    // firstAnswer.style.opacity = "0.4";
    // secondAnswer.style.opacity = "0.4";
    // thirdAnswer.style.opacity = "0.4";
    // fourthAnswer.style.opacity = "0.4";
}


