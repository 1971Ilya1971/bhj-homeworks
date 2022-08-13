let div = document.querySelectorAll('.reveal');
document.addEventListener('scroll', () => {
    div.forEach((elem) => {
    const viewportHeight = window.innerHeight;
    const elementTop = elem.getBoundingClientRect().top;
    if (elementTop < viewportHeight) {
            elem.classList.add('reveal_active');
        } else {
            elem.classList.remove('reveal_active');
        }
       
})
});
