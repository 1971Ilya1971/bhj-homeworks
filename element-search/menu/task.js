let menuLink = Array.from(document.getElementsByClassName('menu__link'));

menuLink.forEach(item => item.addEventListener('click', function(evt) {
  if ((item.parentElement.getElementsByClassName('menu_sub')).length == 1) {
    evt.preventDefault();
    let menuSub = Array.from(item.parentElement.getElementsByClassName('menu_sub'));
    menuSub.forEach(sub => sub.classList.toggle('menu_active'));
    }
}));
