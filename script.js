function appendnumber(number) {
    document.getElementById("screen").innerHTML += number;
}

function clearscreen() {
    document.getElementById("screen").innerHTML = "";
}

function calculate() {
    var screen = document.getElementById("screen").innerHTML;
    var history = screen;
    var result = eval(screen);
    history += "=" + result;
    document.getElementById("screen").innerHTML = result;
    document.getElementById("history").innerHTML += '\n' + history;
}

function add() {
    document.getElementById("screen").innerHTML += "+";
}

function subtract() {
    document.getElementById("screen").innerHTML += "-";
}

function multiply() {
    document.getElementById("screen").innerHTML += "*";
}

function divide() {
    document.getElementById("screen").innerHTML += "/";
}