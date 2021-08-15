$(".home-carousel").owlCarousel({
  loop: true,
  nav: true,
  rtl: true,
  dots: true,
  navText: [
    "<i class='fas fa-arrow-right'></i>",
    "<i class='fas fa-arrow-left'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
  },
});
