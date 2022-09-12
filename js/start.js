// START MENU JS

// ==== VARIABLES ====


// CONTAINER DIVS -- START / GAME / GAME OVER
const mainContainer = document.querySelector('#mainContainer');
const gameContainer = document.querySelector('#game');
const goContainer = document.querySelector('#gameOver');

const gameStats = document.querySelector('#stats');

const charImg = document.querySelector('#characterImg');

const gameOvChar = document.querySelector('#gameOvcharacterChoice');


let characterChoice = document.querySelector('#characterChoice');
console.log(characterChoice);

let playerCharacter = null;

// ==== 🟢 ON START ====
function load() {
	ogNyan();
	updateCharacter();

}
load();

// ==== 🟢 CLICKED START FUNCTION ====
function clickedStart(){
	mainContainer.style.visibility='hidden';
	gameContainer.style.visibility='visible';
	gameStats.style.visibility='visible';

	setCharacter();


}


// ==== 🟢 CHARACTER CHANGE FUNCS ====

function ogNyan() {
	characterChoice.src = '/assets/OriginalNyanCat.webp';
	updateCharacter();
}

function pirateNyan() {
	characterChoice.src = '/assets/PirateNyanCat.webp';
	updateCharacter();
}

function mummyNyan() {
	characterChoice.src = '/assets/Mummy-2-.webp';
	updateCharacter();
}

function rastaNyan() {
	characterChoice.src = '/assets/Rasta.webp';
	updateCharacter();
}

function gbNyan() {
	characterChoice.src = '/assets/Gb.webp';
	updateCharacter();
}

function witchyNyan() {
	characterChoice.src = '/assets/Magical.webp';
	updateCharacter();
}

function tacoNyan() {
	characterChoice.src = '/assets/Mexinyan.webp';
	updateCharacter();
}

function pumpkinNyan() {
	characterChoice.src = '/assets/Pumpkin.webp';
	updateCharacter();
}

function smurfNyan() {
	characterChoice.src = '/assets/Smurf.webp';
	updateCharacter();
}

function daftNyan() {
	characterChoice.src = '/assets/Dafty.webp';
	updateCharacter();
}

function pusheenNyan() {
	characterChoice.src = '/assets/Fat.webp';
	updateCharacter();
}

function toasterNyan() {
	characterChoice.src = '/assets/SonOfaNyan.webp';
	updateCharacter();
}

function partyNyan() {
	characterChoice.src = '/assets/BdayFlavor.webp';
	updateCharacter();
}

function updateCharacter() {
	playerCharacter = characterChoice;
	console.log(playerCharacter);
}





// ==== 🟢 GAME JAVA SCRIPT ====




// ==== VARIABLES ====

const block = document.querySelector('#block');
const hole = document.querySelector('#hole');
const character = document.querySelector('#character');

const body = document.querySelector('body');

let scoreSpan = document.querySelector('#score');

let jumping = 0;
let score = 0;

// let gameOver = document.querySelector('#gameOver')
let goScore = document.querySelector('#goScore');


// ==== EVENT LISTENERS ====
body.addEventListener('keypress', () => {
	startGame();
	document.querySelector('#pressKey').style.visibility='hidden'
});

// 🟢 EVENT LISTENER -- changes positioning of hole

hole.addEventListener('animationiteration', () => {
	let random = -(Math.random() * 700 + 300);
	hole.style.top = `${random}px`;

	score++;
	scoreUpdate();
});

// ==== FUNCTIONS ====

function startGame() {
	setInterval(gravityFunc, 10); // gravity starts

	// block & hole animation toggle
	hole.style.animationPlayState = 'running';
	block.style.animationPlayState = 'running';
}

// ==== 🟢 SCORE FUNC ====
function scoreUpdate() {
	scoreSpan.innerHTML = score;
	goScore.innerHTML = scoreSpan.innerHTML;
}

// ==== 🟢 GRAVITY FUNC ====
function gravityFunc() {
	let characterTop = parseInt(
		window.getComputedStyle(character).getPropertyValue('top')
	);

	// ==== 🟢 GRAVITY EFFECT ====
	if (jumping === 0) {
		character.style.top = characterTop + 3 + 'px';
	}

	let blockLeft = parseInt(
		window.getComputedStyle(block).getPropertyValue('left')
	);
	let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));

	// height of game - characterTop
	let cTop = -(1100 - characterTop);

	// ==== 🟢 VERIFYING GAME OVER CONDITIONS ====
	if (
		characterTop >= 1025 ||
		(blockLeft < 100 &&
			blockLeft > -50 &&
			(cTop < holeTop || cTop > holeTop + 270))
	) {

		gameContainer.style.visibility = 'hidden';
		gameStats.style.visibility = 'hidden';
		goContainer.style.visibility="visible";



	}
}

// ==== 🟢 JUMP FUNC ====
function jump() {
	jumping = 1;

	let jumpCount = 0;

	let jumpInterval = setInterval(function () {
		let characterTop = parseInt(
			window.getComputedStyle(character).getPropertyValue('top')
		);

		character.style.top = characterTop - 5 + 'px';

		if (characterTop <= 125) {
			characterTop = 125;
			character.style.top = 125 + 'px';
		}

		if (character > 6 && counter < 15) {
			character.style.top = characterTop - 5 + 'px';
		}

		if (jumpCount > 20) {
			clearInterval(jumpInterval);
			jumping = 0;
		}

		jumpCount++;
	}, 10);
}


// ==== 🟢 SET CHAR FUNC ====
function setCharacter() {
	charImg.src = playerCharacter.src;
	gameOvChar.src = playerCharacter.src;
	console.log(charImg);
}


// ==== 🟢 EXIT / RELOAD ====

function mainMenu(){
	window.location.reload();
	score = 0;
}
