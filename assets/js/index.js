$(document).ready(function(){

  // Loading
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  Pace.on('done', function(event) {
  });

  // Animations
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  new WOW().init();

  // Responsive videos
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  $(".site-main").fitVids();

  // Navigation toggle
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('body').toggleClass('no-scroll');
  });

  // Social icons
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  if ( typeof social_icons !== 'undefined' ) {
    $.each( social_icons, function(index, val) {
       $(".social-navigation ul").append('<li><a href="' + val + '">' + extractDomain(val) + '</a></li>');
    });
  } else {
    $(".social-navigation").remove();
  }

  // Scroll to top
  // ––––––––––––––––––––––––––––––––––––––––––––––––––

  $('.scroll-top').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

});

// Extract domain
// ––––––––––––––––––––––––––––––––––––––––––––––––––

function extractDomain(url) {
  var domain;

  // Find & remove protocol (http, ftp, etc.) and get domain
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2];
  } else {
    domain = url.split('/')[0];
  }

  // Find & remove port number
  domain = domain.split(':')[0];
  domain = domain.replace("www.", "");
  domain = domain.replace(".com", "");
  return domain;
}

var disqus_shortname = 'quangtt';
