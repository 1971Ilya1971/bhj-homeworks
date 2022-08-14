let checkboxArr = document.querySelectorAll('.interest__check');
let itemsArr = document.querySelectorAll('.interest_active');



checkboxArr.forEach((elem)=> {
  elem.addEventListener('click',()=>{
    if (elem.closest('.interests_active') == null) {
      // console.log(elem.parentElement);            
      elem.parentElement.nextElementSibling.querySelectorAll('input').forEach(el => {
        if (elem.checked) {
           nel.checked = true
           } else {
             el.checked = false
           }
        })

        // console.log('Жмакнули родича')
        
      }
   })  
})
