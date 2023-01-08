window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');

  loader.classList.add('loader-hidden');
  loader.addEventListener('transitionend', () => {
    document.body.removeChild(loader);
  });
});





// Landing Slider
const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const dotContainer = document.querySelector('.dots');

const maxSlide = slides.length;
let curSlide = 0;
var counter = 0;

landingCount = document.getElementById('landing-image-count');
landingTitle = document.getElementById('landing-title');
landingInfo = document.getElementById('landing-info');

var titles = [
  "The Colosseum",
  "Wooden Tiles",
  "False Ceiling",
]

var info = [
  "Pinegrove School",
  "Dummy Text",
  "Dummy Text",
]

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
const updateLandingData = function () {
  landingCount.innerHTML = `0${curSlide + 1}`;
  landingTitle.innerHTML = titles[curSlide];
  landingInfo.innerHTML = info[curSlide];
}
btnNext.addEventListener('click', function () {
  if (curSlide == maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
  updateLandingData();
});

btnPrev.addEventListener('click', function () {
  if (curSlide == 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
  updateLandingData();
});

//Services Offered Carousel
const serSlides = document.querySelectorAll('.ser-img');
const serMaxSlide = serSlides.length;

serTitle = document.getElementById('serTitle');
serInfo = document.getElementById('serText');

var services = [
  "Wooden Flooring",
  "False Ceiling",
  "Wooden Tiles",
  "Dummy Text"
]

var serDesc = [
  "Lorem ipsum dolor sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipum dolor sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipsiuum dol sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipsiuum dol sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
]

let serSlideCounter = 0;

serSlides.forEach(
  (serSlide, serIndex) => {
    serSlide.style.left = `${serIndex * 110}%`
  }
);

const updateServicesInfo = function () {
  serTitle.innerHTML = services[serSlideCounter];
  serInfo.innerHTML = serDesc[serSlideCounter];
}

const serSlideImage = function () {
  serSlides.forEach(
    (serSlide) => {
      serSlide.style.transform = `translateX(-${serSlideCounter * 110}%)`
    }
  )
};

const goSerNext = function () {
  if (serSlideCounter != serMaxSlide - 1) {
    serSlideCounter++;
  } else {
    serSlideCounter = 0;
  }
  serSlideImage();
  updateServicesInfo();
}

//Slides will slide automatically
let autoSerSlide = setInterval(goSerNext, 4000);


// const imageWrapper = document.querySelector('.image-wrapper')
// const imageItems = document.querySelectorAll('.image-wrapper > *')
// let curImage = imageItems[1];
// const imageLength = imageItems.length

// const perView = 3;
// //If screen width is less than 460 px then change perview to 1
// if (window.innerWidth < 460) {
//   perView = 1;
// }

// let totalScroll = 0
// const delay = 5000

// imageWrapper.style.setProperty('--per-view', perView)
// for (let i = 0; i < perView; i++) {
//   imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
//   curImage.classList.toggle('.serimg-active');
// }

// let autoScroll = setInterval(scrolling, delay)

// function scrolling() {
//   totalScroll++
//   if (totalScroll == imageLength + 1) {
//     clearInterval(autoScroll)
//     totalScroll = 1
//     imageWrapper.style.transition = '0s'
//     imageWrapper.style.left = '0'
//     autoScroll = setInterval(scrolling, delay)
//   }
//   const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
//   imageWrapper.style.left = `-${totalScroll * widthEl}px`
//   imageWrapper.style.transition = '0.5s'
// }


//Product Slider
const productSlides = document.querySelectorAll('.product-slide');
const productBtnPrev = document.querySelector('.product-btn-prev');
const productBtnNext = document.querySelector('.product-btn-next');

const prodMaxSlide = productSlides.length;

productTitle = document.getElementById('product-title');
productInfo = document.getElementById('product-info');

var products = [
  "Wooden Flooring",
  "False Ceiling",
  "Wooden Tiles"
]

var productDesc = [
  "Lorem ipsum dolor sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipum dolor sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipsiuum dol sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
]

let productSlideCounter = 0;

productSlides.forEach(
  (prodSlide, prodIndex) => {
    prodSlide.style.left = `${prodIndex * 110}%`
  }
);

const updateProductInfo = function () {
  productTitle.innerHTML = products[productSlideCounter];
  productInfo.innerHTML = productDesc[productSlideCounter];
}

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
  updateProductInfo();
}
productBtnNext.addEventListener('click', goProdNext);

const goProdPrev = function () {
  if (productSlideCounter != 0) {
    productSlideCounter--;
  } else {
    productSlideCounter = prodMaxSlide - 1;
  }
  prodSlideImage();
  updateProductInfo();
}
productBtnPrev.addEventListener('click', goProdPrev);

//Slides will slide automatically
let autoProdSlide = setInterval(goProdNext, 5000);

//Reviews Slider
const reviewSlides = document.querySelectorAll('.c_review');
const reviewBtnPrev = document.querySelector('.review-btn-prev');
const reviewBtnNext = document.querySelector('.review-btn-next');

reviewCount = document.getElementById('review-count');

const reviewMaxSlide = reviewSlides.length;

let reviewSlideCounter = 0;

reviewSlides.forEach(
  (reviewSlide, reviewIndex) => {
    reviewSlide.style.left = `${reviewIndex * 150}%`
  }
);

const reviewSlideImage = function () {
  reviewSlides.forEach(
    (reviewSlide) => {
      reviewSlide.style.transform = `translateX(-${reviewSlideCounter * 150}%)`
    }
  )
  updateReviewCount();
};

const updateReviewCount = function () {
  reviewCount.innerHTML = reviewSlideCounter + 1;
};

const goReviewNext = function () {
  if (reviewSlideCounter != reviewMaxSlide - 1) {
    reviewSlideCounter++;
  } else {
    reviewSlideCounter = 0;
  }
  reviewSlideImage();
}
reviewBtnNext.addEventListener('click', goReviewNext);

const goReviewPrev = function () {
  if (reviewSlideCounter != 0) {
    reviewSlideCounter--;
  } else {
    reviewSlideCounter = reviewMaxSlide - 1;
  }
  reviewSlideImage();
}
reviewBtnPrev.addEventListener('click', goReviewPrev);

//Automatic Slider for Reviews
let autoReviewSlide = setInterval(goReviewNext, 6000);