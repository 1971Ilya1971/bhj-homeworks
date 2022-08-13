const signIn = document.getElementById('signin'),
    form = document.querySelector('#signin form'),
    welcome = document.getElementById('welcome'),
    userId = document.getElementById('user_id'),
    exit = document.getElementById('exit__btn');

if (localStorage.getItem('userId')) {
    welcome.classList.add('welcome_active');
    userId.innerText = localStorage.getItem('userId');
} else {
    signIn.classList.add('signin_active');
}

form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE && xhr.status == 200) {

            const status = JSON.parse(xhr.responseText);
            if (status.success === true) {
                signIn.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = status.user_id;

                localStorage.setItem('userId', status.user_id);
            } else {
                alert('Неверный логин/пароль');
            }

        }
    });

    [...form.querySelectorAll('input')].forEach(input => input.value = ''); // очистка полей

    e.preventDefault();
});

// деавторизация
exit.addEventListener('click', () => {
    localStorage.removeItem('userId');
    window.location.reload();
});
