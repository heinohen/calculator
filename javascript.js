
//create page structure
const header = document.querySelector('#header');
const main = document.querySelector('#main');
const footer = document.querySelector('#footer');

//header
const headline = document.createElement('div');
headline.setAttribute('class', 'headline');
headline.setAttribute('id', 'headline');
const headerPara = document.createElement('p');
headerPara.setAttribute('class', 'headerPara');
headerPara.setAttribute('id', 'headerPara');
headerPara.textContent = "CALCUGATOR 30000";
headline.appendChild(headerPara);
header.appendChild(headline);

//main
const calculator = document.createElement('div');
calculator.setAttribute('class', 'calculator');
calculator.setAttribute('id', 'calculator');
main.appendChild(calculator)

//calculator frame
const calcNameDiv = document.createElement('div');
calcNameDiv.setAttribute('class', 'calcNameDiv');
calcNameDiv.setAttribute('id', 'calcNameDiv');

//calculator namefield "upper"
const calcNamePara = document.createElement('p');
const calcStylePara = document.createElement('p')
calcNamePara.setAttribute('class', 'calcNamePara');
calcNamePara.setAttribute('id', 'calcNamePara');
calcNamePara.textContent = "CALCUGATOR"
calcStylePara.setAttribute('class', 'calcStylePara');
calcStylePara.setAttribute('id', 'calcStylePara');
calcStylePara.textContent = "30000";
calcNameDiv.appendChild(calcNamePara);
calcNameDiv.appendChild(calcStylePara);

//calculator numberscreen
const calcNumberDiv = document.createElement('div')
calcNumberDiv.setAttribute('class', 'calcNumberDiv');
calcNumberDiv.setAttribute('id', 'calcNumberDiv');
const calcNumberScreen = document.createElement('form')
calcNumberScreen.setAttribute('class', 'calcNumberScreen')
calcNumberScreen.setAttribute('id', 'calcNumberScreen');

//calculator numberinput
let value = "0";
let operator = "";
const calcNumberInput = document.createElement('input');
calcNumberInput.setAttribute('class', 'calcNumberInput')
calcNumberInput.type = "text";
calcNumberInput.value = value;
calcNumberInput.disabled = true;
calcNumberScreen.appendChild(calcNumberInput);
calcNumberDiv.appendChild(calcNumberScreen);

//calculator buttons frame
const calcButtonsFrame = document.createElement('div');
calcButtonsFrame.setAttribute('class', 'buttonsFrameDiv');
calcButtonsFrame.setAttribute('id', 'buttonsFrameDiv');

//row 1
const button7 = document.createElement('button');
button7.textContent = "7";
const button8 = document.createElement('button');
button8.textContent = "8";
const button9 = document.createElement('button');
button9.textContent = "9";
const buttonC = document.createElement('button');
buttonC.textContent = "C";
const buttonPlusMinus = document.createElement('button');
buttonPlusMinus.textContent = "+/-";

const row1 = document.createElement('div');
row1.setAttribute('class', 'row1');
row1.setAttribute('id', 'row1');
row1.appendChild(button7);
row1.appendChild(button8);
row1.appendChild(button9);
row1.appendChild(buttonC);
row1.appendChild(buttonPlusMinus);

//row 2
const button4 = document.createElement('button');
button4.textContent = "4";
const button5 = document.createElement('button');
button5.textContent = "5";
const button6 = document.createElement('button');
button6.textContent = "6";
const buttonMultiply = document.createElement('button');
buttonMultiply.setAttribute('id','canClear');
buttonMultiply.textContent = "x";
const buttonDivide = document.createElement('button');
buttonDivide.setAttribute('id','canClear');
buttonDivide.textContent = "÷";
const row2 = document.createElement('div');
row2.setAttribute('class', 'row2');
row2.setAttribute('id', 'row2');
row2.appendChild(button4);
row2.appendChild(button5);
row2.appendChild(button6);
row2.appendChild(buttonMultiply);
row2.appendChild(buttonDivide);

//row 3
const button1 = document.createElement('button');
button1.textContent = "1";
const button2 = document.createElement('button');
button2.textContent = "2";
const button3 = document.createElement('button');
button3.textContent = "3";
const buttonPlus = document.createElement('button');
buttonPlus.setAttribute('id','canClear');
buttonPlus.textContent = "+";
const buttonMinus = document.createElement('button');
buttonMinus.setAttribute('id','canClear');
buttonMinus.textContent = "-";

const row3 = document.createElement('div');
row3.setAttribute('class', 'row3');
row3.setAttribute('id', 'row3');
row3.appendChild(button1);
row3.appendChild(button2);
row3.appendChild(button3);
row3.appendChild(buttonPlus);
row3.appendChild(buttonMinus);

//row 4
const button0 = document.createElement('button');
button0.textContent = "0";
const buttonComma = document.createElement('button');
buttonComma.textContent = ".";
const buttonCalculate = document.createElement('button');
buttonCalculate.textContent = "=";
buttonCalculate.setAttribute('class', 'calculate');
const row4 = document.createElement('div');
row4.setAttribute('class', 'row4');
row4.setAttribute('id', 'row4');
row4.appendChild(button0);
row4.appendChild(buttonComma);
row4.appendChild(buttonCalculate);

//rows to frame
calcButtonsFrame.appendChild(row1);
calcButtonsFrame.appendChild(row2);
calcButtonsFrame.appendChild(row3);
calcButtonsFrame.appendChild(row4);

