document.querySelector("#starter").addEventListener("click", start);
document.querySelector("#reset").addEventListener("click", stop);
let counting = false;
let timer;
function start() {
  let s = document.querySelector("#s").value;
  let m = document.querySelector("#m").value;
  let h = document.querySelector("#h").value;
  s = Number(s);
  m = Number(m);
  h = Number(h);

  h++;

  if (h > 99) {
    s++;
    h = 0;
  } else if (s > 59) {
    m++;
    s = 0;
    h = 0;
  }

  if (h < 10) document.querySelector("#h").value = "0" + h;
  else document.querySelector("#h").value = h;

  if (s < 10) document.querySelector("#s").value = "0" + s;
  else document.querySelector("#s").value = s;

  if (m < 10) document.querySelector("#m").value = "0" + m;
  else document.querySelector("#m").value = m;

  timer = setTimeout(start, 10);
  counting = true;
  document.querySelector("#reset").innerHTML = "STOP";
}

function stop() {
  clearTimeout(timer);
  document.querySelector("#reset").innerHTML = "RESET";
  if (counting == false) {
    document.querySelector("#h").value = '00';
    document.querySelector("#s").value = '00';
    document.querySelector("#m").value = '00';

    document.querySelector("#reset").innerHTML = "STOP";
  }
  counting = false;
}
