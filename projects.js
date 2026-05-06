const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".card");

let index = 0;
let cardWidth = 320; // width + gap

/* Clone first cards for infinite loop */
cards.forEach(card => {
  let clone = card.cloneNode(true);
  slider.appendChild(clone);
});

function updateSlide() {
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

function slideRight() {
  index++;
  if (index >= cards.length) {
    index = 0;
  }
  updateSlide();
}

function slideLeft() {
  index--;
  if (index < 0) {
    index = cards.length - 1;
  }
  updateSlide();
}
