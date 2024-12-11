// ----> HAMBURGUER MENU <----

const H_HAMBURGUER_MENU = document.querySelector(
  ".header__hamburguer-menu-toggle-label"
);

console.log("object");

H_HAMBURGUER_MENU.addEventListener("click", () => {
  H_HAMBURGUER_MENU.classList.toggle("active");
});

const formElement = document.getElementById("form__dialog");

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario
  console.log("Formulario no enviado, acción personalizada aquí.");
});

// ----> MODAL WINDOW <----

const H_DIALOG = document.querySelector("dialog");
console.log(H_DIALOG);
const H_BTN_CLOSE_MODAL = document.querySelector(".btn-dialog__close");
console.log(H_BTN_CLOSE_MODAL);
const H_BTN_SIGNUP = document.querySelectorAll(".signup-btn");
console.log(H_BTN_SIGNUP);

// SI DEJA DE SER UN DIALOGO, ENTONCES AVISARLO
if (!(H_DIALOG instanceof HTMLDialogElement)) {
  console.error("Modal Window Not Found");
  throw new Error();
}

// POR CADA BOTON CON LA CLASE "SIGNUP" QUE HAYA, AGREGAR UN EVENT
// LISTENER Y ABRIR LA MODAL CUANDO SE HAGA CLICK EN CUALQUIERA
// DE ELLOS
H_BTN_SIGNUP.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    H_DIALOG.showModal();
    console.log("Abriendo Modal");
  })
);

// AL DAR CLICK EN LA X, CERRAR EL MODAL
H_BTN_CLOSE_MODAL.addEventListener("click", () => {
  H_DIALOG.close();
  console.log("Boton Cerrar Modal");
});

// AL DAR CLICK FUERA DEL MODAL, CERRAR EL MODAL
H_DIALOG.addEventListener("click", (e) => {
  if (e.target === H_DIALOG) {
    H_DIALOG.close();
    console.log("Click en Overlay");
  }
});

// ----> ACTIVANDO STICKY HEADER <----

window.onscroll = function () {
  const H_HEADER = document.querySelector("header");
  const H_FEATURES_SECTION = document.querySelector(".features");
  const H_SECTION_TOP = H_FEATURES_SECTION.offsetTop;

  if (window.scrollY >= H_SECTION_TOP) {
    H_HEADER.classList.add("sticky");
  } else {
    H_HEADER.classList.remove("sticky");
  }
};

// ----> LAZY LOADING CHECK <----

const hasNativeLazyLoadSupport = "loading" in HTMLImageElement.prototype;
if (!hasNativeLazyLoadSupport) {
  // aplicar otra estrategia para la carga diferida
  console.log("No soporta la etiqueta load");
} else {
  console.log("Si soporta la etiqueta load");
}

// ----> TESTIMONIAL CAROUSEL <----

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
