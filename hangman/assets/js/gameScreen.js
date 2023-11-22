// Inicjalizacja tajnego słowa i zamiana go na duże litery
var haslo = "cos";
haslo = haslo.toUpperCase();

var sprawdzoneLitery = [];

// Inicjalizacja zmiennej do wyświetlania słowa z odgadniętymi literam
var haslo1 = "";

// Inicjalizacja zmiennych do śledzenia błędów, ruchów i stanu gry
var liczbaBledow = 0;
var liczbaRuchow = 0;
var gameOver = false;

// Inicjalizacja elementów audio dla różnych zdarzeń w grze
let clickSound = new Audio('/sounds/click.wav');
let gameOverSound = new Audio('/sounds/gameover.wav');
let gameCompletedSound = new Audio('/sounds/gamecompleted.wav');

// Licznik błędów
document.querySelector('#licznik').innerHTML = 'Liczba błędów: '+liczbaBledow+'/10';


// Tablica liter
var litery = [];
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";

// Funkcja wypisująca hasło na ekranie w formie kresek
function wypiszHaslo(){
    
    for (var i = 0; i<haslo.length; i++)
    {
        if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
        else haslo1 = haslo1 + "-";
    }

    document.querySelector('#password').innerHTML = haslo1;
    document.querySelector('#graphic').innerHTML = '<img src="/img/s'+liczbaBledow+'.jpg" alt="Stan gry">';

    wypiszLitery();

}


// Funkcja wypisująca na ekranie alfabet
function wypiszLitery(){
    var tresc = "";
    
    for (var i = 0; i<=34; i++)
    {
        tresc = tresc + '<div class="litera" id="lit'+i+'" onclick="sprawdz('+i+')">'+litery[i]+'</div>';
    }
        document.querySelector('#alphabet').innerHTML = tresc; 
    }


// Rozszerzenie prototypu String do zamiany znaku na danej pozycji
String.prototype.ustawZnak = function(miejsce, znak) 
{
    if (miejsce > this.length - 1) return this.toString;
    else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
}

var trafiona = false;


// Funkcja do sprawdzania czy kliknięta litera znajduje się w haśle
function sprawdz(nr)
{
    if (gameOver == false) {
        clickSound.play();
    if (sprawdzoneLitery.includes(nr)) alert('Litera '+litery[nr]+' została już sprawdzona!');
    else {
        liczbaRuchow++;
        for (var i = 0; i<haslo.length; i++)
        {
            if (haslo.charAt(i) == litery[nr]) 
            {
                haslo1 = haslo1.ustawZnak(i,litery[nr]);
                var trafiona = true;
            }
        }

    sprawdzoneLitery.push(nr);

    console.log(sprawdzoneLitery);
            // Zmiana stylu przycisku litery w przypadku trafienia
            if (trafiona == true) {
                document.querySelector('#lit'+nr+'').style.background = 'green';
                document.querySelector('#lit'+nr+'').style.cursor = 'default';
            }
            
            // Zmiana stylu przycisku litery w przypadku BRAKU trafienia
            else {
                document.querySelector('#lit'+nr+'').style.background = 'red';
                document.querySelector('#lit'+nr+'').style.cursor = 'default';
                liczbaBledow++;
                document.querySelector('#graphic').innerHTML = '<img src="/img/s'+liczbaBledow+'.jpg" alt="Stan gry:'+liczbaBledow+'">';

            }

            // PRZEGRANA
            if (liczbaBledow>9)
            {
                gameOverSound.play();
                document.querySelector('#graphic').innerHTML = 'Przegrana :(';
                haslo1 = " "+haslo;
                document.querySelector('#password').setAttribute('style', 'text-decoration: underline; text-decoration-color: red');
                gameOver = true;
            }
            
            // WYGRANA
            if (haslo1 == haslo)
            {
                gameCompletedSound.play();
                document.querySelector('#graphic').innerHTML = 'Gratulacje! Udało Ci się wygrać w '+liczbaRuchow+' ruchach!';
                document.querySelector('#password').setAttribute('style', 'text-decoration: underline; text-decoration-color: green');
                
                gameOver = true;
            }
        
           

    
    document.querySelector('#password').innerHTML = haslo1;
    document.querySelector('#licznik').innerHTML = 'Liczba błędów: '+liczbaBledow+'/10';

        }
    }
}    


window.onload = wypiszHaslo;

document.querySelector('#exit').addEventListener('click',exitGame);

function exitGame(){
    window.location.href = 'main.html';
}