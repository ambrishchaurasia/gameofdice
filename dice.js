var a1;
var a2;
function rollDice1() {
    // Generate a random number between 1 and 6
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    

    // Select the image element
    document.querySelector(".img1").setAttribute("src",`./images/dice${diceNumber}.png`);
    return diceNumber;
  
}

function rollDice2() {
    // Generate a random number between 1 and 6
    const diceNumber = Math.floor(Math.random() * 6) + 1;
    
    document.querySelector(".img2").setAttribute("src",`./images/dice${diceNumber}.png`);
    return diceNumber;
}
a1=rollDice1();
a2=rollDice2();
if(a1<a2){
    document.querySelector("h1").innerHTML = " <strong>Player 2 Wins!</strong>";
}
else if(a1>a2){
    document.querySelector("h1").innerHTML = " <strong>Player 1 Wins!</strong>";
}
else{
    document.querySelector("h1").innerHTML = " <strong>Both Wins!</strong>";
}
