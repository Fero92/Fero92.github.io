// základné premenne//

var totalScore, roundScore, activePlayer, dice;

newStart();




function newStart(){
    totalScore = [0,0];
    roundScore = 0;
    activePlayer = 0;
    playGame = true;

    //Nulovanie//

    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    //skrytie kocky
    document.querySelector(".diceImg").style.display = "none";

    // texty v pôvodnom stave
    document.querySelector("#name-0" +activePlayer).textContent = "Skóre 1. hráča";
    document.querySelector("#name-1" +activePlayer).textContent = "Skóre 2. hráča";

    //vratenie zvýraznenia aktivného hráča k prvému a u druhého to zmizne
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");
}

document.querySelector(".newGame").addEventListener("click", newStart);





document.querySelector(".rollDice").addEventListener("click", function(){
    if(playGame) {
        //generovanie náhodných čísiel
    var dice = Math.ceil(Math.random()*6);
    
    //k číslu zobrazí správy obrázok
    var diceElement = document.querySelector(".diceImg");
    diceElement.style.display = "block";
    console.log(diceElement.src = "img/" + dice + ".jpg");

    //Sčítanie čísiel z kocky
    if (dice !==1){
        roundScore = roundScore + dice;
        document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();

     }
    }


    
});


function nextPlayer(){
    if(activePlayer ===0) {
        activePlayer = 1;
    } else  {
        activePlayer = 0;
    }

    roundScore = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    document.querySelector(".diceImg").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");

}

document.querySelector(".holdScore").addEventListener ("click", function(){

    if(playGame){
        // celkové skore sa vyplní súčasným skóre
    totalScore[activePlayer] = totalScore[activePlayer] + roundScore;

    // 
    document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];
    if(totalScore[activePlayer] >= 20){
        document.querySelector("#name-" +activePlayer).textContent = "Víťaz";
        document.querySelector(".diceImg").style.display = "none";
    } else {
        nextPlayer();
        }
    }
    
});