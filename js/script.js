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
    // console.log("Clicked on Overlay");
  }
});

// ----> ACTIVATING STICKY HEADER <----

const H_HEADER = document.querySelector("header");
const H_FEATURES_SECTION = document.querySelector(".features");
const H_MAIN_SECTION = document.querySelector(".hero");
const H_FOOTER = document.querySelector("footer");
const H_OPERATIONS_SECTION = document.querySelector(".operations");
const H_TESTIMONIALS_SECTION = document.querySelector(".testimonials");

// TODO: Ocultar todas las secciones y solo ir mostrandolas con el
// IntersectionObserver

// Selecciona todas las secciones que quieres observar
const H_ALL_SECTIONS = document.querySelectorAll(".test");

// Define las opciones del observador
const observerOptions = {
  root: null, // Usa el viewport como root
  threshold: 0, // El porcentaje de visibilidad necesario para activar el callback
  rootMargin: "-80px",
};

// Define el callback del observador
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    // console.log(entry);
    // console.log(entry.target.id);
    // console.log(entry.target.classList.contains("hero"));
    // console.log(entry.isIntersecting);

    const currentEntry = entry.target;

    if (entry.isIntersecting) {
      currentEntry.classList.remove("hide-section");
    }

    if (currentEntry.classList.contains("hero") && entry.isIntersecting) {
      H_HEADER.classList.remove("sticky");
    } else if (currentEntry.classList.contains("hero")) {
      H_HEADER.classList.add("sticky");
    }
  });
};

const observerSections = new IntersectionObserver(
  observerCallback,
  observerOptions
);

H_ALL_SECTIONS.forEach((section) => {
  section.classList.add("hide-section");
  observerSections.observe(section);
});

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

const observerOptionsImgs = {
  root: null,
  threshold: 0,
};

const observerCallbackImgs = (entries, observer) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.remove("blur-effect");
    }
  });
};

const H_ALL_FEATURE_IMGS = document.querySelectorAll(".feature__image");

const observerFeatureImgs = new IntersectionObserver(
  observerCallbackImgs,
  observerOptionsImgs
);

H_ALL_FEATURE_IMGS.forEach((img) => {
  img.classList.add("blur-effect");
  observerFeatureImgs.observe(img);
});

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

const H_HEADER_LINKS = document.querySelector(".header__links");

// GENERANDO COLORES RANDOMS
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

H_HEADER_LINKS.addEventListener("click", function (e) {
  // PREVINIENDO QUE EL HREF DEL ANCHOR DIRIGA AL USUARIO HACIA LA SECCION SELECCIONADA
  e.preventDefault();

  // SOLO SI EL ELEMENTO CLICKEADO TIENE ESTA CLASE, DIRIGIR AL USUARIO HACIA LA SECCION SELECCIONADA
  if (e.target.classList.contains("header__link")) {
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  }
});

const h1 = document.querySelector("h1");

// ir hacia adentro: child
// console.log(h1);
// console.log(h1.querySelectorAll(".hero__highlight"));

// FIXME: LOS NODOS SON TODO EL CONTENIDO EXISTENTE ENTRE LAS ETIQUETAS
// console.log(h1.childNodes);

// FIXME: LOS ELEMENTOS SON SOLO EL CONTENIDO DE LAS ETIQUETAS
// console.log(h1.children);

// FIXME: EL 1ER ELEMENTO HIJO DE H1 SERA DE COLOR BLANCO
// h1.firstElementChild.style.color = "white";

// FIXME: EL ULTIMO ELEMENTO HIJO DE H1 SERA DE COLOR ROJO ANARANJADO
// h1.lastElementChild.style.color = "orangered";

// FIXME: ir hacia arriba: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".hero").style.background = "var(--color-primary-opacity)";

// h1.closest("h1").style.background = "var(--gradient-primary)";

// FIXME: ir hacia los lados: sibilings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// h1.parentElement.children.forEach((child) => (child.style.color = "blue"));

// for (const child of h1.parentElement.children) {
//   if (!child.classList.contains("hero__title")) {
//     child.style.color = "blue";
//   }
// }

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });

