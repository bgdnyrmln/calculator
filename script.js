function appendnumber(number) {
    document.getElementById("screen").innerHTML += number;
}

function clearscreen() {
    document.getElementById("screen").innerHTML = "";
}


function calculate() {
    var screen = document.getElementById("screen").innerHTML;
    if (screen === "") return; 
    var result = eval(screen); 

    var newHistoryItem = document.createElement("div");
    newHistoryItem.className = "history"; 
    newHistoryItem.innerHTML = screen + " = " + result; 

    var newHistoryButton = document.createElement("div");
    newHistoryButton.innerHTML = "AC";
    newHistoryButton.className = "button";
    
    newHistoryButton.addEventListener("click", function() {
        newHistoryItem.remove(); 
    });

    newHistoryItem.appendChild(newHistoryButton);
    var historyContainer = document.querySelector(".history-container");
    historyContainer.appendChild(newHistoryItem);

    document.getElementById("screen").innerHTML = result;
}


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

// Общая функция для добавления оператора
function appendOperator(operator) {
    var screen = document.getElementById("screen").innerHTML;
    if (screen === "" || isLastCharOperator(screen)) {
        return; // Прерываем, если экран пуст или последний символ оператор
    }
    document.getElementById("screen").innerHTML += operator;
}

// Проверка: является ли последний символ оператором
function isLastCharOperator(screen) {
    return ["+", "-", "*", "/"].includes(screen[screen.length - 1]);
}
