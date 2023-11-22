let clickSound = new Audio('/sounds/click.wav');





//          OBSŁUGA TRYBU "WPISZ SŁOWO"

document.querySelector('#yourWord').addEventListener('click', pickWord)
let createdW = false;
let createdC = false;

// stworzenie pojemnika na input+przycisk
let wordField = document.createElement('div');
wordField.setAttribute('id', 'wordField');

let input = '<input id="inputWord" type="text"></input>';
let startButton = '<button id="startB" type="button">START</button>';

wordField.innerHTML = input + startButton;

// funkcja pokazująca na ekranie pole do wpisania własnego słowa oraz przycisk START
function pickWord() {
    
    if (createdW == false) {
        clickSound.play();
        document.querySelector('#yourWord').classList.add('clicked');
        document.body.append(wordField);
        createdW = true;

        let startB = document.querySelector('#startB');
        startB.addEventListener('click', startCustomGame);
    }
    else {
        clickSound.play();
        document.querySelector('#yourWord').classList.remove('clicked');
        wordField.remove();
        createdW = false;
    }
}

let wprowadzoneHaslo = "";

function startCustomGame() {
    wprowadzoneHaslo = document.querySelector('#inputWord').value;
    window.location.href = '/assets/html/gameScreen.html';
}

//  export { wprowadzoneHaslo };






//          OBSŁUGA TRYBU "KATEGORIE"

// wywolanie funkcji otwierajacej liste z kategoriami
document.querySelector('#categories').addEventListener('click', showCategories);

let categories = [];
let categorieRandom = '<div id="catRandom" class="cat">LOSOWA KATEGORIA</div>'
let categorieCars = '<div id="cat1" class="cat">SAMOCHODY</div>';
let categorieComputerGames = '<div id="cat2" class="cat">GRY KOMPUTEROWE</div>';
let categorieMovies = '<div id="cat3" class="cat">FILMY</div>';
let categorieBiology = '<div id="cat4" class="cat">PRZYRODA</div>';
categories[0] = categorieRandom;
categories[1] = categorieCars;
categories[2] = categorieComputerGames;
categories[3] = categorieMovies;
categories[4] = categorieBiology;

// stworzenie pojemnika na kategorie
let divCategories = document.createElement('div');
divCategories.setAttribute('id', 'divCategories');

let kategorie = "";

// wypelnienie pojemnika kategoriami
for(let i of categories)
kategorie += [i];

divCategories.innerHTML = kategorie;

// kategorie i slowa w nich zawarte
let cars = [];
cars[0] = 'renault';
cars[1] = 'peugeot';
cars[2] = 'rover';
cars[3] = 'saab';
cars[4] = 'volvo';

let computerGames = [];
computerGames[0] = 'csgo';
computerGames[1] = 'zelda';
computerGames[2] = 'dark and darker';
computerGames[3] = 'starfield';
computerGames[4] = 'gta';

let movies = [];
movies[0] = 'avengers';
movies[1] = 'legends of the fall';
movies[2] = 'good day to die hard';
movies[3] = 'forgotten love';
movies[4] = 'no time to die';

let biology = [];
biology[0] = 'flower';
biology[1] = 'tree';
biology[2] = 'bird';
biology[3] = 'crocodyle';
biology[4] = 'elephant';

// funkcja wyswietla kategorie na ekranie, dodaje do kazdej eventListener
function showCategories() {
    if (createdC == false) {
        clickSound.play();
        document.querySelector('#categories').classList.add('clicked');
        document.body.append(divCategories);
        createdC = true;

        let catRandom = document.querySelector('#catRandom');
        catRandom.addEventListener('click', getCatAndWord);

        for (let i=1; i<=categories.length-1; i++){
            document.querySelector('#cat'+i+'').addEventListener('click', function() {
                getWord(i);
            });
            
        }

    }
    else {
        clickSound.play();
        document.querySelector('#categories').classList.remove('clicked');
        divCategories.remove();
        createdC = false;
    }
    
}

// funkcja losująca słowo z tablicy. argument kat to numer kategorii (tablicy)
function getWord(kat) {
    clickSound.play();
    let w ="";
     switch(kat) {
        case 1:
            w = cars[Math.floor(Math.random()*cars.length)];
        break;
        case 2:
            w = computerGames[Math.floor(Math.random()*computerGames.length)];
        break;
        case 3:
            w = movies[Math.floor(Math.random()*movies.length)];
        break; 
        case 4:
            w = biology[Math.floor(Math.random()*biology.length)];
        break;     
    } 
    alert(w);
}

// funkcja losująca kategorie a następnie losująca z tej kategorii słowo
function getCatAndWord() {
    clickSound.play();
    let r = Math.floor(Math.random()*4)+1;
    getWord(r);
}