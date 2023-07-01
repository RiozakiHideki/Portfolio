///////////////// carousel-inner //////////////////////////

const carousel_prev = document.getElementById("prev_btn");
const carousel_next = document.getElementById("next_btn");
const carousel = document.getElementById("carousel");

var offset = 0;

carousel_next.addEventListener("click", function () {
  offset = offset - 420;
  if (offset < -420 * 4) {
    carousel.style.marginLeft = "";
    offset = 0;
    return;
  }
  carousel.style.marginLeft = offset + "px";
});

carousel_prev.addEventListener("click", function () {
  offset = offset + 420;
  if (offset > 0) {
    carousel.style.marginLeft = "";
    offset = 0;
    return;
  }
  carousel.style.marginLeft = offset + "px";
});

///////////////// carousel-inner //////////////////////////
