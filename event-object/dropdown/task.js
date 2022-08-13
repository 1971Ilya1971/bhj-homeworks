let dropdown = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");

dropdown.addEventListener('click', function() {
    list.classList.toggle('dropdown__list_active');
    
});

let dropdown__item = document.querySelector(".dropdown__item");
let dropdown__link = Array.from(document.querySelectorAll(".dropdown__link"));

// dropdown__item.addEventListener('click', () => {
//       if(dropdown.textContent ==  'aaa') {
//         dropdown.textContent = 'bbbbb';
//       } else (dropdown.textContent = 'aaa');
// });

dropdown__link.forEach((value) => {
    value.addEventListener('click', (event) => {
    event.preventDefault();
    dropdown.textContent = value.textContent
    list.classList.toggle('dropdown__list_active');
    });
    });