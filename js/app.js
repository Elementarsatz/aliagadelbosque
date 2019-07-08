$(document).ready(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
      $("#header-mobile").removeClass('overlay').addClass('bg-light');
      $('nav').first().removeClass('navbar-dark').addClass('navbar-light');
    } else {
        //remove the background property so it comes transparent again (defined in your css)
      $("#header-mobile").addClass('overlay').removeClass('bg-light');
      $('nav').first().addClass('navbar-dark').removeClass('navbar-light');
    }
  });
  // Smooth scroll
  $('a#home-arrow').click(function(event) {
    event.preventDefault();
    $('html, body').stop().animate({ scrollTop: $($(event.target).closest('#home-arrow').attr('href')).offset().top - 55 }, 1000);
  });
  $('.home-link, .about-link, .contact-link').click(function(event) {
    event.preventDefault();
    $('html, body').stop().animate({ scrollTop: $($(event.target).attr('href')).offset().top - 55 }, 1000);
  });
});
