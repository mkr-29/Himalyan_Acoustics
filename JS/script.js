window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');

  loader.classList.add('loader-hidden');
  loader.addEventListener('transitionend', () => {
    document.body.removeChild(loader);
  });
});

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#FF2C3A ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


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

const serBtnNext = document.getElementById('services-next')
const serBtnPrev = document.getElementById('services-prev')

serTitle = document.getElementById('serTitle');
serInfo = document.getElementById('serText');

var services = [
  "Auditoriums",
  "Banquet Halls",
  "Conference Hall",
  "Disco's & Lounges",
  "Gymnasiums",
  "Home Theaters",
  "Multipurpose Hall",
  "Offices",
  "Studios",
  "Restaurants",
  "Worship Places"
]

var serDesc = [
  "We have to take care the stage differently\, where most of the sounds will be played.",
  "Banquet Halls are the places, which are built to host thefunctions like marriages, events, parties etc.",
  "Conference halls are basically meant for the exchange of communication.",
  "Discotheques and lounges are comparatively small as compare to the banquet halls.",
  "Gymnasiums are the multi-use spaces and are used forsporting events.",
  "Home Theater is an area where most of the people give the least attention on acoustics.",
  "Multipurpose hall as an area which could be used for multiple kind of activities.",
  "Offices: Bangalore; Gurgaon; Bihar, Bhagalpur; Office Jodhpur; OSTRO Delhi;",
  "Do you know the Elementor image box height? Offering the best image box wordpress plugin.",
  "Offering the Elementor image box with button. We are offering image box carousel elementor",
  "Offering the Elementor image box with button. We are offering image box carousel elementor"
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
serBtnNext.addEventListener('click', goSerNext);

const goSerPrev = function () {
  if (serSlideCounter != 0) {
    serSlideCounter--;
  } else {
    serSlideCounter = serMaxSlide - 1;
  }
  serSlideImage();
  updateServicesInfo();
}
serBtnPrev.addEventListener('click', goSerPrev);

//Product Slider
const productSlides = document.querySelectorAll('.product-slide');
const productBtnPrev = document.querySelector('.product-btn-prev');
const productBtnNext = document.querySelector('.product-btn-next');

const prodMaxSlide = productSlides.length;

productTitle = document.getElementById('product-title');
productInfo = document.getElementById('product-info');

var products = [
  "CEILING",
  "WALLS",
  "FLOOR",
  "ROOFS",
  "WINDOWS",
  "PARTITIONS"
]

var productDesc = [
  "Lorem ipsum dolor sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipum dolor sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipsiuum dol sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipsiuum dol sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
  "Lorem ipsiuum dol sit amet\, consectetur adipiscing elit\,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
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
// let autoProdSlide = setInterval(goProdNext, 5000);

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
let autoReviewSlide = setInterval(goReviewNext, 66000);


//Prime Partners Slide
const primeSlides = document.querySelectorAll('.prime-partner-image');

const primeMaxSlide = primeSlides.length;

let primeSlideCounter = 0;

primeSlides.forEach(
  (primeSlide, primeIndex) => {
    primeSlide.style.left = `${primeIndex * 60}%`
  }
);

const primeSlideImage = function () {
  primeSlides.forEach(
    (primeSlide) => {
      primeSlide.style.transform = `translateX(-${primeSlideCounter * 60}%)`
    }
  )
};

const goPrimeNext = function () {
  if (primeSlideCounter != primeMaxSlide - 1) {
    primeSlideCounter++;
  } else {
    primeSlideCounter = 0;
  }
  primeSlideImage();
}

let autoPrimeSlide = setInterval(goPrimeNext, 500);