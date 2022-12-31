function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.120850),
    zoom: 5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
};

// Landing Slider
const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

btnPrev.addEventListener('click', goPrev);
btnNext.addEventListener('click', goNext);

var counter = 0;
slides.forEach(
  (slide, index) => {
    slide.style.left = `${index * 100}%`
  }
);

const goNext = function () {
  counter++;
  slideImage();
}
const goPrev = function () {
  counter--;
  slideImage();
}

const slideImage = function () {
  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`
    }
  )
};