//appends to calculator frame
calculator.appendChild(calcNameDiv);
calculator.appendChild(calcNumberDiv);
calculator.appendChild(calcNumberDiv);
calculator.appendChild(calcButtonsFrame);

//calc functionality 
let a;
let b;

//clear screen
function clearScreen() {
    clearButtons();
    enableButtons() 
    a = 0;
    b = 0;  
    value = "0";
    calcNumberInput.value = "0"; 
    buttonCalculate.disabled = false; 
}

//clear button colors
function clearButtons() {
    const cleared = document.querySelectorAll('#canClear');
    cleared.forEach((clearThis) => {
        clearThis.style.backgroundColor = "white";
    });
}

//enable operator buttons 
function enableButtons() {
    const cleared = document.querySelectorAll('#canClear');
    cleared.forEach((clearThis) => {
        clearThis.disabled = false;
    });
}

//disable operator buttons
function disableButtons() {
    const cleared = document.querySelectorAll('#canClear');
    cleared.forEach((clearThis) => {
        clearThis.disabled = true;
    });
}

function checkIfOverflow() {
    if (value.toString().length >= 16) {
        calcNumberInput.value = "OVERFLOW";
        buttonCalculate.disabled = true;
        return true;
    }
    return false;
}



//add number on right side of last
function appendScreen(number) {
    if (value.length >= 16) {
        calcNumberInput.value = "OVERFLOW"
        return;
    }
    if (value == "0") {
        value = number;
        calcNumberInput.value = number;
    } else if (value == "-0") {
        let minus = "-";
        minus = minus.concat("",value.slice(1));
        value = minus;
        calcNumberInput.value = value; 
    } else {
        value = value.concat("",number);
        calcNumberInput.value = value;
    }
        
}


//change positive or negative
function changePositive() {
    if (value.charAt(0) == "-") {
        value = value.slice(1);
        calcNumberInput.value = value;
    } else {
        let minus = "-";
        minus = minus.concat("",value);
        value = minus;
        calcNumberInput.value = value;

    }
}

//add comma after number
function addComma() {
    if (value.indexOf(".") != -1) {
        return;
    }
    if (value.length >= 16) {
        calcNumberInput.value = "OVERFLOW"
        return;
    }
    value = value.concat("", ".");
    calcNumberInput.value = value;
}




//press of multiply button
function multiply() {
    disableButtons();
    buttonMultiply.style.backgroundColor = "green";
    operator = "*";
    a = parseInt(value);
    value = "";
    calcNumberInput.value = value;
}

//press of plus button
function plus() {
    disableButtons();
    buttonPlus.style.backgroundColor = "yellow";
    operator = "+";
    a = parseInt(value);
    value = "";
    calcNumberInput.value = value;
}

//press of divide button
function divide() {
    disableButtons();
    buttonDivide.style.backgroundColor = "cyan";
    operator = "/";
    a = parseInt(value);
    value = "";
    calcNumberInput.value = value;

}

//press of minus button
function minus() {
    disableButtons();
    buttonMinus.style.backgroundColor = "pink";
    operator = "-";
    a = parseInt(value);
    value = "";
    calcNumberInput.value = value;

}

//press of compute button
function executeOperation() {
    b = parseInt(value);
    clearButtons();
    enableButtons()

    switch(operator) {
        case "+":
            value = a + b;
            if (checkIfOverflow()) {
                return;
            }
            calcNumberInput.value = value.toString();
            break;
        case "*":
            value = Math.round(parseFloat(a * b));
            if (checkIfOverflow()) {
                return;
            }
            calcNumberInput.value = value.toString();
            break;
        case "-":
            value = Math.round(parseFloat(a - b));
            if (checkIfOverflow()) {
                return;
            }
            calcNumberInput.value = value.toString();
            break;
        case "/":
            if (a == 0 || b == 0) {
                calcNumberInput.value = "Cannot / by zero";
                disableButtons();
                return;
            }
            value = Math.round(parseFloat(a / b));
            if (checkIfOverflow()) {
                return;
            }
            calcNumberInput.value = value.toString();
            break;
        
    }
    
}


buttonC.onclick = () => clearScreen()
button7.onclick = () => appendScreen("7")
button8.onclick = () => appendScreen("8")
button9.onclick = () => appendScreen("9")
button4.onclick = () => appendScreen("4")
button5.onclick = () => appendScreen("5")
button6.onclick = () => appendScreen("6")
button1.onclick = () => appendScreen("1")
button2.onclick = () => appendScreen("2")
button3.onclick = () => appendScreen("3")
button0.onclick = () => appendScreen("0")
buttonComma.onclick = () => addComma()
buttonCalculate.onclick = () => executeOperation()
buttonPlusMinus.onclick = () => changePositive()
buttonMultiply.onclick = () => multiply()
buttonDivide.onclick = () => divide()
buttonPlus.onclick = () => plus()
buttonMinus.onclick = () => minus()

















//footer
const footerLegal = document.createElement('p');
footerLegal.setAttribute('class', 'footerPara');
footerLegal.textContent = "(C) heinohen 2022";

const footerGit = document.createElement('a');
footerGit.setAttribute('id', 'gitLink');
const footerImg = document.createElement('img');
footerImg.src = "./images/GitHub-Mark-32px.png";
footerImg.alt = "github picture";
footerGit.href = "https://github.com/heinohen";
footerGit.appendChild(footerImg);

footer.appendChild(footerLegal);
footer.appendChild(footerGit);