let selectItems = document.querySelectorAll('.has-tooltip');
tooltip = document.createElement('div');
tooltip.className = 'tooltip';

selectItems.forEach((elem) => {
  let coords = elem.getBoundingClientRect();
  let left = coords.left;
  let top = coords.top - tooltip.offsetHeight + 20;
  elem.addEventListener('click', stopDefAction, false)
    
  function stopDefAction(evt) {
    if(tooltip.innerHTML != elem.title) {
      tooltip.innerHTML = elem.title
      tooltip.classList.add('tooltip_active')
      } else {
        tooltip.classList.remove('tooltip_active')
        tooltip.innerHTML = '';
      }
         
        evt.preventDefault();
        elem.insertAdjacentElement("beforebegin", tooltip)
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        console.log(tooltip)
        return tooltip;  
    }
     
});
