const navButtons = document.querySelectorAll(".navigation-btn");

navButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentElement.parentElement.classList.toggle("change");
  });
});
