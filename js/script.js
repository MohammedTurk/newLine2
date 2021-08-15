// Toggler Navbar Responsive
let btnBurger = document.querySelector(".burger-button"),
  modal = document.querySelector(".modal-container"),
  navMenu = document.querySelector(".nav-menu");

btnBurger.addEventListener("click", () => {
  modal.classList.toggle("active");
  navMenu.classList.toggle("active");
});
modal.addEventListener("click", () => {
  modal.classList.toggle("active");
  navMenu.classList.toggle("active");
});
navMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

$(window).on("load", function () {
  removeLoader();
});
function removeLoader() {
  $("#loading-wrapper").fadeOut(400, function () {
    $("#loading-wrapper").remove();
  });
}
