function sliderPlugin(slide) {
  const slides = document.querySelectorAll('.slide');

slides[slide].classList.add('--active');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('--active');
  })
}

const clearActiveClasses = () => {
  slides.forEach((slide) => {
    slide.classList.remove('--active');
  })
};
}

sliderPlugin(2);
