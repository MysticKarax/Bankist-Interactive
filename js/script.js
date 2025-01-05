// ----> HAMBURGUER MENU <----

const H_HAMBURGUER_MENU = document.querySelector(
  ".header__hamburguer-menu-toggle-label"
);

H_HAMBURGUER_MENU.addEventListener("click", () => {
  H_HAMBURGUER_MENU.classList.toggle("active");
});

const H_FORM_ELEMENT = document.getElementById("form__dialog");

// H_FORM_ELEMENT.addEventListener("submit", (event) => {
//   event.preventDefault(); // PREVENTS FORM BTN DEFAULT BEHAVIOR
// });

// ----> MODAL WINDOW <----

const H_DIALOG = document.querySelector("dialog");
const H_BTN_CLOSE_MODAL = document.querySelector(".btn-dialog__close");
const H_BTN_SIGNUP = document.querySelectorAll(".signup-btn");

// IF DIALOG IS NOT AN HTML ELEMENT, DISPLAY AN ADVICE ABOUT IT
if (!(H_DIALOG instanceof HTMLDialogElement)) {
  console.error("Modal Window Not Found");
  throw new Error();
}

// FOR EACH BTN OF THE PARENT ELEMENT "SIGNUP", ADD AN EVENTLISTENER
// AND OPEN THE MODAL WINDOW WHEN USER CLICKS ON ANY OF THEM
H_BTN_SIGNUP.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    H_DIALOG.showModal();
  })
);

// WHEN CLICKING ON X BTN, CLOSE MODAL
H_BTN_CLOSE_MODAL.addEventListener("click", () => {
  H_DIALOG.close();
});

// WHEN CLICKING OUT OF THE MODAL, CLOSE IT
H_DIALOG.addEventListener("click", (e) => {
  if (e.target === H_DIALOG) {
    H_DIALOG.close();
    console.log("Clicked on Overlay");
  }
});

// ----> ACTIVATING STICKY HEADER <----

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

// ----> CHECKING LAZY LOADING COMPATIBILITY <----

const hasNativeLazyLoadSupport = "loading" in HTMLImageElement.prototype;
if (!hasNativeLazyLoadSupport) {
  console.log("Your Browser Doesn't Support Lazy Load");
} else {
  console.log("Your Browser Supports Lazy Load");
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

// Modificando scroll web

const H_HEADER_LINKS = document.querySelectorAll(".header__link");
console.log(H_HEADER_LINKS);

H_HEADER_LINKS.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Click");
    H_FEATURES_SECTION.scrollIntoView({ behavior: "smooth" });
  })
);

const H_LEARN_MORE_BTN = document.querySelector(".hero__anchor");

const H_FEATURES_SECTION = document.querySelector(".features");

H_LEARN_MORE_BTN.addEventListener("click", (e) => {
  e.preventDefault();

  // Obtiene las coordenadas de la posicion de la seccion features.
  // const featuresCoords = H_FEATURES_SECTION.getBoundingClientRect();
  // console.log(featuresCoords);

  // // Obtiene las coordenadas de la posicion actual del usuario en la pagina en X y Y.
  // console.log("Current Scroll", window.pageXOffset, window.pageYOffset);

  // // Obtiene el alto y ancho del elemento seleccionado
  // console.log(
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // //scrolling
  // window.scrollTo({
  //   top: featuresCoords.top + window.pageYOffset,
  //   left: featuresCoords.left + window.pageXOffset,
  //   behavior: "smooth",
  // });

  H_FEATURES_SECTION.scrollIntoView({ behavior: "smooth" });
});

const titulo = document.querySelector("h1");
let conteo = 0;
const alertWelcome = function (e) {
  alert("Bienvenido a el titulo");
  // titulo.removeEventListener("mouseenter", alertWelcome);
};

// titulo.addEventListener("mouseenter", alertWelcome);

setTimeout(() => {
  titulo.removeEventListener("mouseenter", alertWelcome);
}, 30000);

// titulo.onmouseenter = function (e) {
//   alert("segundo event listener");
// };
