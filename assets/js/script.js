document.addEventListener("DOMContentLoaded", function(){
    let buttons  = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") == 'submit'){

            }
        });
    }
});
/** 
 * The main game (loop), called after script load and after user answers processed.
 *  */
function runGame(){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}
function checkAnswer(){
    
}
function calculateCorrectAnswer(){
    
}
function incrementScore(){
    
}
function incrementWrongAnswer(){
    
}
function displayAdditionQuestion(){
    
}
function displaySubtractQuestion(){
    
}
function displayMultiplyQuestion(){
    
}
function displayDivisionQuestion(){
    
}