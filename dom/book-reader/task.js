let sizeArr = document.querySelectorAll('.font-size');
let reader = document.querySelector('.book');
sizeArr.forEach((elem, index) => {
    elem.addEventListener('click', (event) => {
         showSize(index);
         event.preventDefault();
    })
});

function showSize(index) {
    sizeArr.forEach((elem, i) => {
        if (index == i) {
            elem.classList.add('font-size_active'); 
        } else {
            elem.classList.remove('font-size_active');
        }
    })
    if (index == 0) {
        reader.classList.add('book_fs-small')
    } else if (index == 2) {
        reader.classList.remove('book_fs-small')
        reader.classList.add('book_fs-big')
    } else {
        reader.classList.remove('book_fs-small','book_fs-big' )
    }
}
