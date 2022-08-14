let clickerCounter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");
let counter = 0;

cookie.onclick = function() {
  counter++;
  clickerCounter.textContent = counter;
  if (counter % 2 == 0) {
    cookie.width = 200;                  
    } else {
      cookie.width = 180;
    }
  }
