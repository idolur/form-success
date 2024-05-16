document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const mainContainer = document.getElementById("main-container");
  const secondContainer = document.querySelector(".second-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    mainContainer.style.display = "none";
    secondContainer.classList.remove("hidden");
  });
});
