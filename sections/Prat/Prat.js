

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

//Onload function
function Load() {
    
}
