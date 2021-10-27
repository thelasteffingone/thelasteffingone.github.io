function buttonPress() {
        const pressed = 0;
        switch (pressed) {
            case 0: document.getElementById("buttonTest").innerHTML = "I am unchanged.";
                pressed = 1;
                break;
            case 1: document.getElementById("buttonTest").innerHTML = "You done it!";
                pressed = 0;
                break; 
            default: document.getElementById("buttonTest").innerHTML = "What happened?";
                break;
        
    }
};