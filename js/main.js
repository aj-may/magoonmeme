const canvas = document.getElementById('meme');
const magoonPhoto = document.getElementById('magoon-photo');
const captionForm = document.getElementById('caption-form');
const downloadLink = document.getElementById('download-link');
const ctx = canvas.getContext("2d");

function updateCanvas() {
  canvas.width = magoonPhoto.width;
  canvas.height = magoonPhoto.height;
  ctx.fillStyle = 'white';
  ctx.font = '36pt impact';
  ctx.lineWidth = 10;
  ctx.miterLimit=2;
  ctx.textAlign = "center";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(magoonPhoto, 0, 0);
  ctx.strokeText(captionForm.top.value.toUpperCase(), canvas.width/2, 80);
  ctx.fillText(captionForm.top.value.toUpperCase(), canvas.width/2, 80);
  ctx.strokeText(captionForm.bottom.value.toUpperCase(), canvas.width/2, 550);
  ctx.fillText(captionForm.bottom.value.toUpperCase(), canvas.width/2, 550);
  downloadLink.href = canvas.toDataURL();
}

magoonPhoto.addEventListener('load', updateCanvas);
updateCanvas();
