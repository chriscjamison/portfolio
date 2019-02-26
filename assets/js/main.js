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
        if (webpage_value === "open_menu" || webpage_value === "close_menu") {
          animateMenu(webpage_value);
        } else {
          // A String variable which will hold the path to the webpage a visitor wished to visit 
          // is initialized.
          var new_url_string = "";

          // A path to the webpage a visitor wishes to visit is assembled by first setting the domain of the 
          // website, 'http://chriscjamison.com', passing on the value of 'webpage_value' and finally 
          // cocatenating the string, '.htm'.
          new_url_string = "http://chrisjamison.com/" + webpage_value + ".htm";

          // A String variable which will hold the CSS selector which refers to the content is initialized.
          var body_selector = "";

          // An Object variable which will hold the jQuery object for the <body> HTML element is initated.
          var body_element = {};

          // The CSS selector which refers to the content is passed on.
          body_selector = "body";

          // A jQuery object which refers to the <body> HTML element is passed on to 'body_element'.
          body_element = $(body_selector);

          $(body_element).fadeTo(250, 0);

          setTimeout(
            function () {
              window.location.href = new_url_string;
            }, 300
          );
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
  if (url_string === "/" || url_string === "index.htm") {
    animateLandingPageElements();
  } else {
    animatePageElements(url_string);
  }
} /* **** END of animateTranstions **** */


