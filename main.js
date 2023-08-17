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