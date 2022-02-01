import anime from 'animejs/lib/anime.es.js'; // cette ligne est importante pour le set up de anime.es.js

function aleatronome() {
anime({
  targets: 'path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function (el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});
};

export { aleatronome };