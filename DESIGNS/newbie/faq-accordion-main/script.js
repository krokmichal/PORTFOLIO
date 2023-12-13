let elements = document.getElementsByClassName("row");
let showed = false;
let firstClick = false;

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    show(elements[i].id);
  });
}

function show(id) {
  if (id === "r2" && firstClick === false) showed = true;
  if (showed === false) {
    let img =
      '<img id="' + id + '" src="/assets/images/icon-minus.svg" alt="">';
    document.getElementById("" + id + "img").innerHTML = img;
    showed = true;
    firstClick = true;
  } else {
    let img = '<img id="' + id + '" src="/assets/images/icon-plus.svg" alt="">';
    document.getElementById("" + id + "img").innerHTML = img;
    showed = false;
    firstClick = true;
  }
}
