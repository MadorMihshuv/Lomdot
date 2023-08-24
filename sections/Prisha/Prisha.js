let thailandMan;
let thailandPopUp;
let body;
let arrows;
let arrowsResignation;
let blackBackground;
let firstSpeechBubble;

let tivitBtn;
let mukdemetBtn;
let disabilityBtn;
let resignationBtn;
let dismissalBtn;
let dismissalBtn2;

let allDismissalButtons;
let dismissalBtnPopUp1;
let dismissalBtnPopUp2;
let dismissalBtnPopUp3;
let dismissalBtnPopUp4;
let shimuaPopUp;
let protokolPopUp;
let decisionPopUp;
let lawPopUp;
let backBtn;
let kodem;

let check1;
let check2;
let check3;
let check4;
let check5;

let ifChecked = [false , false, false, false, false];

let sectionsCount = 0;
const imageBackrounds = ['url("/assets/פרישה\ טבעית.png")','url("/assets/פרישה\ מוקדמת.png")','url("/assets/פרישת\ נכות.png")', 'url("/assets/התפטרות\ מרצון.png")', 'url("/assets/פיטורים\ 1.png")', 'url("/assets/פיטורים\ 2.png")'];


//Onload function
window.onload = function() {
    Load();
    DisableAndEnableButtons(true);
    blackBackground.style.animation = "hideBackground 2s";
    setTimeout(() => {
        DisableAndEnableButtons(false);
    blackBackground.style.visibility = "hidden";

    }, 2200);
}


//Disables or enables main buttons
function DisableAndEnableButtons(isTrue) {
    tivitBtn.disabled = isTrue;
    mukdemetBtn.disabled = isTrue;
    disabilityBtn.disabled = isTrue;
    resignationBtn.disabled = isTrue;
    dismissalBtn.disabled = isTrue;
};

//Loads all the variables
function Load(){
    tivitBtn = document.getElementById("tivit");
    mukdemetBtn = document.getElementById("mukdemet");
    disabilityBtn = document.getElementById("disability");
    resignationBtn = document.getElementById("resignation");
    dismissalBtn = document.getElementById("dismissal");

    dismissalBtn2 = document.getElementById("dismissal2");
    allDismissalButtons = document.getElementById("allDismissalButtons");
    dismissalBtnPopUp1 = document.getElementById("dismissalBtnPopUp1");
    dismissalBtnPopUp2 = document.getElementById("dismissalBtnPopUp2");
    dismissalBtnPopUp3 = document.getElementById("dismissalBtnPopUp3");
    dismissalBtnPopUp4 = document.getElementById("dismissalBtnPopUp4");
    shimuaPopUp = document.getElementById("shimua");
    decisionPopUp = document.getElementById("decision");
    protokolPopUp = document.getElementById("protokol");
    lawPopUp = document.getElementById("law");

    check1 = document.getElementById("check1");
    check2 = document.getElementById("check2");
    check3 = document.getElementById("check3");
    check4 = document.getElementById("check4");
    check5 = document.getElementById("check5");

    backBtn = document.getElementById("back");
    kodem = document.getElementById("kodem");
    thailandMan = document.getElementById("thailandMan");
    thailandPopUp = document.getElementById("thailandPopUp");
    body = document.getElementById("body");
    arrows = document.getElementById("arrows");
    arrowsResignation = document.getElementById("arrowsResignation");
    blackBackground = document.getElementById("blackBackground");
    firstSpeechBubble = document.getElementById("firstSpeechBubble");
};

//What happens every time we enter a new page
function NextPage() {
    firstSpeechBubble.style.visibility = "hidden";
    tivitBtn.style.visibility = "hidden";
    backBtn.style.visibility = "visible";
    sectionsCount++;
    HideMainButtonsAndCheckes();
};

//What happens every time we enter a new page
function GoBack() {
    body.style.backgroundImage = 'url("/assets/סוגי\ סיום\ העסקה.png")';
    backBtn.style.visibility = "hidden";
    kodem.style.visibility = "hidden";
    thailandMan.style.visibility = "hidden";
    thailandPopUp.style.visibility = "hidden";
    arrows.style.visibility = "hidden";
    arrowsResignation.style.visibility = "hidden";
    dismissalBtnPopUp1.style.visibility = "hidden";
    dismissalBtnPopUp2.style.visibility = "hidden";
    dismissalBtnPopUp3.style.visibility = "hidden";
    dismissalBtnPopUp4.style.visibility = "hidden";
    allDismissalButtons.style.visibility = "hidden";
    ShowMainButtonsAndCheckes();
    CheckWhatFinished();


    //check last page before moving a section
    if(ifChecked[0] && ifChecked[1] && ifChecked[2] && ifChecked[3] && ifChecked[4]) {
        window.location.href = "/MainPage.html";
    }
}

