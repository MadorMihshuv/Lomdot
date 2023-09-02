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
        sectionsCount = sessionStorage.getItem("sectionsCount");
        console.log(sectionsCount);
        sessionStorage.setItem("sectionsCount" , sectionsCount++);
        startOver.style.visibility = "visible";
        SectionMap();
    }
    else {
        sessionStorage.setItem("sectionsCount" , 1);
        sectionsCount = sessionStorage.getItem("sectionsCount");
        sessionStorage.setItem("visited" , 1);
    }
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

    body.style.backgroundImage = backgroundImages[sectionsCount];
    startPrishaBtn.style.visibility = "visible";
    startBtn.style.visibility = "hidden";
    sessionStorage.setItem("sectionsCount" , sectionsCount++);
};

//Loads the section page
function SectionPage() {
    switch(sectionsCount) {
        case 1:
            window.location.href = "./sections/Prisha/Prisha.html";
            break;
        case 2:
            window.location.href = "./sections/Prat/Prat.html";
            break;
        case 3:
            
            break;
    }
};

function StartOver() {
    sessionStorage.setItem("sectionsCount" , 0);
    body.style.backgroundImage = backgroundImages[0];
    startOver.style.visibility = "visible";
    window.location.href = "MainPage.html";
};
