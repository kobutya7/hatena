var $ = jQuery = require('jquery');
var easing = require('jquery.easing');

$('h1').css({
  color: 'red'
});

$('.wrapper').animate({
  'margin-top': 200
}, 100, 'easeInCubic');
