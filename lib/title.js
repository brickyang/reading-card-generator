'use strict';

function listenTitleInput() {
  titleInput.addEventListener('input', ev => {
    const value = ev.target.value;
    if (!value) FLAG[0] = 0;
    else FLAG[0] = 1;
    cardTitle.innerHTML = value;
  });
}
