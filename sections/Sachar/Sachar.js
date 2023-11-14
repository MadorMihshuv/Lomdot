let backBtn;
let nextBtn;
let continueBtn;

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

const imageBackrounds = ['url("/assets/Sachar/תוספות\ והסכמי\ שכר\ בלי\ כוכבים.png")' ,'url("/assets/Sachar/שעות\ העסקה.png")','url("/assets/Sachar/שעות\ נוספות.png")'];


//Onload function
window.onload = function() {
    Load();
    popUpBtn1.style.visibility = "visible";
    popUpBtn2.style.visibility = "visible";
    popUpBtn3.style.visibility = "visible";
    popUpBtn1.style.animation = "haasakaEffect 0.8s 0.5s forwards";
    popUpBtn2.style.animation = "haasakaEffect 0.8s 1.3s forwards";
    popUpBtn3.style.animation = "haasakaEffect 0.8s 2.1s forwards";
    setTimeout(() => {
        popUpBtn1.style.animation = "0";
        popUpBtn2.style.animation = "0";
        popUpBtn3.style.animation = "0";
    }, 3000);
    blackBackground.style.animation = "hideBackground 1.5s";
}

//Onload function
function Load() {
    pageNum = 0;
    body = document.getElementById("body");
    blackBackground = document.getElementById("blackBackground");

    backBtn = document.getElementById("backBtn");
    nextBtn = document.getElementById("nextBtn");
    continueBtn = document.getElementById("continueBtn");

    popUp1 = document.getElementById("popUp1");
    popUp2 = document.getElementById("popUp2");
    popUp3 = document.getElementById("popUp3");
    popUpBtn1 = document.getElementById("popUpBtn1");
    popUpBtn2 = document.getElementById("popUpBtn2");
    popUpBtn3 = document.getElementById("popUpBtn3");
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    backBtn.style.visibility = "visible";
    if(pageNum !== 3){
        body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
        switch(pageNum) {
            case 1:
                popUpBtn1.style.visibility = "hidden";
                popUpBtn2.style.visibility = "hidden";
                popUpBtn3.style.visibility = "hidden";

                break;
            case 2:
                continueBtn.style.visibility = "visible";
                nextBtn.style.visibility = "hidden";
                break;
            default:
                break;
        }
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
    switch(pageNum) {
        case 0:
            backBtn.style.visibility = "hidden";
            popUpBtn1.style.visibility = "hidden";
            popUpBtn2.style.visibility = "hidden";
            popUpBtn3.style.visibility = "hidden";
            break;
        case 1:
            popUpBtn1.style.visibility = "visible";
            popUpBtn2.style.visibility = "visible";
            popUpBtn3.style.visibility = "visible";
            break;
        case 4:
            continueBtn.style.visibility = "hidden";
            break;
        default:
            break;
    }
}

function PopUp1() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.85";
    popUp1.style.visibility = "visible";
    body.addEventListener("click" , ExitPopUp , true);
}

function PopUp2() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.85";
    popUp2.style.visibility = "visible";
    body.addEventListener("click" , ExitPopUp, true);
}

function PopUp3() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.85";
    popUp3.style.visibility = "visible";
    body.addEventListener("click" , ExitPopUp, true);
}

function ExitPopUp() {
    blackBackground.style.visibility = "hidden";
    popUp1.style.visibility = "hidden";
    popUp2.style.visibility = "hidden";
    popUp3.style.visibility = "hidden";
}