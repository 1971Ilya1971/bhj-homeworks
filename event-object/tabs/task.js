let tabsArr = document.querySelectorAll('.tab');

tabsArr.forEach((elem,index)=> {

  elem.addEventListener('click',()=>{
    tabsArr.forEach((tab)=>{
      tab.classList.remove('tab_active')
      })
      elem.classList.add('tab_active');
        
      tabContents = document.querySelectorAll('.tab__content');
      tabContents.forEach((element) => {
        element.classList.remove('tab__content_active');
        })
        tabContents[index].classList.add('tab__content_active');
        console.log(tabContents)
    })
})