const H_LEARN_MORE_BTN = document.querySelector(".hero__btn");

H_LEARN_MORE_BTN.addEventListener("click", (e) => {
  e.preventDefault();

  // FIXME: Obtiene las coordenadas de la posicion de la seccion features.
  // const featuresCoords = H_FEATURES_SECTION.getBoundingClientRect();
  // console.log(featuresCoords);

  // Obtiene las coordenadas de la posicion actual del usuario en la pagina en X y Y.
  // console.log("Current Scroll", window.pageXOffset, window.pageYOffset);

  // Obtiene el alto y ancho del elemento seleccionado
  // console.log(
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //scrolling
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
  // FIXME:
  // titulo.removeEventListener("mouseenter", alertWelcome);
};

// titulo.addEventListener("mouseenter", alertWelcome);

setTimeout(() => {
  // titulo.removeEventListener("mouseenter", alertWelcome);
}, 3000);

// Intercambiar la clase activa del boton

// 1.- Agregarle un Event Listener al contenedor padre de los botones
// 2.- Identificar los valores unicos de los botones para diferenciarlos:
// La clase de cada boton
// 3.- Leer la clase del boton presionado: 3a.- si ya contiene active, no hacer nada
// 3b.- Si no contiene la clase active, agregarsela y quitarle la clase al button
// que la tenia.

const H_OPERATIONS_BTNS_CONTAINER = document.querySelector(
  ".operations__buttons"
);
// console.log(H_OPERATIONS_BTNS_CONTAINER);

const H_ALL_TABS_OPERATIONS = document.querySelectorAll(".operations__details");
// console.log(H_ALL_TABS_OPERATIONS);

H_OPERATIONS_BTNS_CONTAINER.addEventListener("click", function (e) {
  const H_BTN_SELECTED = e.target.closest(".operations__button");
  if (!H_BTN_SELECTED) return;

  // const H_BTN_IMPOSTOR = [...this.children].find(
  //   (child) =>
  //     child.classList.contains("operations__button-active") &&
  //     child !== H_BTN_SELECTED
  // );

  [...this.children].forEach((child) =>
    child.classList.remove("operations__button-active")
  );

  H_BTN_SELECTED.classList.add("operations__button-active");

  const btnDataSet = H_BTN_SELECTED.dataset.tabs;
  console.log(btnDataSet);

  const chosenTab = document.querySelector(
    `#operations__details--${btnDataSet}`
  );
  console.log(chosenTab);

  H_ALL_TABS_OPERATIONS.forEach((child) =>
    child.classList.remove("operations--active")
  );

  chosenTab.classList.add("operations--active");
});

// Opacidad selectiva basada en enfoque actual
//

// Hacer event listeners que reciban mouse over y mouse out

const H_NAVBAR = document.querySelector("nav");
// console.log(H_NAVBAR);

// FIXME: El 1er parametro de event listener es el evento, y el 2do es una
// declaracion de una funcion que recibe el evento por default.
H_NAVBAR.addEventListener("mouseover", makeNavElBlink.bind(0.5));
// console.log(makeNavElBlink);
// FIXME: bind es el unico metodo compatible con la declaracion de la funcion dentro
// de un event listener.
H_NAVBAR.addEventListener("mouseout", makeNavElBlink.bind(1));

function makeNavElBlink(e) {
  // console.log("Mouse entro del header");
  // FIXME: this se convierte en el valor enviado por bind.
  // console.log(this);
  const H_FOCUSED_EL = e.target;
  // console.log(e);
  // console.log(e.target);
  // console.log(H_FOCUSED_EL);

  if (
    H_FOCUSED_EL.classList.contains("header__link") ||
    H_FOCUSED_EL.classList.contains("header__logo")
  ) {
    const aAllVisibleHeaderElements = [
      ...[...H_NAVBAR.children]
        .find((child) => child.classList.contains("header__links"))
        .querySelectorAll(".header__link"),
    ].concat(document.querySelector(".header__logo"));

    // console.log(aAllVisibleHeaderElements);

    aAllVisibleHeaderElements.forEach((child) => {
      if (child !== H_FOCUSED_EL) child.style.opacity = this;
    });
  }
}
