let taskRequest = new XMLHttpRequest();
let title = document.querySelector('.poll__title');
let buttons = document.querySelector('.poll__answers');

taskRequest.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
taskRequest.send();

taskRequest.onreadystatechange = function() {
  if (taskRequest.readyState === 4) {
    title.innerHTML = JSON.parse(taskRequest.responseText).data.title
      
    let itemsArr =  JSON.parse(taskRequest.responseText).data.answers
    itemsArr.forEach(elem => {
      let button = document.createElement('button');
      button.className = 'poll__answer';   
      button.innerHTML = elem;
      buttons.append(button)  
      button.onclick = function() {
        alert('Спасибо, Ваш голос засчитан!');
         };      
      });
   };
};
