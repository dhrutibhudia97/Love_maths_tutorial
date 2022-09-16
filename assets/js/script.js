//Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
//when button is clicked, code inside code block will run.
// if statement... "this" refers to button that was just clicked. then we call its getAttribute
//back quotes (``) are template literals
//${game-type} tells user what game type was clicked.
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    //want the default game to addition to be running when page loads
    runGame("addition");
})
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
// the parameter of the funGame function is gameType
//First we pass the gameType into the function as an argument
function runGame(gameType) {
    //Creates two random numbers between 1 and 25
    // worked this on on dev tools under console tab, want a number between 1 and 25 and Maths.floor rounds numbers down to closest integer, so we add one to answer so zero is not included. and so 25 is.
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    
//Second we check if gameType parameter is equal to addition, then it will display addiiton question, otherwise it will show an error.
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}


function checkAnswer() {

}

function calculateCorrectAnswer(){

}

function incrementScore() {

}

function incrementWrongAnswer(){

}
//setting its text content to our number, refers back to id's in html
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}


