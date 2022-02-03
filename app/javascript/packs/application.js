// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "stylesheets/application";
import { countDown } from "/Users/ericchomette/code/Projet/radioV1/radioapp/app/javascript/components/countdown.js"
import { aleatronome } from '/Users/ericchomette/code/Projet/radioV1/radioapp/app/javascript/components/aleatronome.js'; // cette ligne est importante pour le set up de anime.es.js
import { sphererooling } from '/Users/ericchomette/code/Projet/radioV1/radioapp/app/javascript/components/sphere.js'; // cette ligne est importante pour le set up de anime.es.js
import { colorpicker } from '/Users/ericchomette/code/Projet/radioV1/radioapp/app/javascript/components/colorpicker.js'; // cette ligne est importante pour le set up de anime.es.js


document.addEventListener('turbolinks:load', () => {
  sphererooling();
  aleatronome();
  setInterval(
    () => countDown(),
    1000
  );
});




// document.addEventListener('turbolinks:load', () => {
//   sphererooling();
//   aleatronome();
//   setInterval(
//     () => countDown(),
//     1000
//   );

// });





// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
