// ==== VARIABLES ====

const block = document.querySelector('#block');
const hole = document.querySelector('#hole');
const character = document.querySelector('#character');

let jumping = 0;
let score = 0;


// ==== EVENT LISTENERS ====



// 🟢 EVENT LISTENER -- changes positioning of hole

hole.addEventListener('animationiteration', () => {
	let random = -(Math.random() * 300 + 150);
	hole.style.top = `${random}px`;

  score++;
});



// ==== FUNCTIONS ====

// 🟢 GRAVITY FUNC
setInterval(function(){
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

  if(jumping === 0){
    character.style.top = (characterTop+3)+"px";
  };

  if(characterTop > 480){
    alert(`Game Over. Score: ${score}`);
    character.style.top = 100 + "px";
    score = 0;
  }

}, 10);

// 🟢 JUMP FUNC
function jump(){
  jumping = 1;

  let jumpCount = 0;

  let jumpInterval = setInterval(function(){
    let characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    character.style.top = (characterTop - 5) + "px";

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
