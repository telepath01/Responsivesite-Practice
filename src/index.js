'use strict';
const triggerDiv = document.querySelector('.trigger');
triggerDiv.addEventListener('click', (event) => {
  if (triggerDiv.className === 'trigger') {
    triggerDiv.className = 'trigger clicked';
  } else triggerDiv.className = 'trigger';
});
