const progress = document.getElementById('progress');
const send = document.getElementById('send');
const form = document.getElementById('form');
const inputWrapperButton = document.querySelector('.input__wrapper-button');

inputWrapperButton.addEventListener('click', () => {
  progress.setAttribute('value', 0);
});

send.addEventListener('click', () => {
  const fileDesc = document.querySelector('.input__wrapper-desc');

  if (fileDesc.textContent) {
    upload();
  };
    return false;
  });

const upload = function() {
  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);

  xhr.upload.onprogress = (evt) => {
    progress.setAttribute('value', evt.loaded/evt.total);
  };
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
  };
