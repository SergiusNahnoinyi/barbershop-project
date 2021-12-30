const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelectorAll('.slider-container');

let index = 0;

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const prepareCurrentSlide = index => {
  activeSlide(index);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index += 1;
    prepareCurrentSlide(index);
  }
};

const interval = setInterval(nextSlide, 2500);
