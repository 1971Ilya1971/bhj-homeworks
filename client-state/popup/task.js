const popup = document.getElementById('subscribe-modal'),
popupClose = document.querySelector('#subscribe-modal .modal__close');

if (!getCookie('popup')) {
  popup.classList.add('modal_active');
}

popupClose.addEventListener('click', () => {
  document.cookie = 'popup=itwas';
  popup.classList.remove('modal_active');
});

function getCookie(name) {
  var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
