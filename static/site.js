jQuery( document ).ready( function( $ ) {

  $("body").on("click", "#menu-button", function() {
    // Swap text in the menu button to close and back
    $("#menu-button").toggleText('Menu', 'Close');
    // Add open class to header
    $(".site-header").toggleClass("nav-open");

    // Disable scrolling when menu is open
    if($(".site-header").hasClass("nav-open")) {
      lockScroll();
    } else {
      unlockScroll();
    }
  });

  $("body").on("click", ".nav-main a", function() {
    // Swap text in the menu button to close and back
    $("#menu-button").toggleText('Menu', 'Close');
    // Add open class to header
    $(".site-header").removeClass("nav-open");

    // Disable scrolling when menu is open
    if($(".site-header").hasClass("nav-open")) {
      lockScroll();
    } else {
      unlockScroll();
    }
  });

  $(document).keyup(function(e) {
    if(e.key === "Escape") {
      $(".site-header").removeClass("nav-open");
      unlockScroll();
    }
  });

  // Used to toggle text
  // https://stackoverflow.com/a/39525988
  $.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
  });

  function lockScroll() {
    $('html, body').css({
        overflow: 'hidden'
    });
  }

  function unlockScroll() {
    $('html, body').css({
        overflow: 'visible'
    });
  }

});
