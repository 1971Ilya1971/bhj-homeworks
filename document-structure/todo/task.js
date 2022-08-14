let newTaskField = document.querySelector('.tasks__input');
let taskList = document.querySelector('.tasks__list');
let form = document.getElementById('tasks__form');
let tasks = document.querySelectorAll('.task');

form.onsubmit = function() {
  let text = newTaskField.value.trim();
  if (text) {
    taskList.insertAdjacentHTML("beforeend", `<div class="task">
    <div class="task__title">${text}</div>
    <a href="#" class="task__remove">
    &times;
    </a>
    </div>`)
      let remover = document.querySelectorAll('.task__remove');
      remover[remover.length -1].addEventListener('click', function(){
        this.parentElement.remove();
      })
         
   }
     newTaskField.value = '';
     return false;
};

