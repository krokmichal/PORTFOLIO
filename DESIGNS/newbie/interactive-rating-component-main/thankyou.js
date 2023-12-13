document.addEventListener("DOMContentLoaded", function () {
  let selectedRate = localStorage.getItem("selectedRate");

  if (selectedRate) {
    let selectionElement = document.getElementById("selection");
    if (selectionElement) {
      selectionElement.innerHTML = "You selected " + selectedRate + " out of 5";
    }

    // localStorage.removeItem("selectedRate");
  }
});
