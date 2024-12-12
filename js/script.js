// ----> HAMBURGUER MENU <----

const H_HAMBURGUER_MENU = document.querySelector(
  ".header__hamburguer-menu-toggle-label"
);

H_HAMBURGUER_MENU.addEventListener("click", () => {
  H_HAMBURGUER_MENU.classList.toggle("active");
});

const formElement = document.getElementById("form__dialog");

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // PREVENTS FORM BTN DEFAULT BEHAVIOR
});

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
