let backBtn;
let nextBtn;
let continueBtn;

let blackBackground;
let body;

let pageNum;

let ice1;
let ice2;
let ice3;
let handOfSnowman;

const visible = "visible";
const hidden = "hidden";

const imageBackrounds = ['url("/assets/Os/השירות\ הסוציאלי.png")' ,'url("/assets/Os/עוסיות.png")','url("/assets/Os/ימי\ מחלה\ חריגים.png")', 'url("/assets/Os/קרן\ סיוע\ כלכלית.png")' , 'url("/assets/Os/הורים\ לילדים\ עם\ מוגבלות.png")'];


//Onload function
window.onload = function() {
    Load();
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
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    backBtn.style.visibility = "visible";
    if(pageNum !== 5){
        body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
        switch(pageNum) {
            case 1:
                break;
            case 2:
                break;
            case 4:
                continueBtn.style.visibility = "visible";
                nextBtn.style.visibility = "hidden";
                break;
            default:
                break;
        }
    }
    else {
        sessionStorage.setItem("sectionNum" , 7);
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
            break;
        case 1:
            break;
        case 3:
            continueBtn.style.visibility = "hidden";
            break;
        default:
            break;
    }
}