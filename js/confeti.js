const body = document.body;
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 5) + 's';
  heart.innerText = '❤️';
  body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 500);
