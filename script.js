const hamburguerMenu = document.querySelector(".label-hamburguer-menu");

console.log("object");

hamburguerMenu.addEventListener("click", () => {
  hamburguerMenu.classList.toggle("active");
});
