// Landing Slider
const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

var counter = 0;
slides.forEach(
  (slide, index) => {
    slide.style.bottom = `${index * 100}%`
  }
);

const slideImage = function () {
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateY(${counter * 100}%)`
    }
  )
};

const goNext = function () {
  counter++;
  slideImage();
}
btnNext.addEventListener('click', goNext);

const goPrev = function () {
  counter--;
  slideImage();
}
btnPrev.addEventListener('click', goPrev);


//Product Slider
const productSlides = document.querySelectorAll('.product-slide');
const productBtnPrev = document.querySelector('.product-btn-prev');
const productBtnNext = document.querySelector('.product-btn-next');


var productSlideCounter = 0;

productSlides.forEach(
  (prodSlide, prodIndex) => {
    prodSlide.style.left = `${prodIndex * 110}%`
  }
);

const prodSlideImage = function () {
  productSlides.forEach(
    (prodSlide) => {
      prodSlide.style.transform = `translateX(-${productSlideCounter * 100}%)`
    }
  )
};
const goProdNext = function () {
  productSlideCounter++;
  prodSlideImage();
}
productBtnNext.addEventListener('click', goProdNext);

const goProdPrev = function () {
  productSlideCounter--;
  prodSlideImage();
}
productBtnPrev.addEventListener('click', goProdPrev);