function animateLandingPageElements() {
/* 
 *  This function animates the visibility of the HTML elements contained in the 
 *  Landing Page.
 */

  // String variables which will contain CSS selectors for elements to be made visible 
  // will be initialized.
  var header_intro_welcome_selector = "";
  var header_intro_name_selector = "";
  var header_name_selector = "";
  var header_border_name_selector = "";
  var header_copy_selector = "";
  var section_social_selector = "";
  var section_logo_selector = "";
  var nav_selector = "";

  // Object variables which will contain the jQuery Objects which refer to HTML elements 
  // contained in the Landing Page will be initialized.
  var header_intro_welcome_element = {};
  var header_intro_name_element = {};
  var header_name_element = {};
  var header_border_name_element = {};
  var header_copy_element = {};
  var section_social_element = {};
  var section_logo_element = {};
  var nav_element = {};

  // The CSS selectors for the various HTML elements within the Landing Page are passed on to 
  // the String variables initialized earlier.
  header_intro_welcome_selector = "#header-intro-welcome";
  header_intro_name_selector = "#header-intro-name";
  header_name_selector = "#header-name";
  header_border_name_selector = "#header-border-name";
  header_copy_selector = ".header-copy";
  section_social_selector = "#section-social";
  nav_selector = setNavSelector();

  // jQuery Objects which refer to the HTML elements with CSS selectors listed above are passed 
  // on to the Object variables initialized earler.
  header_intro_welcome_element = $(header_intro_welcome_selector);
  header_intro_name_element = $(header_intro_name_selector);
  header_name_element = $(header_name_selector);
  header_border_name_element = $(header_border_name_selector);
  header_copy_element = $(header_copy_selector);
  nav_element = $(nav_selector);
  section_social_element = $(section_social_selector);

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



function animatePageElements(url_string) {
/* 
 *  This function animates the visibility of the HTML elements contained in  
 *  webpages other than the Landing Page.
 */

  // String variables which will contain CSS selectors for elements to be made visible 
  // will be initialized.
  var header_h1_selector = "";
  var header_border_selector = "";
  var section_logo_selector = "";
  var nav_selector = "";

  // Object variables which will contain the jQuery Objects which refer to HTML elements 
  // contained in the Landing Page will be initialized.
  var header_h1_element = {};
  var header_border_element = {};
  var section_logo_element = {};
  var nav_element = {};

  // The CSS selectors for the various HTML elements within the Landing Page are passed on to 
  // the String variables initialized earlier.
  header_h1_selector = "header h1";
  header_border_selector = ".header-border-title";
  nav_selector = setNavSelector();

  // jQuery Objects which refer to the HTML elements with CSS selectors listed above are passed 
  // on to the Object variables initialized earler.
  header_h1_element = $(header_h1_selector);
  header_border_element = $(header_border_selector);
  nav_element = $(nav_selector);

  // The HTML elements within the Landing Page are made visible.  
  $(nav_element).fadeTo(700, 1);

  $(header_h1_element).fadeTo(900, 1);

  // IF/ELSE statement which displays the various page HTML elements based on the URL of the webpage.
  // Additional elements display if the path to the webpage is 'start_a_conversation.htm'.
  if (url_string === "/start_a_conversation.htm")  {
    // A String variable which will hold CSS selectors are initialized.
    var conversation_selector = "";

    // An Object which will hold a jQuery object which refers to elements 
    // within the webpage is initialized.
    var conversation_elements = {};

    // IF/ELSE statement which includes a selctor, '#section-converation-links', if the browser is for a handheld browser.
    if (nav_selector === ".section-nav-iphone") {
      // CSS selectors which refer to the content soon to be displayed is passed on.
      conversation_selector = "#section-conversation-links, #div-conversation-copy, #spacer-horizontal-div-conversation, #form-conversation";
    } else {
      conversation_selector = "#div-conversation-copy, #spacer-horizontal-div-conversation, #form-conversation";
    }

    // A jQuery object which refers to the HTML elements soon to be displayed is passed on.
    conversation_elements = $(conversation_selector);

    $(conversation_elements).delay(900).fadeTo(900, 1);
  } else {
    // A String variable which will hold CSS selectors are initialized.
    var article_selector = "";

    // An Object which will hold a jQuery object which refers to elements 
    // within the webpage is initialized.
    var article_element = {};

    // CSS selector which refers to the content soon to be displayed is passed on.
    article_selector = "article";

    // A jQuery object which refers to the HTML elements soon to be displayed is passed on.
    article_element = $(article_selector);

    $(article_element).delay(900).fadeTo(900, 1);
  }
  
  $(header_border_element).delay(1800).fadeTo(900, 1);

} // END of FUNCTION animatePageElements



function animateMenu(webpage_value) {
/* 
 * This function will animate the visiblity of the menu. 
 */

  // A String variable which will hold the CSS selector of the menu is initalized.
  var nav_selector;

  // An Object variable which will hold the jQuery object which refers to the 
  // main menu is initialized.
  var nav_element = {};

  // The CSS selector for the visible menu is passed on by using the function, 'setNavSelector'.
  nav_selector = setNavSelector();

// console.log("nav_selector = " + nav_selector);
  // The jQuery object which refers to the main menu is passed on.
  nav_element = $(nav_selector);

  // A String variable which will hold the CSS selector for the menu icon is initialized.
  var menu_icon_selector = "";

  // An Object variable which will hold the jQuery object which refers to the menu icon 
  // initialized.
  var menu_icon_element = {};

  // The CSS selector for the menu icon is assembled by cocatenating the value of 'nav_selector' 
  // and the selector, '#nav-link-menu' is passed on.
  menu_icon_selector = nav_selector + " #nav-link-menu";

  // The jQuery object which refers to the menu icon is passed on.
  menu_icon_element = $(menu_icon_selector);

  // The menu icon fades away and back in.
  $(menu_icon_element).fadeTo(150, 0);

  // An Object variable which will hold CSS properties and values used to style the menu icon 
  // is initialized.
  menu_items_css = {};
  
  menu_items_css = {
    opacity: 0
  };
console.log('webpage_value = ' + webpage_value);
  // IF/ELSE statement which swaps the click state of the menu icon to its base state 
  // to a click state.
  if (webpage_value === "open_menu")  {
    setTimeout(
      function () {

        // IF/ELSE statement which sets the click state of the menu icon according to 
        // the type of browser window, handheld device or tablet/desktop.
        if (nav_selector === ".section-nav-iphone") {
          $(menu_icon_element).css("backgroundPosition", "0px -80px");

        } else if (nav_selector === ".nav-other") {
          $(menu_icon_element).css("backgroundPosition", "0px -240px");
        }

        menu_items_css.display = "block";

        $(menu_icon_element).attr("href", "#close_menu");
      }, 175
    );    
  } else if (webpage_value === "close_menu") {
    setTimeout(
      function () {
        // IF/ELSE statement which sets the click state of the menu icon according to 
        // the type of browser window, handheld device or tablet/desktop.
        if (nav_selector === ".section-nav-iphone") {
          $(menu_icon_element).css("backgroundPosition", "0px 0px");

        } else if (nav_selector === ".nav-other") {
          $(menu_icon_element).css("backgroundPosition", "0px -120px");
        }

        menu_items_css.display = "none";
        
        $(menu_icon_element).attr("href", "#open_menu");
      }, 175
    );
  }

  // A String variable which will hold the CSS selector for the menu items is initialized.
  var menu_items_selector = "";

  // An Object variable which will hold the jQuery object which refers to the menu items 
  // is initialized.
  var menu_items_element = {};

  // The CSS selector for the menu items is assembled by cocatenating the value of 'nav_selector' 
  // and the selector, '.nav-menu-items' is passed on.
  menu_items_selector = nav_selector + " .nav-menu-items";

  // The jQuery object which refers to the menu items is passed on.
  menu_items_element = $(menu_items_selector);

  $(menu_icon_element).delay(200).fadeTo(150, 1);
console.log("menu_items_css.display = " + menu_items_css.display);
  
  setTimeout(
    function () {
      console.log("menu_items_css.display = " + menu_items_css.display);
      $(menu_items_element).css(menu_items_css);    
    }, 200
  );
  

  $(menu_items_element).delay(400).fadeTo(150, 1);

} // END of FUNCTION animateMenu



function setNavSelector() {
/* 
 * This function will pass on the corresponding CSS selector to the variable 'nav_selector'.
 */

  // A Number which will hold the width of the browser is initialized.
  var window_width;

  // A jQuery method is used to collect the width of the browser window. That value is then passed on.
  window_width = $(window).width();

  // IF/ELSE statement which sets the value of 'nav_selector' to '.nav-iphone' for browsers less than 
  // or equal to 414px and '.nav-other' for all other browsers.
  if (window_width <= 414) {
    nav_selector = ".section-nav-iphone";
  } else {
    nav_selector = ".nav-other";
  }

  return nav_selector;

} // END of FUNCTION setNavSelector