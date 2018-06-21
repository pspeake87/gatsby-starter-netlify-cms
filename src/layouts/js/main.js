// Add class to navigation when scrolling down
import {$,jQuery} from 'jquery'
window.$ = $;
window.jQuery = jQuery;

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 20) {
    $('.header-main').addClass('fade-in');
  } else {
    $('.header-main').removeClass('fade-in');
  }
});

// Smooth scroll to anchor points

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top-40
  }, 0);
});

// Add class when mobile navigation icon is clicked

$('.nav-toggle').on('click', function() {
  $('body').toggleClass('no-scroll');
  $('.header-main').toggleClass('active');
});

// Prevent background from scrolling on mobile when navigation is toggled

$('html, body').on('touchmove', function() {
  e.preventDefault();
});

// Add class when sidebar dropdown icon is clicked

$('.sidebar .sidebar-header').on('click', function() {
  $('.sidebar').toggleClass('active');
});
