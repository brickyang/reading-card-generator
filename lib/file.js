'use strict';

function listenFileInput() {
  fileInput.addEventListener('change', ev => {
    const file = ev.target.files[0];
    if (!file) return;

    loadImage(file);
  });
}

function loadImage(file) {
  const image = new Image();

  image.onload = function() {
    const src = cropImage(this);
    cardImage.src = src;
    FLAG[1] = 1;
  };

  image.src = window.URL.createObjectURL(file);
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
