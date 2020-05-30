jQuery( document ).ready( function( $ ) {

  // Stickykit - stick header to top of viewport
  $(".site-header").stick_in_parent();


  $("#menu-button").on("click", function() {
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

  $(".menu-item-has-children").on("click", function() {
    $(this).toggleClass("open");
    $(this).children("ul").slideToggle(150);
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

/**
 * Debounced function for applying "stuck" flag to header.
 * @return {function}
 */
var checkHeight = debounce(function() {
  if(window.scrollY==0) {
    var element = document.getElementById("site-header");
    if(element.classList.contains("stuck")) {
      element.classList.remove("stuck");
    }
  } else {
    var element = document.getElementById("site-header");
    if(!element.classList.contains("stuck")) {
      element.classList.add("stuck");
    }
  }
}, 0);


/**
 * Prevents code from running too often.
 * @param  {function} func      The function containing your code to be dounced.
 * @param  {int} wait           Milliseconds to wait between running function code.
 * @param  {boolean} immediate  If true, triggers function on leading edge instead of trailing.
 * @return {function}
 */
function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };

};
