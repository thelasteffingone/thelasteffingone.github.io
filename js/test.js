let checkButtonState = () => {
    let buttonPressed = 0;
    switch (button) {
        case 0: document.getElementById("buttonTest").innerHTML = "I am unchanged.";
            buttonPressed = 1;
            break;
        case 1: document.getElementById("buttonTest").innerHTML = "You done it!";
            buttonPressed = 0;
            break; 
        default: document.getElementById("buttonTest").innerHTML = "What happened?";
            break;
    } 
    
}