function backBtnFunc() {
    DismissalPage();
    allDismissalButtons.style.visibility = "hidden";
    dismissalBtnPopUp1.style.visibility = "hidden";
    dismissalBtnPopUp2.style.visibility = "hidden";
    dismissalBtnPopUp3.style.visibility = "hidden";
    dismissalBtnPopUp4.style.visibility = "hidden";
}

//Checks which chapters are done
function CheckWhatFinished() {
    if(ifChecked[0]) {
        check1.style.visibility = "visible";
    }
    if(ifChecked[1]) {
        check2.style.visibility = "visible";
    }
    if(ifChecked[2]) {
        check3.style.visibility = "visible";
    }
    if(ifChecked[3]) {
        check4.style.visibility = "visible";
    }
    if(ifChecked[4]) {
        check5.style.visibility = "visible";
    }
}

//Hide all the buttons of the main part
function HideMainButtonsAndCheckes() {
    tivitBtn.style.visibility = "hidden";
    mukdemetBtn.style.visibility = "hidden";
    disabilityBtn.style.visibility = "hidden";
    resignationBtn.style.visibility = "hidden";
    dismissalBtn.style.visibility = "hidden";
    dismissalBtn2.style.visibility = "hidden";

    check1.style.visibility = "hidden";
    check2.style.visibility = "hidden";
    check3.style.visibility = "hidden";
    check4.style.visibility = "hidden";
    check5.style.visibility = "hidden";
}

//Show all the buttons of the main part
function ShowMainButtonsAndCheckes() {
    tivitBtn.style.visibility = "visible";
    mukdemetBtn.style.visibility = "visible";
    disabilityBtn.style.visibility = "visible";
    resignationBtn.style.visibility = "visible";
    dismissalBtn.style.visibility = "visible";
}

//Loads the Prisha Tivit Chapter
function TivitPage() {
    NextPage();
    body.style.backgroundImage = `${imageBackrounds[0]}`;
    ifChecked[0] = true;
    thailandMan.style.visibility = "visible";
    thailandMan.style.animation = "thailandManCome 2.5s forwards";
    thailandPopUp.style.animation = "thailandPopUp 3.5s 1.5s forwards";
    thailandPopUp.style.visibility = "visible";
}

//Loads the Prisha Tivit Chapter
function MukdemetPage() {
    NextPage();
    arrows.style.animation = "arrowsTransition 3s forwards alternate";
    arrows.style.visibility = "visible";
    body.style.backgroundImage = `${imageBackrounds[1]}`;
    ifChecked[1] = true;
}

//Loads the Prisha Disability Chapter
function DisabilityPage() {
    NextPage();
    body.style.backgroundImage = `${imageBackrounds[2]}`;
    ifChecked[2] = true;
}

//Loads the Prisha Dismissal Chapter
function DismissalPage() {
    NextPage();
    backBtn.style.visibility = "hidden";
    kodem.style.visibility = "hidden";
    dismissalBtn2.style.visibility = "visible";
    body.style.backgroundImage = `${imageBackrounds[4]}`;
}

//Loads the Prisha second Dismissal page
function DismissalSecondPage() {
    NextPage();
    kodem.style.visibility = "visible";
    allDismissalButtons.style.visibility = "visible";
    dismissalBtnPopUp1.style.visibility = "visible";
    dismissalBtnPopUp2.style.visibility = "visible";
    dismissalBtnPopUp3.style.visibility = "visible";
    dismissalBtnPopUp4.style.visibility = "visible";
    body.style.backgroundImage = `${imageBackrounds[5]}`;
    ifChecked[3] = true;
}

//Loads the Prisha Resignation Chapter
function ResignationPage() {
    NextPage();
    arrowsResignation.style.animation = "arrowsTransition 3s forwards alternate";
    arrowsResignation.style.visibility = "visible";
    body.style.backgroundImage = `${imageBackrounds[3]}`;
    ifChecked[4] = true;
}

function ShimuaPopUp() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.8";
    shimuaPopUp.style.visibility = "visible";
    body.addEventListener('click', HidePopUp, true);
}

function ProtokolPopUp() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.8";
    protokolPopUp.style.visibility = "visible";
    body.addEventListener('click', HidePopUp, true);
}

function DecisionPopUp() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.8";
    decisionPopUp.style.visibility = "visible";
    body.addEventListener('click', HidePopUp, true);
}

function LawPopUp() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.8";
    lawPopUp.style.visibility = "visible";
    body.addEventListener('click', HidePopUp, true);
}

function HidePopUp() {
    blackBackground.style.visibility = "hidden";
    shimuaPopUp.style.visibility = "hidden";
    decisionPopUp.style.visibility = "hidden";
    protokolPopUp.style.visibility = "hidden";
    lawPopUp.style.visibility = "hidden";
}