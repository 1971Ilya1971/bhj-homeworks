let caseArr = Array.from(document.querySelectorAll('.rotator__case'));

let rotate = function() {
    let activeCaseIndex = caseArr.findIndex((elem, )=> {
   return elem.classList.contains('rotator__case_active')
});

caseArr[activeCaseIndex].classList.remove('rotator__case_active');

if (activeCaseIndex < (caseArr.length - 1)) {
    caseArr[activeCaseIndex + 1].classList.add('rotator__case_active');
} else {
    caseArr[0].classList.add('rotator__case_active'); 
} 
}

let timer = setInterval(rotate,1000)

