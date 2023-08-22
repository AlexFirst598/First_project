// модальное окно
const button = document.querySelector('#OpenGui');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-img');
const InputActive = document.querySelector('#InputFocus');


button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal-active');
    InputActive.focus();
});

close.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-active');
});

// слайдер

const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

// выключение всех слайдов
function hideSlides() {
    slides.forEach(slide => {
        slide.classList.remove('slide-active');
    });
}

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        hideSlides();
        slides.forEach(slide => {
            if (slide.getAttribute('data-slider') == dot.getAttribute('data-toggle')) {
                slide.classList.add('slide-active');
            }
        });
    });
});