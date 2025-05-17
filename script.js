document.addEventListener("DOMContentLoaded", function () {
  const flames = document.querySelectorAll('.flame, .flame2, .flame3');
  const text = document.querySelector('.text');
  const balloonsContainer = document.getElementById('balloons-container');

  document.querySelector('.candles').addEventListener('click', () => {
    flames.forEach(flame => flame.style.opacity = '0');
    text.style.opacity = '1';
    text.style.top = '-120px';

    launchBalloonsAndEmojis();
  });

  function launchBalloonsAndEmojis() {
    const icons = ['🎈', '🎉', '🎊', '💖', '✨', '🥳', '🌟'];
    for (let i = 0; i < 20; i++) {
      const span = document.createElement('span');
      span.className = i % 2 === 0 ? 'balloon' : 'emoji';
      span.textContent = icons[Math.floor(Math.random() * icons.length)];
      span.style.left = Math.random() * 100 + 'vw';
      span.style.animationDelay = Math.random() * 2 + 's';
      balloonsContainer.appendChild(span);

      setTimeout(() => {
        span.remove();
      }, 5000);
    }
  }
});
