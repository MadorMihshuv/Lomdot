let backBtn;
let nextBtn;

let blackBackground;
let body;

let pageNum;

let popUp1;
let popUp2;
let popUp3;
let popUpBtn1;
let popUpBtn2;
let popUpBtn3;

const visible = "visible";
const hidden = "hidden";

const imageBackrounds = ['url("/assets/Sok/דירוגי\ שכר.png")' ,'url("/assets/Sok/לימודים.png")','url("/assets/Sok/קידום\ בדרגות\ שכר.png")'];


//Onload function
window.onload = function() {
    Load();
    blackBackground.style.animation = "hideBackground 2s";
}

//Onload function
function Load() {
    pageNum = 0;
    body = document.getElementById("body");
    blackBackground = document.getElementById("blackBackground");

    backBtn = document.getElementById("backBtn");
    nextBtn = document.getElementById("nextBtn");
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    backBtn.style.visibility = "visible";
    if(pageNum !== 3){
        body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
    }
    else {
        sessionStorage.setItem("sectionNum" , 3);
        window.location.href = "/MainPage.html";
    }
}

//Goes back on the pages of the sections
function GoBack() {
    pageNum--;
    body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
    nextBtn.style.visibility = "visible";
}