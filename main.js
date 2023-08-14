const button = document.querySelector('.btn-js');

button.classList.remove('btn-js');
button.classList.add('new_class');
button.classList.toggle('new_class');

button.addEventListener('click', (e) => {
    e.preventDefault();
    button.classList.toggle('open');
});

const btns = document.querySelectorAll('.btn');
console.log(btns);

btns.forEach(btn => {
    btn.classList.add('new_class');
});

console.log(btns);