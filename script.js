const hamburguerMenu = document.querySelector(
  ".header__hamburguer-menu-toggle-label"
);

console.log("object");

hamburguerMenu.addEventListener("click", () => {
  hamburguerMenu.classList.toggle("active");
});
