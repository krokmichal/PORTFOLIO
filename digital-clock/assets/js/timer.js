let addButtons = document.querySelectorAll(".add");
let substractButtons = document.querySelectorAll(".substract");

addButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    add(this.name);
  });
});

substractButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    substract(this.name);
  });
});

let counting = false;


function add(id) {
  let number;
  number = document.querySelector("#" + id).value;
  number = Number(number);
  number++;
  document.querySelector("#" + id).value = number;
//   if (document.querySelector("#" + id).value > 9) document.querySelector("#" + id).value = 0;
if (document.querySelector('#h1').value > 9) document.querySelector('#h1').value = 0;
if (document.querySelector('#h2').value > 9) document.querySelector('#h2').value = 0;
if (document.querySelector('#m1').value > 5) document.querySelector('#m1').value = 0;
if (document.querySelector('#m2').value > 9) document.querySelector('#m2').value = 0;
if (document.querySelector('#s1').value > 5) document.querySelector('#s1').value = 0;
if (document.querySelector('#s2').value > 9) document.querySelector('#s2').value = 0;
}

function substract(id) {
  let number;
  number = document.querySelector("#" + id).value;
  number = Number(number);
  number--;
  number = document.querySelector("#" + id).value = number;
//   if (document.querySelector("#" + id).value < 0) document.querySelector("#" + id).value = 9;
if (document.querySelector('#h1').value < 0) document.querySelector('#h1').value = 9;
if (document.querySelector('#h2').value < 0) document.querySelector('#h2').value = 9;
if (document.querySelector('#m1').value < 0) document.querySelector('#m1').value = 5;
if (document.querySelector('#m2').value < 0) document.querySelector('#m2').value = 9;
if (document.querySelector('#s1').value < 0) document.querySelector('#s1').value = 5;
if (document.querySelector('#s2').value < 0) document.querySelector('#s2').value = 9;
}

document.querySelector('#resume').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);
let timerId;

function start() {
    
    let s1 = document.querySelector('#s1').value;
    let s2 = document.querySelector('#s2').value;
    let m1 = document.querySelector('#m1').value;
    let m2 = document.querySelector('#m2').value;
    let h1 = document.querySelector('#h1').value;
    let h2 = document.querySelector('#h2').value;
    if (s1 !== '0'|| s2 !== '0' || m1 !== '0' || m2 !== '0' || h1 !== '0' || h2 !== '0') {
        s1 = Number(s1);
        s2 = Number(s2);
        m1 = Number(m1);
        m2 = Number(m2);
        h1 = Number(h1);
        h2 = Number(h2);
    s2--;
    if (s2 < 0 && s1 > 0) 
    {
        s1--;
        s2 = 9;
    }

    else if (s1 == 0 && s2 < 0 && m2 > 0)
    {
        m2--;
        s1 =  5;
        s2 = 9;
    }

    else if (m2 == 0 && s1 == 0 && s2 < 0)
    {
        m1--;
        m2 = 9;
        s1 =  5;
        s2 = 9;
    }

    else if (h2 > 0 && s2 < 0)
    {
        h2--;
        m1 = 5;
        m2 = 9;
        s1 = 5;
        s2 = 9;
    }

    else if (h1 > 0 && h2 == 0 && m1 == 0 && m2 == 0 && s1 == 0 && s2 < 0)
    {
        h1--;
        h2 = 9;
        m1 = 5;
        m2 = 9;
        s1 = 5;
        s2 = 9;
    }

    timerId = setTimeout(start, 1000);
    
    
    document.querySelector('#s2').value = s2;
    document.querySelector('#s1').value = s1;
    document.querySelector('#m2').value = m2;
    document.querySelector('#m1').value = m1;
    document.querySelector('#h2').value = h2;
    document.querySelector('#h1').value = h1;


    document.querySelector('#stop').innerHTML = "STOP";
    counting = true;
    
    if ((s1 == 0 && s2 == 0 && m1 == 0 && m2 == 0 && h1 == 0 && h2 == 0)) 
    {
        document.querySelector('#s2').value = s2;
        alert('TIME FINISHED');
        stop();
        s2++;
    }
}
}

function stop() {
    clearTimeout(timerId);
    document.querySelector('#stop').innerHTML = "CLEAR";
    if (counting == false) 
    {
        document.querySelector('#h1').value = 0;
        document.querySelector('#h2').value = 0;
        document.querySelector('#m1').value = 0;
        document.querySelector('#m2').value = 0;
        document.querySelector('#s1').value = 0;
        document.querySelector('#s2').value = 0;
        document.querySelector('#stop').innerHTML = "STOP";
    }
    counting = false;
}
