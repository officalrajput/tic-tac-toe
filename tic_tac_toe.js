console.log("Welcome to my game");
let turnAudio = new Audio("ting.mp3");
let gameOverAudio = new Audio("gameover.mp3");
let musicAudio = new Audio("music.mp3");
let turn = "X";
isGameOver=false;

//function for changing the turn
function changingTurn() {
//   return turn === "X" ? "0" : "X";

 if(turn === "X")
 {
    return "0";
 }
 else{
    return "X"
 }

}

//function for winning the game
function winningGameCheck() {
let boxText=document.getElementsByClassName("box-text");
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(function(element){
        if(boxText[element[0]].innerText===boxText[element[1]].innerText && boxText[element[1]].innerText===boxText[element[2]].innerText && boxText[element[0]].innerText !=="" )
        {
            document.querySelector(".change-Text").innerText= boxText[element[0]].innerText + " is Won"
            isGameOver=true;
            document.querySelector(".winner-image").getElementsByTagName("img")[0].style.visibility ="visible";
            gameOverAudio.play();
            
            document.querySelector(".line").style.width="20vw"
            document.querySelector(".line").style.transform=`translate(${element[3]}vw, ${element[4]}vw) rotate(${element[5]}deg)`
            turn=" ";
            turnAudio.pause();
            musicAudio.pause();
        }
    })
}

// Game logic
// musicAudio.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(function (element) {
  let spanBoxText = element.querySelector(".box-text");
  element.addEventListener("click", function () {
    // console.log("heloo");
    if (spanBoxText.innerText === "") {
      spanBoxText.innerText = turn;
      turn = changingTurn();
      turnAudio.play();
      winningGameCheck();
      if(!isGameOver){
     document.querySelector(".change-Text").innerText = `Now Turn For ${turn}`;
      }
    }
  });
});


//reset the game logic

let resetButton=document.getElementById("reset");

resetButton.addEventListener('click',function()
{
    let spanBoxText = document.querySelectorAll(".box-text");
    Array.from(spanBoxText).forEach(function (element) {
      element.innerText=" "
    })
    document.querySelector(".winner-image").getElementsByTagName("img")[0].style.visibility ="hidden";
    turn="X";
    isGameOver=false;
    document.querySelector(".change-Text").innerText = `Now Turn For ${turn}`;
 document.querySelector(".line").style.width="0"

})
