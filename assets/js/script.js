document.addEventListener("DOMContentLoaded", function(){
    let buttons  = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") == 'submit'){
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});
/** 
 * The main game (loop), called after script load and after user answers processed.
 *  */
function runGame(gameType){
    // Create two numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if(gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    }
}
/**
 * Check the user's answer against the correct answer
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect){
        alert("Hey! you got it right :D");
    } else {
        alert(`Awww.... your answered ${userAnswer} the correct answer was ${calculatedAnswer[0]}`);
    }

    runGame(calculatedAnswer[1]);
}
/**
 * Get operands and operator from the dom and calculate the answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    
    if (operator === '+'){
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting!`;
    }
}
function incrementScore(){
    
}
function incrementWrongAnswer(){
    
}
function displayAdditionQuestion(operand1, operand2){
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
    
}
function displaySubtractQuestion(){
    
}
function displayMultiplyQuestion(){
    
}
function displayDivisionQuestion(){
    
}