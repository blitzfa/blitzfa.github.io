const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", function () {
  navItems.classList.toggle("responsive");
});

const dropdown = document.querySelector(".dropdown");
dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});
