import Glide from "@glidejs/glide";

new Glide(".glide", {
  gap: 45,
  startAt: 0,
  perView: 4,
  breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
}).mount();
