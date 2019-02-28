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
          new_url_string = "http://chriscjamison.com/" + webpage_value + ".htm";

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
  if (url_string === "/" || url_string === "/index.htm") {
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

  // IF/ELSE statement which sets the value of 'section_logo_selector' to refer to the logo which appears 
  // on either a handheld device or a tablet or larger.
  if (nav_selector === ".section-nav-iphone") {
    section_logo_selector = nav_selector + " .section-logo";
  } else {
    section_logo_selector = ".section-logo";
  }
  
  // jQuery Objects which refer to the HTML elements with CSS selectors listed above are passed 
  // on to the Object variables initialized earler.
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
  section_logo_selector = ".section-logo";
  nav_selector = setNavSelector();

  // jQuery Objects which refer to the HTML elements with CSS selectors listed above are passed 
  // on to the Object variables initialized earler.
  header_h1_element = $(header_h1_selector);
  header_border_element = $(header_border_selector);
  section_logo_element = $(section_logo_selector);
  nav_element = $(nav_selector);

  // The HTML elements within the Landing Page are made visible.  
  $(nav_element).fadeTo(700, 1);

  // IF/ELSE statement which displays the webpage logo if the browser is not for a handheld device.
  if (nav_selector === ".nav-other")  {
    $(section_logo_element).fadeTo(900, 1);
  }
  
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


function animateiPadPageElements(webpage_value)  {
/* 
 * This function will slide the menu options into view within browsers for tablets - 
 * browsers with a width less than 1024px.
 */

  // String variables which will hold CSS selectors for various HTML elements are initialized.
  var header_selector = "";
  var article_selector = "";
  var section_logo_selector = "";
  var nav_selector = "";

  // Object variables which will hold jQuery objects which refer to various HTML elements 
  // are initialized.
  var header_element = {};
  var article_element = {};
  var section_logo_element = {};
  var nav_element = {};

  // The CSS selectors for the HTML elements to be made visible or not visible are passed on.
  header_selector = "header";
  article_selector = "article";
  section_logo_selector = ".section-logo";
  nav_selector = setNavSelector();

  // jQuery objects which refer to various HTML elements to be made visible are passed on.
  header_element = $(header_selector);
  article_element = $(article_selector);
  section_logo_element = $(section_logo_selector);
  nav_element = $(nav_selector);

  // An Object which will hold CSS properties and values to reposition the menu.
  var nav_css = {};

  // IF/ELSE statement which will either make the HTML elements holding content visible 
  // or not visible.
  if (webpage_value === "open_menu")  {
    $(header_element).fadeTo(50, 0);
    $(article_element).fadeTo(50, 0);
    $(section_logo_element).fadeTo(50, 0);
  } else if (webpage_value === "close_menu")  {
    $(header_element).fadeTo(150, 1);
    $(article_element).fadeTo(150, 1);
    $(section_logo_element).fadeTo(150, 1);
  }
}



function animateMenuIcon() {
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

  // A String variable which will hold the value of the CSS property of 'opacity' for the 
  // menu icon is initialized.
  var menu_icon_opacity = "";

  // The value of the CSS property of 'opacity' for the menu icon is passed on.
  menu_icon_opacity = $(menu_icon_element).css("opacity");
  // IF/ELSE statement which displays the menu icon if it is not visible, and 
  // hides the menu icon if it is visible.
  if (menu_icon_opacity === "1")  {
    // The menu icon fades away.
    $(menu_icon_element).fadeTo(150, 0);
  } else {
    // The menu icon fades in.
    $(menu_icon_element).fadeTo(150, 1);
  }
}
// END of FUNCTION animateMenuIcon



function animateMenuOptions(menu_items_css) {
/* 
 * This function will fade the menu options into view.
 */

  // A String variable which will hold a CSS selector for the menu is initialized.
  var nav_selector = "";

  // The CSS selector for the main menu is passed on by using the function, 'setNavSelector', 
  // to determine if the browser used is for a handheld device or a larger display.
  nav_selector = setNavSelector();

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
  
  setTimeout(
    function () {
      animateMenuIcon();
      $(menu_items_element).css(menu_items_css);
      
      // IF/ELSE statement which intializes variables and sets CSS values for a border within the menu 
      // which only loads on tablet displays.
      if (nav_selector === ".nav-other")  {
        
        // A Number variable which will hold the width of the browser window is initialized.
        var window_width;

        // The width of the browser window is passed on by using the jQuery Method, '.width()'.
        window_width = $(window).width();

        // IF/ELSE statement which will create and set variables which will display or hide 
        // the border within the menu.
        if (window_width > 414 && window_width <= 1024) {

          // A String variable which will hold the CSS selector for the border within the menu 
          // is initialized.
          var menu_border_selctor = "";

          // An Object variable which will hold the jQuery object which referst to the border 
          // within the menu is initialized.
          var menu_border_element = {};

          // The CSS selector for the border within the menu is passed on. The selector is 
          // created by cocatenating the value of 'nav_selector' with '#div-menu-other-border'.
          menu_border_selctor = nav_selector + " #div-menu-other-border";

          // A jQuery object which refers to the border within the menu is passed on.
          menu_border_element = $(menu_border_selctor);

          $(menu_border_element).css(menu_items_css);
        }
      }
    }, 350
  );
} // END of FUNCTION animateMenuOptions

  

function animateOpenMenu(webpage_value)  {
/* 
 * This function will slide the menu options into view.
 */

  // A String variable which will hold a CSS selector for the menu icon is initialized.
  var menu_icon_selector = "";

  // An Object variable which will hold a jQuery object which refers to the menu icon 
  // is initialized.
  var menu_icon_element = {};

  // The CSS selector for the menu icon is passed on;
  menu_icon_selector = "#nav-link-menu";

  // A jQuery object which refers to the menu icon is passed on.
  menu_icon_element = $(menu_icon_selector);

  // A String variable which will hold a CSS selector for the menu is initialized.
  var nav_selector = "";

  // The CSS selector for the main menu is passed on by using the function, 'setNavSelector', 
  // to determine if the browser used is for a handheld device or a larger display.
  nav_selector = setNavSelector();

  // IF/ELSE statement which sets the click state of the menu icon according to 
  // the type of browser window, handheld device or tablet/desktop.
  if (nav_selector === ".section-nav-iphone") {
    $(menu_icon_element).css("backgroundPosition", "0px -80px");

    // An Object variable which holds a jQuery object which refers to the menu 
    // is initialized.
    var nav_element = {};
    
    // The jQuery object which refers to the menu is passed on. 
    nav_element = $(nav_selector);

    // The background for the menu will now take up the length of the browser window 
    // on handheld displays.
    $(nav_element).addClass("nav-iphone-visible");

  } else if (nav_selector === ".nav-other") {
    // A Number variable which will hold the width of the browser is initialized.
    var window_width;

    // The width of the browser is passed on using the jQuery Method, '.width()'.
    window_width = $(window).width();

    // IF/ELSE statement which will slide the menu icon slightly to the left if the browser 
    // width is less than 1024px.
    if (window_width > 414 && window_width <= 1024) {
      
      // A String variable which will hold the pathname is initialized.
      var url_string = "";

      // The pathname of the current webpage is passed on.
      url_string = window.location.pathname;

      // IF/ELSE statement which animates the opacity of the page elements if the 
      // current webpage is not the Landing Page.
      if (url_string !== "/" && url_string !== "/index.htm")  {
        animateiPadPageElements(webpage_value);
      }

      // The menu icon is made to appear slightly to the left of its base position.
      $(menu_icon_element).css("marginLeft", "0");
    }

    $(menu_icon_element).css("backgroundPosition", "0px -240px");
  }

  $(menu_icon_element).attr("href", "#close_menu");
} // END of FUNCTION animateOpenMenu



function animateCloseMenu(webpage_value)  {
/* 
 * This function will hide the menu options from view.
 */

  // A String variable which will hold a CSS selector for the menu icon is initialized.
  var menu_icon_selector = "";

  // An Object variable which will hold a jQuery object which refers to the menu icon 
  // is initialized.
  var menu_icon_element = {};

  // The CSS selector for the menu icon is passed on;
  menu_icon_selector = "#nav-link-menu";

  // A jQuery object which refers to the menu icon is passed on.
  menu_icon_element = $(menu_icon_selector);

  // A String variable which will hold a CSS selector for the menu is initialized.
  var nav_selector = "";

  // The CSS selector for the main menu is passed on by using the function, 'setNavSelector', 
  // to determine if the browser used is for a handheld device or a larger display.
  nav_selector = setNavSelector();

  // IF/ELSE statement which sets the click state of the menu icon according to 
  // the type of browser window, handheld device or tablet/desktop.
  if (nav_selector === ".section-nav-iphone") {
    // An Object variable which holds a jQuery object which refers to the menu 
    // is initialized.
    var nav_element = {};
    
    // The jQuery object which refers to the menu is passed on. 
    nav_element = $(nav_selector);
    
    $(menu_icon_element).css("backgroundPosition", "0px 0px");

    $(nav_element).removeClass("nav-iphone-visible");
  } else if (nav_selector === ".nav-other") {
    $(menu_icon_element).css("backgroundPosition", "0px -120px");

    // A Number variable which will hold the width of the browser is initialized.
    var window_width;

    // The width of the browser is passed on using the jQuery Method, '.width()'.
    window_width = $(window).width();

    // IF/ELSE statement which will slide the menu icon back to its base position.
    if (window_width > 414 && window_width <= 1024) {

      // The menu icon is made to return to its base position.
      $(menu_icon_element).css("marginLeft", "4rem"); // 64px

      // The HTML elements containing content are made visible.
      animateiPadPageElements(webpage_value);
    }
  }
  
  $(menu_icon_element).attr("href", "#open_menu");
} // END of FUNCTION animateCloseMenu



function determineBackgroundHeight()  {
/* 
 * This function will determine the height of the background of the menu 
 * according to the height of the browser window. 
 */

  // A Number variable which will hold the width of the browser is initialized.
  var window_width;

  // The width of the browser width is passed on using the jQuery Method, '.width()'.
  window_width = $(window).width();

  // A String variable whicih will hold the new value of the background height 
  // is initialized.
  var background_height = "";

  // IF/ELSE statement which will determine the size of the background based on 
  // the dimensions of the browser.
  if (window_width <= 320)  {
    background_height = "35.5rem"; // 568px
  } else if (window_width > 320 && window_width <= 360) {
    background_height = "40rem"; // 640px
  } else if (window_width > 360 && window_width <= 375) {
    // A Number variable which will hold the height of the browser is initialized.
    var browser_height;

    // The height of the browser is passed on using the jQuery Method, '.height()'.
    browser_height = $(window).height();

    // IF/ELSE statement which will determine the height of the background based on 
    // the height of the browser.
    if (browser_height === 667) {
      background_height = "41.75rem"; // 668px
    } else if (browser_height === 812)  {
      background_height = "50.75rem"; // 812px
    }
  } else if (window_width > 375 && window_width <= 414) {
    background_height = "46rem"; // 736px
  }

  return background_height;
} // END of FUNCTION determineBackgroundHeight



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

  // The jQuery object which refers to the main menu is passed on.
  nav_element = $(nav_selector);

  animateMenuIcon();

  // An Object variable which will hold CSS properties and values used to style the menu icon 
  // is initialized.
  menu_items_css = {};

  // IF/ELSE statement which swaps the click state of the menu icon to its base state 
  // to a click state.
  if (webpage_value === "open_menu")  {
    setTimeout(
      function () {
        animateOpenMenu(webpage_value);
      }, 175
    );

    menu_items_css = {
      display: "block", 
      opacity: 1
    };
  } else if (webpage_value === "close_menu") {
    setTimeout(
      function () {
        animateCloseMenu(webpage_value);
      }, 175
    );
    
    menu_items_css = {
      display: "none", 
      opacity: 0
    };
  }

  // IF/ELSE statement which animates the background of the menu if the browser is for 
  // a handheld device.
  if (nav_selector === ".section-nav-iphone") {
    // A String variable which holds the height the background of the menu will be as 
    // menu options are visible is initiated.
    var background_height = "";

    background_height = determineBackgroundHeight();
  }


  
  animateMenuOptions(menu_items_css);
  
  // IF/ELSE statement which will animate the background of the menu if the browser 
  // used is for a handheld device.
  if (nav_selector === ".section-nav-iphone") {

    // IF/ELSE statement which for handheld devices lengthens the background of the menu 
    // or shortens it.
    if (webpage_value === "close_menu")  {
      // The default height of the menu is passed on.
      background_height = "4.69rem"; // 75px      
    }

    $(nav_element).delay(650).animate({
      height: background_height
    }, 350);    
  } 
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