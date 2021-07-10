'use strict';

const sliderContainer = document.querySelector('.slider-container');
const images = sliderContainer.querySelectorAll('img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 1;

sliderContainer.insertAdjacentHTML('beforeend', images[0].outerHTML);
sliderContainer.insertAdjacentHTML(
  'afterbegin',
  images[images.length - 1].outerHTML
);

sliderContainer.style.transform = `translateX(-100%)`;

const sliderNext = () => {
  if (index >= images.length) {
    index = 1;
    sliderContainer.style.transition = 'none';
  } else {
    index++;
    sliderContainer.style.transition = `all 0.3s linear`;
  }
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;
};

const sliderPrev = () => {
  if (index < 1) {
    index = images.length - 1;
    sliderContainer.style.transition = 'none';
  } else {
    index--;
    sliderContainer.style.transition = `all 0.3s linear`;
  }
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;
};

next.addEventListener('click', sliderNext);
prev.addEventListener('click', sliderPrev);
