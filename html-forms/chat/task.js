let chat = document.querySelector('.chat-widget');
let textBox = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
let robotMessages = ['Здорова','Нет не надо','Как сам','Секс и косметику не предлагать','Ок'];
document.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
})

document.addEventListener('keydown', e => {
    if (e.keyCode == 13) {
      let message = textBox.value;
      var time = new Date();
      var timeStr = time.toLocaleTimeString();
      let rand = Math.floor(Math.random()*robotMessages.length);
      let rValue = robotMessages[rand];
      if (message != '') {
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${timeStr}</div>
          <div class="message__text">
            ${message}
          </div>
        </div>
      `;
      textBox.value = '';
      messages.innerHTML += `
      <div class="message ">
        <div class="message__time">${timeStr}</div>
        <div class="message__text">
          ${rValue}
        </div>
      </div>
    `;
    

    } else {
    alert('Строка пуста')
}      
    }
});

