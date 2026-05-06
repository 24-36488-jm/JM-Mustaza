const carousel = document.querySelector(".carousel");

if (carousel) {
  const slides = carousel.querySelectorAll(".slide");
  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");

  let currentIndex = 0;
  let autoPlayInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Event listeners
  nextBtn?.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });


  // Pause on hover (nice UX)
  carousel.addEventListener("mouseenter", stopAutoPlay);
  carousel.addEventListener("mouseleave", startAutoPlay);

  // Init
  showSlide(currentIndex);
  startAutoPlay();
}


// ===== TABS =====
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.tab;

    // Remove active from all
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // Add active to selected
    tab.classList.add("active");

    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});