document.querySelector('#newGame').addEventListener('click', startGame)

let clickSound = new Audio('/sounds/click.wav');

function startGame() {
    clickSound.play();
    window.location.href = "/assets/html/gameOptions.html";
}