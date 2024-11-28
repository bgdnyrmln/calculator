// number adding to the screen
function appendnumber(number) {
    document.getElementById("screen").innerHTML += number;
}


// clear screen
function clearscreen() {
    document.getElementById("screen").innerHTML = "";
}


function calculate() {
    var screen = document.getElementById("screen").innerHTML;
    if (screen === "") return; // stops if the screen is empty

    var result = eval(screen); // calculating all the bells and whistles

    var newHistoryItem = document.createElement("div");
    newHistoryItem.className = "history"; 
    
    var historycontainer = document.getElementById("history-container");
    historycontainer.style.display = 'flex';
    historycontainer.style.padding = '1vh'; // some design correcting
    newHistoryItem.innerHTML = screen + " = " + result;  // making the history element

    var newHistoryButton = document.createElement("div");
    newHistoryButton.innerHTML = "AC";
    newHistoryButton.className = "button"; // creating ac button for every element

    var historyContainer = document.querySelector(".history-container");

    var historyclearbutton = document.createElement("div");
    historyclearbutton.innerHTML = "Clear";
    historyclearbutton.className = "button";
    historyclearbutton.style.width = "44vh";
    historyclearbutton.style.height = "5vh";

    historyclearbutton.addEventListener("click", function () {
        // Clear all children of the history container
        while (historyContainer.firstChild) {
            historyContainer.removeChild(historyContainer.firstChild);
        }
    
        // Reset styles for the history container
        historyContainer.style.padding = '0';
        historyContainer.style.display = 'none';
    });

    newHistoryButton.addEventListener("click", function() { // ac button for elements function
        newHistoryItem.remove(); 
        if (historyContainer.children.length === 1) {
            historyContainer.style.padding = '0'; // Reset padding
            historyContainer.style.display = 'none'; // hiding the history
        }
    }); 

    if (historyContainer.children.length === 0) {
        historyContainer.appendChild(historyclearbutton); // creates clear all button
    }

    // Append the new history item
    newHistoryItem.appendChild(newHistoryButton); // adds ac button to every history element
    historyContainer.appendChild(newHistoryItem); // adds the history element to screen

    document.getElementById("screen").innerHTML = result; // updates the screen
}



// operator adding to the screen
function add() {
    appendOperator("+");
}
function subtract() {
    appendOperator("-");
}
function multiply() {
    appendOperator("*");
}
function divide() {
    appendOperator("/");
}



// function to apped screen w operators
function appendOperator(operator) {
    var screen = document.getElementById("screen").innerHTML;
    if (screen === "" && operator != "-") {
        return; // stops if screen is empty and operator aint -
    } else if (isLastCharOperator(screen)){
        return; // stops if there is no ability to use the operator
    }
    document.getElementById("screen").innerHTML += operator;
}

// checks for ability to use operator
function isLastCharOperator(screen) {
    return ["+", "-", "*", "/"].includes(screen[screen.length - 1]);
}


// keybord functionality
function handleKeyboardInput(event) {
    const key = event.key;
    const screen = document.getElementById("screen");

    // check if the key is a number
    if (!isNaN(key)) {
        appendnumber(key);
    }
    // check if the key is an operator
    else if (["+", "-", "*", "/"].includes(key)) {
        appendOperator(key);
    }
    // handle the enter key for calculation
    else if (key === "Enter") {
        calculate();
    }
    // handle the backspace key for deleting the last character
    else if (key === "Backspace") {
        screen.innerHTML = screen.innerHTML.slice(0, -1);
    }
    // handle the escape key for clearing the screen
    else if (key === "Escape") {
        clearscreen();
    }
}

// attach the event listener to the document
document.addEventListener("keydown", handleKeyboardInput);
