jQuery(document).ready(function($) {

  // bind sub-nav
  $('.nav-history').bind('hover', function() {
    $(this).addClass('hover').find('ul').slideDown();
  }).bind('mouseleave', function() {
    $(this).removeClass('hover').find('ul').slideUp();
  });

});