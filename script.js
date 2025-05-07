// Navigation Menu
const container = document.querySelector(".container");
const openNavIcon = document.querySelector(".open-navbar-icon");
const navWrapper = document.querySelector(".navbar-wrapper");
const closeNavIcon = document.querySelector(".close-navbar-icon");

openNavIcon.addEventListener("click", (e) => {
  container.classList.add("change");
});
closeNavIcon.addEventListener("click", (e) => {
  container.classList.remove("change");
});
// Tours section
const navButtons = document.querySelectorAll(".navigation-btn");

navButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentElement.parentElement.classList.toggle("change");
  });
});
