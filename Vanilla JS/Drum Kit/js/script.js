window.addEventListener('keypress', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  if (!key.classList.contains('playing')) key.classList.add('playing');
  else key.classList.remove('playing');
});

function removeTransition(e) {
  console.log(e);
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});
