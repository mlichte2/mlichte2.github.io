const toggleButton = document.querySelector("#dark-mode-button");
const body = document.querySelector("body");
const contentSection = document.querySelectorAll(".content-section");
const links = document.querySelectorAll("a");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

let lightModeStatus = true;

toggleButton.addEventListener("click", () => {
  toggleLightDarkMode();
});

const toggleLightDarkMode = () => {
  body.classList.toggle("dark-mode");
  contentSection.forEach((element) => {
    element.classList.toggle("dark-mode");
  });

  toggleButton.classList.toggle("button-mode-light");
  header.classList.toggle("header-footer-dark-mode");
  footer.classList.toggle("header-footer-dark-mode");
  function switchText() {
    if (lightModeStatus === false) {
      toggleButton.innerText = "Light Mode 🔆";
      links.forEach((element) => {
        element.style.setProperty("color", "orange");
      });
    } else {
      toggleButton.innerText = "Dark Mode 🌝";
      links.forEach((element) => {
        element.style.setProperty("color", "blue");
      });
    }
  }
  lightModeStatus = !lightModeStatus;
  switchText();
};
