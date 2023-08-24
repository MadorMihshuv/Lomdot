let startBtn;
let startPrishaBtn;
let body;
let firstTime;
let sectionsCount;
let startOver;

const backgroundImages = ['url("./assets/mainPage.png")','url("./assets/עמוד\ פתיחה\ סיום\ העסקה.png")', 'url("./assets/עמוד\ פתיחה\ טיפול\ בהיבטי\ הפרט.png")'];
const sectionHrefs = ['"./MainPage.html"' ,'"./sections/Prisha/Prisha.html"'];

window.onload = function() {
    Load();
    if(sessionStorage.getItem("visited") == '1') {
        startOver.style.visibility = "visible";
        SectionMap();
    }
    else {
        sessionStorage.setItem("sectionsCount" , 0);
    }
    sessionStorage.setItem("visited" , 1);
}

//Loads all the variables
function Load() {
    startBtn = document.getElementById("startBtn");
    startPrishaBtn = document.getElementById("startPrishaBtn");
    body = document.getElementById("body");
    startOver = document.getElementById("startOverBtn");
};

//Loads the section map
function SectionMap() {
    sectionsCount = sessionStorage.getItem("sectionsCount");
    body.style.backgroundImage = backgroundImages[sectionsCount];
    startPrishaBtn.style.visibility = "visible";
    startBtn.style.visibility = "hidden";
    sessionStorage.setItem("sectionsCount" , sectionsCount++);
};

//Loads the section page
function SectionPage() {
    window.location.href = "./sections/Prisha/Prisha.html";
};

function StartOver() {
    sessionStorage.setItem("sectionsCount" , 0);
    body.style.backgroundImage = backgroundImages[sectionsCount];
    startOver.style.visibility = "visible";
    window.location.href = "MainPage.html";
};
