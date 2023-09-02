let goBtn;
let startBtn;
let body;
let firstTime;
let startOver;

const backgroundImages = ['url("./assets/mainPage.png")', 'url("./assets/Sok/עמוד\ פתיחה\ התעסקות\ בעובד.png")', 'url("./assets/עמוד\ פתיחה\ טיפול\ בהיבטי\ הפרט.png")', 'url("./assets/עמוד\ פתיחה\ סיום\ העסקה.png")'];
const sectionHrefs = ['"./MainPage.html"' ,'"./sections/Prisha/Prisha.html"'];

window.onload = function() {
    Load();
    switch(sessionStorage.getItem("sectionNum")) {
        case "2":
            body.style.backgroundImage = backgroundImages[1];
            startOver.style.visibility = "visible";
            startBtn.style.visibility = "visible";
            goBtn.style.visibility = "hidden";
            break;
        case "3":
            body.style.backgroundImage = backgroundImages[2];
            startOver.style.visibility = "visible";
            startBtn.style.visibility = "visible";
            goBtn.style.visibility = "hidden";
            break;
        case "4":
            body.style.backgroundImage = backgroundImages[3];
            startOver.style.visibility = "visible";
            startBtn.style.visibility = "visible";
            goBtn.style.visibility = "hidden";
            break;
        case "5":
            body.style.backgroundImage = backgroundImages[3];
            startOver.style.visibility = "visible";
            startBtn.style.visibility = "visible";
            goBtn.style.visibility = "hidden";
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
            window.location.href = "./sections/Prat/Prat.html";
            break;
    }
};

function StartOver() {
    sessionStorage.setItem("sectionNum" , 0);
    body.style.backgroundImage = backgroundImages[0];
    startOver.style.visibility = "visible";
};
