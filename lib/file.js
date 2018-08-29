'use strict';

function listenFileInput() {
  const fileInput = document.querySelector(`#${INPUT_FILE_ID}`);
  fileInput.addEventListener('change', ev => {
    const file = ev.target.files[0];
    const image = new Image();
    image.onload = loadImage;
    image.src = window.URL.createObjectURL(file);
  });
}

function loadImage() {
  const src = cropImage(this);
  document.querySelector(`#${CARD_IMAGE_ID}`).src = src;
  FLAG[1] = 1;
}

function cropImage(image) {
  const { width, height, cropX, cropY } = getCropArgs(image);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, cropX, cropY, width, height, 0, 0, width, height);

  return canvas.toDataURL();
}

function getCropArgs(image) {
  let width = image.width;
  let height = Math.round(width * TARGET_RATIO);
  let cropX = 0;
  let cropY = Math.round((image.height - height) / 2);

  if (image.height < height) {
    height = image.height;
    width = Math.round(height / TARGET_RATIO);
    cropX = Math.round((image.width - width) / 2);
    cropY = 0;
  }

  return { width, height, cropX, cropY };
}
