import anime from 'animejs/lib/anime.es.js'; // cette ligne est importante pour le set up de anime.es.js

function testAnime() {
anime({
  targets: ".animestart",
  keyframes: [
    { translateY: 0 },
    { translateX: 400 },
    { translateY: 400 },
    { translateX: 0 },
    { translateY: 0 }
  ],
  duration: 10000,
  loop: true
});
};

export { testAnime };