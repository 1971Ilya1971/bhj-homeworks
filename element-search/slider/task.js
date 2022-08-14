let buttons = document.querySelectorAll('.slider__arrow');
slides = Array.from(document.querySelectorAll('.slider__item'))
slidesCount = slides.length
let dots = document.querySelectorAll('.slider__dot');

function showSlides(direction) {
    
    activeIndex = slides.findIndex((elem) => {
      if (elem.classList.contains('slider__item_active') == true) {
        return true
      }
    });
    console.log(activeIndex);
    let nextIndex
    if (direction == 1) {
      if (activeIndex == slidesCount - 1) {
        nextIndex = 0;
        } else {
          nextIndex = activeIndex + 1;
        }
        
    } else {
      if (activeIndex == 0) {
        nextIndex = slidesCount - 1;
        } else {
          nextIndex = activeIndex - 1;
        } 
    }
      slides[activeIndex].classList.remove('slider__item_active');
      slides[nextIndex].classList.add('slider__item_active');
      dots[activeIndex].classList.remove('slider__dot_active');
      dots[nextIndex].classList.add('slider__dot_active');
      console.log(nextIndex);
    }

      buttons.forEach((elem, index) => {
        elem.addEventListener('click', () => {
          showSlides(index)   
    })
})

dots.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    showDot(index)   
    })
})

function showDot(index) {
  slides.forEach((elem, i) => {
    if (index == i) {
      elem.classList.add('slider__item_active'); 
      } else {
        elem.classList.remove('slider__item_active');
      }
    })
    dots.forEach((elem, i) => {
      if (index == i) {
        elem.classList.add('slider__dot_active'); 
        } else {
          elem.classList.remove('slider__dot_active');
        }
    })
}
