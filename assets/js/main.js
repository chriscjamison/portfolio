/* ****** main.js ****** */

$(document).ready(
  function () {
    $(window).on("hashchange", 
      function () { 
        
        // A String variable of the URL hash is intialized.
        var url_hash = "";

        // A String variable of the string following the hash character in the URL is initialized.
        var webpage_value = "";

        // The hash of the URL is passed on to 'url_hash'.
        url_hash = window.location.hash;
        
        // The string following the hash character in the URL hash is passed on to 'webpage_value'.
        webpage_value = url_hash.slice(1);

console.log("webpage_value = " + webpage_value);
      }
    );
  }
);


$(window).on("load", 
  function () { 
    animateTransitions();
  }
);


function animateTransitions() {
/* ******** ******** ******** ******** ******** ******** ******** ********  ******** 
 *  animateTransitions triggers jQuery transition effects which allows 
 *  a visitor to view the webpage.
 *  ******** ******** ******** ******** ******** ******** ******** ******** ******** */

  // A String variable which will hold the path of the URL is initialized.
  var url_string = "";

  // The path of the URL is passed on to 'url_string'.
  url_string = window.location.pathname;

  // IF/ELSE statement that sets a flag which determines which content is to made visible.
  if (url_string === "/") {
    animateLandingPageElements();
  }

// console.log("url_string = " + url_string);
// console.log("page_type = " + page_type);


} /* **** END of animateTranstions **** */


function animateLandingPageElements() {
  /* ******** ******** ******** ******** ******** ******** ******** ********  ******** 
   *  animateTransitions triggers jQuery transition effects for the landing page.
   *  ******** ******** ******** ******** ******** ******** ******** ******** ******** */

  // String variables which will contain CSS selectors for elements to be made visible 
  // will be initiated.
  var header_intro_welcome_selector = "";
  var header_intro_name_selector = "";
  var header_name_selector = "";
  var header_border_name_selector = "";
  var header_copy_selector = "";
  var nav_selector = "";
  var section_social_selector = "";
  var section_logo_selector = "";

  // Object variables which will contain the jQuery Objects which refer to HTML elements 
  // contained in the Landing Page will be initiated.
  var header_intro_welcome_element = {};
  var header_intro_name_element = {};
  var header_name_element = {};
  var header_border_name_element = {};
  var header_copy_element = {};
  var nav_element = {};
  var section_social_element = {};
  var section_logo_element = {};

  // The CSS selectors for the various HTML elements within the Landing Page are passed on to 
  // the String variables initiated earlier.
  header_intro_welcome_selector = "#header-intro-welcome";
  header_intro_name_selector = "#header-intro-name";
  header_name_selector = "#header-name";
  header_border_name_selector = "#header-border-name";
  header_copy_selector = ".header-copy";
  nav_selector = "#nav-other-landing";
  section_social_selector = "#section-social";
  section_logo_selector = "#section-logo-landing";

  // jQuery Objects which refer to the HTML elements with CSS selectors listed above are passed 
  // on to the Object variables initiated earler.
  header_intro_welcome_element = $(header_intro_welcome_selector);
  header_intro_name_element = $(header_intro_name_selector);
  header_name_element = $(header_name_selector);
  header_border_name_element = $(header_border_name_selector);
  header_copy_element = $(header_copy_selector);
  nav_element = $(nav_selector);
  section_social_element = $(section_social_selector);
  section_logo_element = $(section_logo_selector);

  // The HTML elements within the Landing Page are made visible.
  $(header_intro_welcome_element).fadeTo(700, 1);
  $(section_logo_element).fadeTo(900, 1);
  $(header_intro_name_element).delay(900).fadeTo(900, 1);
  $(header_name_element).delay(1800).fadeTo(900, 1);
  $(header_border_name_element).delay(2700).fadeTo(600, 1);
  $(header_copy_element).delay(3550).fadeTo(850, 1);
  $(nav_element).delay(4550).fadeTo(600, 1);
  $(section_social_element).delay(4550).fadeTo(600, 1);
/*
  setTimeout(
    function () {
      $(header_name_element).css("opacity", 1);
    }, 1750
  );

  setTimeout(
    function () {
      $(header_border_name_element).css("opacity", 1);
    }, 2000
  );
  
  setTimeout(
    function () {
      $(header_copy_element).css("opacity", 1);
    }, 2500
  );
  
  setTimeout(
    function () {
      $(nav_element).css("opacity", 1);
      $(section_social_element).css("opacity", 1);
    }, 3000
  ); */
}