const toggleButton = document.querySelector("#dark-mode-button");
const body = document.querySelector("body");
const contentSection = document.querySelectorAll(".content-section");
const links = document.querySelectorAll("a");

let buttonValue = true;

toggleButton.addEventListener("click", () => {
  toggleLightDarkMode();
});

const toggleLightDarkMode = () => {
  body.classList.toggle("dark-mode");
  contentSection.forEach((element) => {
    element.classList.toggle("dark-mode");
  });
  links.forEach((element) => {
    element.style.setProperty("color", "orange");
  });
  toggleButton.classList.toggle("button-mode-light");

  function switchText() {
    if (buttonValue === false) {
      toggleButton.innerText = "Light Mode 🔆";
    } else {
      toggleButton.innerText = "Dark Mode 🌝";
    }
  }
  buttonValue = !buttonValue;
  switchText();
};
