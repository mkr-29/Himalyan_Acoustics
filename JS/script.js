// Landing Slider
const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const dotContainer = document.querySelector('.dots');

const maxSlide = slides.length;
let curSlide = 0;
var counter = 0;

slides.forEach((s, i) => (s.style.transform = `translateY(${100 * i}%)`));


// Dot working logic
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML('beforeend', `<button class = "dots__dot" data-slide = "${i}"></button>`);
  })
};
createDots();

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
  };
});
const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove
      ('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
}
activateDot(0);


// Slider Logic
const goToSlide = function (slide) {
  slides.forEach((s, i) => (s.style.transform = `translateY(${100 * (i - slide)}%)`));

};
btnNext.addEventListener('click', function () {
  if (curSlide == maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
});

btnPrev.addEventListener('click', function () {
  if (curSlide == 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
});


//Services Offered Carousel
const imageWrapper = document.querySelector('.image-wrapper')
const imageItems = document.querySelectorAll('.image-wrapper > *')
let curImage = imageItems[1];
const imageLength = imageItems.length
const perView = 3
let totalScroll = 0
const delay = 5000

imageWrapper.style.setProperty('--per-view', perView)
for (let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
  curImage.classList.toggle('.serimg-active');
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
  totalScroll++
  if (totalScroll == imageLength + 1) {
    clearInterval(autoScroll)
    totalScroll = 1
    imageWrapper.style.transition = '0s'
    imageWrapper.style.left = '0'
    autoScroll = setInterval(scrolling, delay)
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
  imageWrapper.style.left = `-${totalScroll * widthEl}px`
  imageWrapper.style.transition = '0.5s'
}


//Product Slider
const productSlides = document.querySelectorAll('.product-slide');
const productBtnPrev = document.querySelector('.product-btn-prev');
const productBtnNext = document.querySelector('.product-btn-next');

const prodMaxSlide = productSlides.length;

let productSlideCounter = 0;

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
  if (productSlideCounter != prodMaxSlide - 1) {
    productSlideCounter++;
  } else {
    productSlideCounter = 0;
  }
  prodSlideImage();
}
productBtnNext.addEventListener('click', goProdNext);

const goProdPrev = function () {
  if (productSlideCounter != 0) {
    productSlideCounter--;
  } else {
    productSlideCounter = prodMaxSlide - 1;
  }
  prodSlideImage();
}
productBtnPrev.addEventListener('click', goProdPrev);