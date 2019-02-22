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

        // IF/ELSE statement which will determine the intent a visitor has when clicking on the main menu.
        // If a visitor clicks on the menu icon, the menu will become visible. Otherwise, the browser 
        // will navigate to another webpage.
        if (webpage_value === "") {
          animateMenu();
        } else {
          // A String variable which will hold the path to the webpage a visitor wished to visit 
          // is initiated.
          var new_url_string = "";

          // A path to the webpage a visitor wishes to visit is assembled by first setting the domain of the 
          // website, 'http://chriscjamison.com', passing on the value of 'webpage_value' and finally 
          // cocatenating the string, '.htm'.
          new_url_string = "http://chrisjamison.com/" + webpage_value + ".htm";

          // A String variable which will hold the CSS selector which refers to the content is initiated.
          var body_selector = "";

          // An Object variable which will hold the jQuery object for the <body> HTML element is initated.
          var body_element = {};

          // The CSS selector which refers to the content is passed on.
          body_selector = "body";

          // A jQuery object which refers to the <body> HTML element is passed on to 'body_element'.
          body_element = $(body_selector);

          $(body_element).fadeTo(250, 0);

          /* setTimeout(
            function () {
              window.location.href = new_url_string;
            }, 300
          ); */
        }
      }
    );
  }
);


$(window).on("load", 
  function () { 
    animateTransitions();
  }
);


$("#nav-link-menu").on("click", 
  function () { 
console.log("click");
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
  } else {
    animatePageElements();
  }

// console.log("url_string = " + url_string);
// console.log("page_type = " + page_type);


} /* **** END of animateTranstions **** */


function animateLandingPageElements() {
/* 
 *  This function animates the visibility of the HTML elements contained in the 
 *  Landing Page.
 */

  // String variables which will contain CSS selectors for elements to be made visible 
  // will be initiated.
  var header_intro_welcome_selector = "";
  var header_intro_name_selector = "";
  var header_name_selector = "";
  var header_border_name_selector = "";
  var header_copy_selector = "";
  var section_social_selector = "";
  var section_logo_selector = "";
  var nav_selector = "";

  // Object variables which will contain the jQuery Objects which refer to HTML elements 
  // contained in the Landing Page will be initiated.
  var header_intro_welcome_element = {};
  var header_intro_name_element = {};
  var header_name_element = {};
  var header_border_name_element = {};
  var header_copy_element = {};
  var section_social_element = {};
  var section_logo_element = {};
  var nav_element = {};

  // The CSS selectors for the various HTML elements within the Landing Page are passed on to 
  // the String variables initiated earlier.
  header_intro_welcome_selector = "#header-intro-welcome";
  header_intro_name_selector = "#header-intro-name";
  header_name_selector = "#header-name";
  header_border_name_selector = "#header-border-name";
  header_copy_selector = ".header-copy";
  section_social_selector = "#section-social";
  section_logo_selector = "#section-logo-landing";
  nav_selector = setNavSelector();

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
} // END of FUNCTION animateLandingPageElements



function animatePageElements() {
/* 
 *  This function animates the visibility of the HTML elements contained in  
 *  webpages other than the Landing Page.
 */

  // String variables which will contain CSS selectors for elements to be made visible 
  // will be initiated.
  var header_h1_selector = "";
  var header_border_selector = "";
  var article_selector = "";
  var section_logo_selector = "";
  var nav_selector = "";

  // Object variables which will contain the jQuery Objects which refer to HTML elements 
  // contained in the Landing Page will be initiated.
  var header_h1_element = {};
  var header_border_element = {};
  var article_element = {};
  var section_logo_element = {};
  var nav_element = {};

  // The CSS selectors for the various HTML elements within the Landing Page are passed on to 
  // the String variables initiated earlier.
  header_h1_selector = "header h1";
  header_border_selector = ".header-border-title";
  article_selector = "article";
  section_logo_selector = ".section-logo";
  nav_selector = setNavSelector();

  // jQuery Objects which refer to the HTML elements with CSS selectors listed above are passed 
  // on to the Object variables initiated earler.
  header_h1_element = $(header_h1_selector);
  header_border_element = $(header_border_selector);
  article_element = $(article_selector);
  section_logo_element = $(section_logo_selector);
  nav_element = $(nav_selector);

  // The HTML elements within the Landing Page are made visible.
  $(nav_element).fadeTo(700, 1);
  $(section_logo_element).fadeTo(900, 1);
  $(header_h1_element).fadeTo(900, 1);
  $(article_element).delay(900).fadeTo(900, 1);
  $(header_border_element).delay(1800).fadeTo(900, 1);

}

function animateMenu () {

}


function setNavSelector() {
/* 
 * This function will animate the visiblity of the menu. There are two menus coded into 
 * the landing page. The following section will pass on the corresponding CSS selector 
 * to the variable 'nav_selector'.
 */

  // A Number which will hold the width of the browser is initialized.
  var window_width;

  // A jQuery method is used to collect the width of the browser window. That value is then passed on.
  window_width = $(window).width();

  // IF/ELSE statement which sets the value of 'nav_selector' to '.nav-iphone' for browsers less than 
  // or equal to 414px and '.nav-other' for all other browsers.
  if (window_width <= 414) {
    nav_selector = ".nav-iphone";
  } else {
    nav_selector = ".nav-other";
  }

  return nav_selector;

} // END of FUNCTION setNavSelector