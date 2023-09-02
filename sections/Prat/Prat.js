let backBtn;
let nextBtn;
let returnBtn;

let blackBackground;
let body;
let submarine;
let submarineLight;

let bubble1;
let bubble2;
let bubble3;
let bubble4;

let pageNum;

let boyPearl;
let girlPearl;

let visible = "visible";
let hidden = "hidden";

const imageBackrounds = ['url("/assets/Prat/אינדיקציות\ שנתיות.png")' ,'url("/assets/Prat/ימי\ השתלמות\ בשכר.png")','url("/assets/Prat/היתר\ עבודה\ פרטית\ בלי\ בועות.png")', 'url("/assets/Prat/זכויות\ בחופשתת\ לידה.png")', 'url("/assets/Prat/חלת\ לאחר\ חלד.png")', 'url("/assets/Prat/זכויות\ הורה.png")', 'url("/assets/Prat/אחזקת\ רכב\ בלי\ צוללת.png")', 'url("/assets/Prat/זמן\ נסיעה\ 2.png")', 'url("/assets/Prat/רכב\ שירות.png")', 'url("/assets/Prat/הלוואות.png")'];


//Onload function
window.onload = function() {
    Load();
    blackBackground.style.animation = "hideBackground 2s";
}

//Onload function
function Load() {
    pageNum = 0;
    body = document.getElementById("body");
    submarine = document.getElementById("submarine");
    submarineLight = document.getElementById("submarineLight");

    backBtn = document.getElementById("backBtn");
    nextBtn = document.getElementById("nextBtn");
    returnBtn = document.getElementById("returnBtn");
    blackBackground = document.getElementById("blackBackground");

    bubble1 = document.getElementById("bubble1");
    bubble2 = document.getElementById("bubble2");
    bubble3 = document.getElementById("bubble3");
    bubble4 = document.getElementById("bubble4");

    boyPearl = document.getElementById("boyPearl");
    girlPearl = document.getElementById("girlPearl");
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
    backBtn.style.visibility = "visible";
    switch(pageNum) {
        case 2:
            HideOrShowBubbles(visible);
            break;
        case 3:
            HideOrShowBubbles(hidden);
            boyPearl.style.visibility = "visible";
            girlPearl.style.visibility = "visible";
            break;
        case 4:
            boyPearl.style.visibility = "hidden";
            girlPearl.style.visibility = "hidden";
            break;
        case 6:
            blackBackground.style.visibility = "visible";
            blackBackground.style.opacity = "0.8";
            blackBackground.style.animation = "lightUp 2.5s forwards";
            submarine.style.visibility = "visible";
            submarineLight.style.visibility = "visible";
            submarine.style.animation = "submarineComeIn 2s forwards";
            submarineLight.style.animation = "showLight 1.5s 1.5s forwards";
            break;
        case 7:
            submarine.style.visibility = "hidden";
            submarineLight.style.visibility = "hidden";
            break;
        case 9:
            nextBtn.style.visibility = "hidden";
            break;
        default:
            break;
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
            break;
        case 1:
            HideOrShowBubbles(hidden);
            break;
        case 2:
            HideOrShowBubbles(visible);
            boyPearl.style.visibility = "hidden";
            girlPearl.style.visibility = "hidden";
            break;
        case 3:
            boyPearl.style.visibility = "visible";
            girlPearl.style.visibility = "visible";
            break;
        case 5:
            submarine.style.visibility = "hidden";
            submarineLight.style.visibility = "hidden";
            break;
        case 6:
            submarine.style.visibility = "visible";
            submarineLight.style.visibility = "visible";
            break;
        default:
            break;
    }
}

function HideOrShowBubbles(hideOrShow) {
    bubble1.style.visibility = `${hideOrShow}`;
    bubble2.style.visibility = `${hideOrShow}`;
    bubble3.style.visibility = `${hideOrShow}`;
    bubble4.style.visibility = `${hideOrShow}`;
}

function zhuyotOvedPage() {
    body.style.backgroundImage = 'url("/assets/Prat/זכויות\ העובד.png")';
    boyPearl.style.visibility = "hidden";
    girlPearl.style.visibility = "hidden";
    returnBtn.style.visibility = "visible";
    nextBtn.style.visibility = "hidden";
    backBtn.style.visibility = "hidden";
}

function zhuyotOvedetPage() {
    body.style.backgroundImage = 'url("/assets/Prat/זכויות\ העובדות.png")';
    girlPearl.style.visibility = "hidden";
    boyPearl.style.visibility = "hidden";
    returnBtn.style.visibility = "visible";
    nextBtn.style.visibility = "hidden";
    backBtn.style.visibility = "hidden";
}


function ReturnBack() {
    body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
    returnBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "visible";
    backBtn.style.visibility = "visible";
    girlPearl.style.visibility = "visible";
    boyPearl.style.visibility = "visible";
}