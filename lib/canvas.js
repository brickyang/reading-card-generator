'use strict';

function listenDownload() {
  const dlBtn = document.querySelector(`#${DL_BTN_ID}`);
  dlBtn.addEventListener('click', async ev => {
    ev.preventDefault();
    if (!ifValid()) return;

    const canvas = await generateScreenshot();
    const dlHide = document.querySelector(`#${DL_NODE_ID}`);
    dlHide.href = canvas.toDataURL();
    dlHide.click();
  });
}

function drawRoundedRec(origCanvas, scale) {
  const roundCanvas = document.createElement('canvas');
  roundCanvas.width = DOM_WIDTH * scale;
  roundCanvas.height = DOM_HEIGHT * scale;

  const roundCtx = roundCanvas.getContext('2d');
  const roundRadius = RADIUS * scale;
  const x1 = roundRadius;
  const y1 = 0;
  const x2 = x1 + roundCanvas.width - 2 * roundRadius;
  const y2 = y1;
  const x3 = x2 + roundRadius;
  const y3 = roundRadius;
  const x4 = x3;
  const y4 = y3 + roundCanvas.height - 2 * roundRadius;
  const x5 = x2;
  const y5 = y4 + roundRadius;
  const x6 = x1;
  const y6 = y5;
  const x7 = x6 - roundRadius;
  const y7 = y4;
  const x8 = x7;
  const y8 = y3;
  roundCtx.beginPath();
  roundCtx.moveTo(x1, y1);
  roundCtx.lineTo(x2, y2);
  roundCtx.quadraticCurveTo(x3, y2, x3, y3);
  roundCtx.lineTo(x4, y4);
  roundCtx.quadraticCurveTo(x4, y5, x5, y5);
  roundCtx.lineTo(x6, y6);
  roundCtx.quadraticCurveTo(x7, y6, x7, y7);
  roundCtx.lineTo(x8, y8);
  roundCtx.quadraticCurveTo(x8, y1, x1, y1);
  roundCtx.clip();
  roundCtx.drawImage(origCanvas, 0, 0);

  return roundCanvas;
}

function drawShadow(origCanvas) {
  const bgdCanvas = document.createElement('canvas');
  bgdCanvas.width = origCanvas.width + MARGIN_WIDTH;
  bgdCanvas.height = origCanvas.height + MARGIN_HEIGHT;
  const ctx = bgdCanvas.getContext('2d');

  ctx.shadowOffsetX = SHADOW_X;
  ctx.shadowOffsetY = SHADOW_Y;
  ctx.shadowBlur = SHADOW_BLUR;
  ctx.shadowColor = SHADOW_COLOR;
  ctx.drawImage(origCanvas, MARGIN_WIDTH / 2, 0);

  return bgdCanvas;
}

async function generateScreenshot() {
  const htmlDom = document.querySelector(`#${HTML_ID}`);
  const scale = getScale();

  const origCanvas = await html2canvas(htmlDom, { scale });
  const roundCanvas = drawRoundedRec(origCanvas, scale);
  return drawShadow(roundCanvas);
}

function ifValid() {
  if (FLAG[0] === 0) {
    alert('Invalid Title!');
  } else if (FLAG[1] === 0) {
    alert('Invalid File!');
  }

  return FLAG[0] + FLAG[1] === 2;
}

function getScale() {
  if (TARGET_WIDTH > DOM_WIDTH) {
    return Math.ceil(TARGET_WIDTH / DOM_WIDTH);
  }
  return 1;
}
