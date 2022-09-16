//Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
//when button is clicked, code inside code block will run.
// if statement... "this" refers to button that was just clicked. 
//then we call its getAttribute
//back quotes (``) are template literals
//${game-type} tells user what game type was clicked.
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
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
    // worked this on on dev tools under console tab,
    // want a number between 1 and 25 and Maths.floor rounds numbers down 
    //to closest integer, so we add one to answer so zero is not included.
    // and so 25 is.
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    
//Second we check if gameType parameter is equal to addition, 
//then it will display addiiton question, otherwise it will show an error.
//checking the gameType
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Check the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
//we are going to target our answer box becayse we need to get a value from it.
//we are going to take the value out of "answer-box" and store it in our
//userAnswer variable
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
//we check the answer we receive from the DOM, we compare it to correct answer we 
//get from the calculatedCorrectAnswer, it its true we congratulate user.
    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);


}

/**Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom and returns the correct number.
 */
//the first part is just getting the values back from the DOM. 
//We are using the parseInt function to make sure we treat value as an integer.
//by default when js returns data it returns as a string (we need it to be a number)
//hence we are using parseInt
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;
//if we dont recognise the operator, we will alert the user and throw an error.
//the first part of the statement then checks the operator, if its  + sign it will 
//calculate the correct answer
//our function will have got the value on num1 and stored in in operand1, same with
//num2 and + sign stored in operator.
//then it will return an array with 2 elements [element1, element2].
//element1 will correct correct answer operand1+operand2, 
//element2 will be gameType we want to run next, which will be an addition game.
//changed calculate correct answer depending on the operator.
    if(operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    }
        else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}
/**
 * Gets the current score from the DOM and increments it by 1
 */
//values are going to be stored under "score-area"
//++ put before variable so js can get the ID of score then set the innet text to
//one + old score.
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer(){  
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}


//setting its text content to our number, refers back to id's in html
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}
//condition goes before question mark, is operand one bigger than operand 1, 
//if so return operand 1. if not return operand 2.
// condition? true part : false part;
function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";

}

//displaying the question function
function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}


