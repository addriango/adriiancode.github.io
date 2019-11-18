const nav = document.querySelector(".navigation");
const boton = document.querySelector("#burger-menu");

boton.addEventListener("click", show_nav);

function show_nav() {
  if (nav.classList.contains("is-active")) {
    nav.classList.remove("is-active");
  } else {
    nav.classList.add("is-active");
  }
}
