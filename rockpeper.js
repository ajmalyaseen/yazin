// yasee

window.onload = () =>{

alert("hallo welcome i hope you like this.")

const round = document.querySelector(".round");
    const computerBox = document.querySelector(".computer-box"); 
 const myBox = document.querySelector(".my-box"); 
 const rockItem = document.querySelector(".rock-item"); 
 const paperItem = document.querySelector(".paper-item"); 
 const scissorsItem = document.querySelector(".scissors-item"); 
 const computerScore = document.querySelector(".computer-score"); 
 const myScore = document.querySelector(".my-score"); 
 const playButton = document.querySelector(".play"); 
 const optionsColumn = document.querySelector(".column"); 
 const winText = document.querySelector(".win-text"); 
 const result = document.querySelector(".result"); 
  
 let roundNumber = 1; 
 let computerCurrentScore = 0; 
 let myCurrentScore = 0; 
  
 function showHand(element, choice) { 
   if (choice == "R") { 
     element.innerText = "✊🏻"; 
   } else if (choice == "P") { 
     element.innerText = "🤚🏻"; 
   } else if (choice == "S") { 
     element.innerText = "✌🏻"; 
   } 
 } 
  
 function checkRoundWinner(myChoice) { 
   document.querySelectorAll(".box").forEach((eleBox) => 
     eleBox.addEventListener("animationend", function () { 
       eleBox.style.animation = ""; 
     }) 
   ); 
   roundNumber++; 
  
   const items = ["R", "P", "S"]; 
   result.style.display = "block"; 
   if (roundNumber < 10) { 
     round.innerText = `Round ${roundNumber}`; 
     const computerChoice = items[Math.ceil(Math.random() * items.length - 1)]; 
     showHand(computerBox, computerChoice); 
     showHand(myBox, myChoice); 
     if (computerChoice == myChoice) { 
       result.innerText = "DRAW"; 
       computerCurrentScore++; 
       myCurrentScore++; 
       computerScore.innerText = computerCurrentScore; 
       myScore.innerText = myCurrentScore; 
       result.style.color = "orange"; 
       result.innerText = "DRAW"; 
     } else if ( 
       (computerChoice == "R" && myChoice == "S") || 
       (computerChoice == "P" && myChoice == "R") || 
       (computerChoice == "S" && myChoice == "P") 
     ) { 
       computerCurrentScore++; 
       computerScore.innerText = computerCurrentScore; 
       result.innerText = "Computer WIN"; 
       result.style.color = "red"; 
       result.innerText = "Computer Win"; 
     } else if ( 
       (myChoice == "R" && computerChoice == "S") || 
       (myChoice == "P" && computerChoice == "R") || 
       (myChoice == "S" && computerChoice == "P") 
     ) { 
       myCurrentScore++; 
       myScore.innerText = myCurrentScore; 
       result.innerText = "YOU WIN"; 
       result.style.color = "green"; 
       result.innerText = "You Win"; 
     } 
   } else { 
     checkWinner(); 
   } 
 } 
  
 function checkWinner() { 
   if (computerCurrentScore > myCurrentScore) { 
     winText.style.display = "block"; 
     winText.innerText = "You Lose"; 
     winText.style.color = "red"; 
   } else if (computerCurrentScore < myCurrentScore) { 
     winText.style.display = "block"; 
     winText.innerText = "You Win"; 
     winText.style.color = "green"; 
   } else { 
     winText.style.display = "block"; 
     winText.innerText = "Draw"; 
     winText.style.color = "orange"; 
   } 
   playButton.style.display = "block"; 
   playButton.innerText = "Play Again"; 
   optionsColumn.style.display = "none"; 
 } 
  
 function animate() { 
   computerBox.innerText = "✊🏻"; 
   myBox.innerText = "✊🏻"; 
   computerBox.style.animation = `shakeComputerHand 2s ease`; 
   myBox.style.animation = `shakePlayerHand 2s ease-in-out`; 
 } 
  
 function resetValues() { 
   computerCurrentScore = 0; 
   myCurrentScore = 0; 
   roundNumber = 1; 
   computerScore.innerText = computerCurrentScore; 
   myScore.innerText = myCurrentScore; 
   round.innerText = `Round ${roundNumber}`; 
   showHand(computerBox, "R"); 
   showHand(myBox, "R"); 
   result.style.display = "none"; 
 } 
  
 rockItem.addEventListener("click", () => { 
   animate(); 
   setTimeout(() => { 
     checkRoundWinner("R"); 
   }, 10); 
 }); 
  
 paperItem.addEventListener("click", () => { 
   animate(); 
   setTimeout(() => { 
     checkRoundWinner("P"); 
   }, 10); 
 }); 
  
 scissorsItem.addEventListener("click", () => { 
   animate(); 
   setTimeout(() => { 
     checkRoundWinner("S"); 
   }, 10); 
 }); 
  
 playButton.addEventListener("click", () => { 
   resetValues(); 
   playButton.style.display = "none"; 
   optionsColumn.style.display = "flex"; 
   winText.style.display = "none"; 
 });
    
}