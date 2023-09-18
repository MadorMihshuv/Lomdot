let goBtn;
let startBtn;
let body;
let firstTime;
let startOver;

let redDot1;
let redDot2;
let redDot3;
let redDot4;
let redDot5;
let redDot6;
let redDot7;

const backgroundImages = ['url("./assets/mainPage.png")', 'url("./assets/עמוד\ פתיחה\ התעסקות\ בעובד.png")', 'url("./assets/עמוד\ פתיחה\ טיפול\ בהיבטי\ הפרט.png")', 'url("./assets/עמוד\ פתיחה\ סיום\ העסקה.png")'];
const sectionHrefs = ['"./MainPage.html"' ,'"./sections/Prisha/Prisha.html"'];

window.onload = function() {
    Load();
    switch(sessionStorage.getItem("sectionNum")) {
        case "2":
            body.style.backgroundImage = backgroundImages[1];
            startOver.style.visibility = "visible";
            startBtn.style.visibility = "visible";
            goBtn.style.visibility = "hidden";
            
            redDot1.style.visibility = "visible";
            redDot2.style.visibility = "visible"

            break;
        case "3":
            body.style.backgroundImage = backgroundImages[2];
            startOver.style.visibility = "visible";
            startBtn.style.visibility = "visible";
            goBtn.style.visibility = "hidden";

            redDot1.style.visibility = "visible";
            redDot2.style.visibility = "visible";
            redDot3.style.visibility = "visible";
            break;
        case "4":
            body.style.backgroundImage = backgroundImages[3];
            startOver.style.visibility = "visible";
            startBtn.style.visibility = "visible";
            goBtn.style.visibility = "hidden";

            redDot1.style.visibility = "visible";
            redDot2.style.visibility = "visible";
            redDot3.style.visibility = "visible";
            break;
        case "5":
            body.style.backgroundImage = backgroundImages[3];
            startOver.style.visibility = "visible";
            startBtn.style.visibility = "visible";
            goBtn.style.visibility = "hidden";

            redDot1.style.visibility = "visible";
            redDot2.style.visibility = "visible";
            redDot3.style.visibility = "visible";
            redDot4.style.visibility = "visible";
            break;
        case "6":
            break;
        case "7":
            break;
        default:
            body.style.backgroundImage = backgroundImages[0];
            break;
    }
}

//Loads all the variables
function Load() {
    startBtn = document.getElementById("startBtn");
    goBtn = document.getElementById("goBtn");
    body = document.getElementById("body");
    startOver = document.getElementById("startOverBtn");

    redDot1 = document.getElementById("redDot1");
    redDot2 = document.getElementById("redDot2");
    redDot3 = document.getElementById("redDot3");
    redDot4 = document.getElementById("redDot2");
    redDot5 = document.getElementById("redDot2");
    redDot6 = document.getElementById("redDot2");
    redDot7 = document.getElementById("redDot2");
};

//Loads the section map
function SectionMap() {
    window.location.href = "./sections/Preview/Preview.html";
};

//Loads the section page
function SectionPage() {
    switch(sessionStorage.getItem("sectionNum")) {
        case "2":
            window.location.href = "./sections/Sok/Sok.html";
            break;
        case "3":
            window.location.href = "./sections/Prat/Prat.html";
            break;
        case "4":
            window.location.href = "./sections/Prisha/Prisha.html";
            break;
        case "5":
            window.location.href = "./sections/Prisha/Prisha.html";
            break;
        case "6":
            window.location.href = "./sections/Prisha/Prisha.html";
            break;
        case "7":
            window.location.href = "./sections/Prisha/Prisha.html";
            break;
        default:
            break;
    }
};

function StartOver() {
    sessionStorage.setItem("sectionNum" , 0);
    body.style.backgroundImage = backgroundImages[0];
    startOver.style.visibility = "visible";
};

function Section1() {
    window.location.href = "./sections/Preview/Preview.html";
};

function Section2() {
    window.location.href = "./sections/Sok/Sok.html";
};


function Section3() {
    window.location.href = "./sections/Sok/Sok.html";
};


function Section4() {
    window.location.href = "./sections/Prat/Prat.html";
};


function Section5() {
    window.location.href = "./sections/Prisha/Prisha.html";
};


function Section6() {
    window.location.href = "./sections/Prisha/Prisha.html";
};

function Section7() {
    window.location.href = "./sections/Prisha/Prisha.html";
};

