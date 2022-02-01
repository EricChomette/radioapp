import anime from 'animejs/lib/anime.es.js'; // cette ligne est importante pour le set up de anime.es.js

function sound() {
anime({
  targets: '#soundcross',
  strokeDashoffset: function (el) {
    var pathLength = el.getTotalLength();
    el.setAttribute('stroke-dasharray', pathLength);
    return [-pathLength, 0];
  },
  stroke: {
    value: function (el, i) {
      return 'rgb(200,' + i * 8 + ',150)';
    },
    easing: 'linear',
    duration: 2000,
  },
  strokeWidth: {
    value: 6,
    easing: 'linear',
    delay: function (el, i) {
      return 1200 + (i * 40);
    },
    duration: 800,
  },
  delay: function (el, i) {
    return i * 60;
  },
  duration: 1200,
  easing: 'easeOutExpo',
  loop: true,
  direction: 'alternate'
});
};

export {sound};