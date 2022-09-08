// ==== VARIABLES ====

const block = document.querySelector('#block');
const hole = document.querySelector('#hole');
const character = document.querySelector('#character');

const body = document.querySelector('body');

let scoreSpan = document.querySelector('#score');

let jumping = 0;
let score = 0;


// ==== EVENT LISTENERS ====
body.addEventListener('keypress',()=>{
  startGame();

});


// 🟢 EVENT LISTENER -- changes positioning of hole

hole.addEventListener('animationiteration', () => {
	let random = -(Math.random() * 700 + 300);
	hole.style.top = `${random}px`;

  score++;
  scoreUpdate();
});


// ==== FUNCTIONS ====

function startGame(){
  setInterval((gravityFunc), 10); // gravity starts

  // block & hole animation toggle
 hole.style.animationPlayState="running";
 block.style.animationPlayState="running";


}

// 🟢 SCORE FUNC
function scoreUpdate(){
  scoreSpan.innerHTML = score;
}

// 🟢 GRAVITY FUNC
function gravityFunc() {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

  // 🟢 GRAVITY EFFECT
  if(jumping === 0){
    character.style.top = (characterTop+3)+"px";
  };

  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"))

  // height of game - characterTop
  let cTop = (-(1100-characterTop));

  // 🟢 VERIFYING GAME OVER CONDITIONS
  if((characterTop >= 1025) || (((blockLeft < 100) && (blockLeft >-50)) && ((cTop < holeTop) || (cTop > holeTop + 270)))){
    alert(`Game Over. Score: ${score}`);
    character.style.top = 500 + "px";
    score = 0;
  }
}


// 🟢 JUMP FUNC
function jump(){
  jumping = 1;

  let jumpCount = 0;

  let jumpInterval = setInterval(function(){
    let characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    character.style.top = (characterTop - 5) + "px";

    if(characterTop <= 125){

      characterTop = 125;
      character.style.top = 125+"px";
    }

    if((character > 6) && (counter < 15)){
      character.style.top = (characterTop - 5) + "px";
    }

    if(jumpCount > 20){
      clearInterval(jumpInterval);
      jumping = 0;
    }

    jumpCount++;
  }, 10);
};
