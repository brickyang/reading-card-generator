'use strict';

function listenTitleInput() {
  const inputTitle = document.querySelector(`#${INPUT_TITLE_ID}`);
  const cardTitle = document.querySelector(`#${CARD_TITLE_ID}`);

  inputTitle.addEventListener('input', ev => {
    const value = ev.target.value;
    if (!value) FLAG[0] = 0;
    else FLAG[0] = 1;
    cardTitle.innerHTML = value;
  });
}
