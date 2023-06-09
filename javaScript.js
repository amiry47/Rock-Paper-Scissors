"use strict";

const computerChoiceDisplay =document.querySelector("#computer-choice");
const yourChoiceDisplay =document.querySelector("#your-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll(".user-choice");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener("click", (e)=>{
        userChoice = e.target.id;
        yourChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult ();
        
    
    })
})

const generateComputerChoice = function (){
    const randomNumber = Math.trunc(Math.random(  )*3+1);
   if(randomNumber === 1){
    computerChoice = "Rock 🗿";
   }
   else if (randomNumber === 2 ){
    computerChoice = "Scissors ✂"
   }
   else{
    computerChoice = "Paper 📃"
   }
   computerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = function (){
    if(computerChoice === userChoice){
        result = "Draw";
    }
    else if (computerChoice ==='Scissors ✂' && userChoice === "Paper 📃"){
        result = "Computer Wins"
    }
    else if (computerChoice ==='Paper 📃' && userChoice === "Scissors ✂"){
        result = "You Win"
    }


    else if (computerChoice ==='Rock 🗿' && userChoice === "Paper 📃"){
        result = "You Win"
    }
    else if (computerChoice ==='Paper 📃' && userChoice === "Rock 🗿"){
        result = "Computer Wins"
    }


    else if (computerChoice ==='Scissors ✂' && userChoice === "Rock 🗿"){
        result = "You Win"
    }
    else if (computerChoice ==='Rock 🗿' && userChoice === "Scissors ✂"){
        result = "Computer Wins"
    }

    resultDisplay.innerHTML =result;
    
    

}









