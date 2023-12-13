let rates = document.getElementsByClassName("rate");
let clicked = false;
let clickedRate = -1;
let choice = 0;

for (let i = 0; i < rates.length; i++) {
  rates[i].addEventListener("click", () => {
    clickedRate = 0;
    for (let j = 0; j < rates.length; j++) {
      if (rates[j].classList.contains("clicked") === true) {
        clickedRate = j + 1;
        clicked = true;
      }
    }
    // if (clicked === false) {
    //   choice = i + 1;
    //   rates[i].classList.toggle("clicked");
    // } else {
    //   choice = i + 1;
    //   rates[i].classList.toggle("clicked");
    //   rates[clickedRate - 1].classList.toggle("clicked");
    // }

    choice = i + 1;
    rates[i].classList.toggle("clicked");
    if (clicked === true) rates[clickedRate - 1].classList.toggle("clicked");
    // clicked && rates[clickedRate - 1].classList.toggle("clicked");
  });
}

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  if (choice > 0) {
    localStorage.setItem("selectedRate", choice);
    window.location.href = "thankyou.html";
  }
});
