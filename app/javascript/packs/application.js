// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "stylesheets/application";
import anime from 'animejs/lib/anime.es.js'; // cette ligne est importante pour le set up de anime.es.js
import { countDown } from "/Users/ericchomette/code/Projet/radioV1/radioapp/app/javascript/components/countdown.js"
import { testAnime } from '/Users/ericchomette/code/Projet/radioV1/radioapp/app/javascript/components/testanime.js'; // cette ligne est importante pour le set up de anime.es.js

document.addEventListener('turbolinks:load', () => {

  testAnime()
  setInterval(
    () => countDown(),
    1000
  );
});



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
