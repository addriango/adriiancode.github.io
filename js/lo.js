const mobile = window.matchMedia("screen and (max-width:425px)");
mobile.addListener(validation);

const nav = document.querySelector(".navigation");
const boton = document.querySelector("#burger-menu");

function validation(event) {
  if (event.matches) {
    boton.addEventListener("click", show_nav);
  } else {
    boton.removeEventListener("click", show_nav);
  }
}

validation(mobile);

function show_nav() {
  if (nav.classList.contains("is-active")) {
    nav.classList.remove("is-active");
  } else {
    nav.classList.add("is-active");
  }
}
