// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")
require("jquery-ui-bundle")
require("popper.js")
require("bootstrap")
require("custom/app-menu")
require("custom/app")

window.jQuery = $;
window.$ = $;
window.dragged;

document.addEventListener('dragstart', function( event ) { dragged = event.target; }, false);
document.addEventListener('dragover', function( event ) { event.preventDefault(); }, false);
document.addEventListener('drop', function (event) {
  var html = event.target; var input;
  event.preventDefault();
  if (input = $(html).closest('form.dropzone')) {
    var photoHolder = $(input).find('input.droppable[type=hidden]');
    photoHolder.val($(window.dragged).attr('value'));
    $(input).submit();
  }
}, false);


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
