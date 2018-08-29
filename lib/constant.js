'use strict';

const TARGET_DOM_ID = 'card';
const DL_BTN_ID = 'dl-btn';
const DL_HIDDEN_NODE_ID = 'dl-node';
const TITLE_INPUT_ID = 'title-input';
const FILE_INPUT_ID = 'file-input';
const CARD_IMAGE_ID = 'card-image';
const CARD_TITLE_ID = 'card-title';

const targetDom = document.querySelector(`#${TARGET_DOM_ID}`);
const dlBtn = document.querySelector(`#${DL_BTN_ID}`);
const dlHidden = document.querySelector(`#${DL_HIDDEN_NODE_ID}`);
const titleInput = document.querySelector(`#${TITLE_INPUT_ID}`);
const fileInput = document.querySelector(`#${FILE_INPUT_ID}`);
const cardImage = document.querySelector(`#${CARD_IMAGE_ID}`);
const cardTitle = document.querySelector(`#${CARD_TITLE_ID}`);

const FLAG = [0, 0];
