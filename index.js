let toggleDarkModeBtn = document.querySelector(".toggle-dark");

toggleDarkModeBtn.addEventListener("click", () => {
  toggleDarkModeBtn.children[0].classList.toggle("on");
  document.body.classList.toggle("dark-theme");
});
