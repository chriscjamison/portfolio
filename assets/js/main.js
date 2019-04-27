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

        // IF/ELSE statement which will determine the intent a visitor has when clicking a navigation link.
        // If a visitor clicks on the menu icon, the menu will become visible. If a visitor clicks on 
        // the link, 'View Case Studies', the sub menu holding links to case studies will become visible. 
        // Otherwise, the browser will navigate to another webpage.
        if (webpage_value === "open_menu" || webpage_value === "close_menu") {
          animateMenu(webpage_value);
        } else if (webpage_value === "case_studies")  {
          animateCaseStudies();
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

    $("#input-conversation-full_name, #input-conversation-email_address, #textarea-conversation-message").focusin(
      function () {
        var input_element = {};
        
        input_element = this;

        verifyFields(input_element, "focus");
      }
    );
    
    $("#input-conversation-full_name, #input-conversation-email_address, #textarea-conversation-message").focusout(
      function () {
        var input_element = {};
        
        input_element = this;

        verifyFields(input_element, "blur");
      }
    );
    
    $("#input-conversation-submit").mouseover(
      function () {
        // A String variable which will hold the CSS selector for the Submit button within the contact form 
        // is initialized.
        var submit_selector = "";
    
        // An Object variable which will hold the jQuery object which refers to the Submit button within 
        // the contact form is initialized.
        var submit_element = {};
    
        // The CSS selector which refers to the Submit button is passed on.
        submit_selector = "#input-conversation-submit";
    
        // The jQuery object which refers to the Submit button is passed on.
        submit_element = $(submit_selector);
    
        // An Object variable which will hold CSS values which change the appearance of the Submit button 
        // is initialized.
        var submit_css = {};
    
        // CSS values which change the appearance of the Submit button are passed on.
        submit_css = {
          backgroundColor: "#ec1a63", 
          color: "#fff"
        };
    
        // The appearance of the Submit button is changed.
        $(submit_element).animate(submit_css, 350);
      }
    );
    
    $("#input-conversation-submit").mouseout(
      function () {
        // A String variable which will hold the CSS selector for the Submit button within the contact form 
        // is initialized.
        var submit_selector = "";
    
        // An Object variable which will hold the jQuery object which refers to the Submit button within 
        // the contact form is initialized.
        var submit_element = {};
    
        // The CSS selector which refers to the Submit button is passed on.
        submit_selector = "#input-conversation-submit";
    
        // The jQuery object which refers to the Submit button is passed on.
        submit_element = $(submit_selector);
    
        // An Object variable which will hold CSS values which change the appearance of the Submit button 
        // is initialized.
        var submit_css = {};
    
        // CSS values which change the appearance of the Submit button are passed on.
        submit_css = {
          backgroundColor: "#fff", 
          borderColor: "#ec1a63", 
          color: "#ec1a63"
        };
    
        // The appearance of the Submit button is changed.
        $(submit_css).animate(submit_css, 350);
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
  $(section_social_element).delay(4550).fadeTo(600, 1);
  
  // IF/ELSE statement which delays the moment the main menu becomes visible if the browser is 
  // for a handheld browser.
  if (nav_selector === ".section-nav-iphone") {
    $(nav_element).delay(5550).fadeTo(600, 1);
  } else {
    $(nav_element).delay(4550).fadeTo(600, 1);
  }
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

    // The CSS selector which refers to the content to be made visible is passed on.
    conversation_selector = setConversationSelector();
    
    // A jQuery object which refers to the HTML elements soon to be displayed is passed on.
    conversation_elements = $(conversation_selector);

    // A String variable which will hold the hash of the URL is initialized.
    var url_hash = "";

    // The hash of the URL is passed on.
    url_hash = window.location.hash;

    // IF/ELSE statement which will make the section containing the default copy invisible 
    // if the confirmation copy loads.
    if (url_hash === "#confirmation") {
      // String variables which will hold the CSS selector which refers to the default copy,  
      // links, and form are initalized.
      var copy_selector = "";
      var links_selector = "";
      var form_selector = "";

      // Object variables which will hold the jQuery object which refers to the default 
      // copy, links, and form are initialized.
      var copy_element = {};
      var links_element = {};
      var form_element = {};

      // CSS selectors which refers to the default copy, links, and form are passed on.
      copy_selector = "#div-conversation-copy";
      links_selector = "#section-conversation-links";
      form_selector = "#form-conversation";

      // jQuery objects which refers to the default copy, links, and form are passed on.
      copy_element = $(copy_selector);
      links_element = $(links_selector);
      form_element = $(form_selector);

      // An Object variable which will hold the CSS value which will make the default 
      // copy, links, and form invisible is initialized.
      var not_visible_css = {};

      // A CSS value which will make the default copy, links, and form invisible is passed on.
      not_visible_css = {
        display: "none"
      };

      // The default copy, links, and form are made invisible.
      $(copy_element).css(not_visible_css);
      $(links_element).css(not_visible_css);
      $(form_element).css(not_visible_css);
    }

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



function setConversationSelector()  {
/* 
 * This function will pass on a CSS selector which refers to content which will be made 
 * visible within the 'Start a Conversation' webpage.
 */

  // A String variable which will hold the hash of the URL.
  var url_hash = "";

  // The hash of the URL is passed on.
  url_hash = window.location.hash;
  
  // IF/ELSE statement which will determine if the page currently loading is the default contact form 
  // or the confirmation message.
  if (url_hash === "#confirmation") {
    conversation_selector = "#div-conversation-copy-confirmation";
  } else {
    // A Number variable which will hold the width of the browser window is initalized.
    var window_width;

    // The width of the browser width is passed on to.
    window_width = $(window).width();

    // IF/ELSE statement which includes a selector, '#section-converation-links', if the browser is for a 
    // handheld or tablet browser.
    if (window_width < 768) {
      conversation_selector = "#section-conversation-links, #div-conversation-copy, #spacer-horizontal-div-conversation, #form-conversation";
    } else if (window_width >= 768 && window_width <= 1024) {
      conversation_selector = "#div-conversation-copy, #spacer-horizontal-div-conversation, #form-conversation";
    } else {
      conversation_selector = "#div-conversation-copy, #form-conversation";
    }
  }

  // The CSS selector is returned to the calling function.
  return conversation_selector;

} // END of FUNCTION setConversationSelector



function animateiPadPageElements(webpage_value)  {
/* 
 * This function will slide the menu options into view within browsers for tablets - 
 * browsers with a width less than 1024px.
 */

   // A Number variable which will hold the width of the browser is initialized.
   var window_width;

   // The width of the browser is passed on using the jQuery Method, '.width()'.
   window_width = $(window).width();
 
   // IF/ELSE statement which will slide the menu icon slightly to the left if the browser 
   // width is less than 1024px.
   if (window_width > 414 && window_width <= 1024) {

    // A String variable which will hold the URL of the current webpage is initialized.
    var url_string = "";

    // The URL of the current webpage is passed on.
    url_string = window.location.href;

    // A String variable which will hold the filename which refers to the 'Start a Conversation' 
    // webpage is initialized.
    var start_a_conversation_search_string = "";

    // A Number variable which will hold the location within 'url_string' that the filename 
    // which refers to the 'Start a Conversation' webpage is initialized.
    var start_a_conversation_search_index;

    // The filename of the webpage which refers to 'Start a Conversation' is passed on.
    start_a_conversation_search_string = "start_a_conversation.htm";

    // The location within 'url_string' which the filename which refers to 'Start a Conversation' 
    // is passed on.
    start_a_conversation_search_index = url_string.indexOf(start_a_conversation_search_string);

    // IF/ELSE statement which determines which DOM elements to fade from view. If the current 
    // webpage refers to 'Start a Conversation', the jQuery object which refer to DOM elements 
    // specific to that webpage are initialzed. Otherwise, the jQuery objects referring to 
    // typical DOM elements are iniitalized.
    if (start_a_conversation_search_index > -1) {
      // IF/ELSE statement which will either make the HTML elements holding content visible 
      // or not visible.

      // String variables which will hold CSS selectors for various HTML elements are initialized.
      var header_selector = "";
      var conversation_links_selector = "";
      var conversation_copy_selector = "";
      var conversation_border_selector = "";
      var conversation_form_selector = "";

      // Object variables which will hold jQuery objects which refer to various HTML elements 
      // are initialized.
      var header_element = {};
      var conversation_links_element = {};
      var conversation_copy_element = {};
      var conversation_border_element = {};
      var conversation_form_element = {};

      // The CSS selectors for the HTML elements to be made visible or not visible are passed on.
      header_selector = "header";
      conversation_links_selector = "#section-conversation-links";
      conversation_copy_selector = "#div-conversation-copy";
      conversation_border_selector = "#spacer-horizontal-div-conversation";
      conversation_form_selector = "#form-conversation";

      // jQuery objects which refer to various HTML elements to be made visible are passed on.
      header_element = $(header_selector);
      conversation_links_element = $(conversation_links_selector);
      conversation_copy_element = $(conversation_copy_selector);
      conversation_border_element = $(conversation_border_selector);
      conversation_form_element = $(conversation_form_selector);

      // IF/ELSE statement which will either make the HTML elements holding content visible 
      // or not visible.
      if (webpage_value === "open_menu")  {
        $(header_element).fadeTo(50, 0);

        // A Number variable which will hold the width of the browser is initialized.
        var window_width;

        // The width of the browser window is passed on.
        window_width = $(window).width();

        if (window_width <= 414)  {
          $(conversation_links_element).fadeTo(50, 0);
        }
        
        
        if (window_width <= 1024) {
          $(conversation_border_element).fadeTo(50, 0);
        }
        
        $(conversation_copy_element).fadeTo(50, 0);
        $(conversation_form_element).fadeTo(50, 0);
        $(section_logo_element).fadeTo(50, 0);
      } else if (webpage_value === "close_menu")  {
        $(header_element).fadeTo(150, 1);

        if (window_width <= 414)  {
          $(conversation_links_element).fadeTo(150, 1);
        }

        if (window_width <= 1024) {
          $(conversation_border_element).fadeTo(150, 1);
        }
        
        $(conversation_copy_element).fadeTo(150, 1);
        $(conversation_form_element).fadeTo(150, 1);
        $(section_logo_element).fadeTo(150, 1);
      }
    } else {    
      // A String variable which will hold the filename which refers to the landing page.
      var landing_page_search_string = "";

      // A Number variable which will hold the location within 'url_string' that the filename 
      // which refers to the landing page appears.
      var landing_page_search_index;

      // The location within 'url_string' which the filename appears is passed on.
      landing_page_search_index = url_string.indexOf(landing_page_search_string);

      // IF/ELSE statement which will fade the visiblity of content of any page 
      // besides the landing page.
      if (landing_page_search_index > -1) {
        // String variables which will hold CSS selectors for various HTML elements are initialized.
        var header_selector = "";
        var article_selector = "";
        var section_logo_selector = "";

        // Object variables which will hold jQuery objects which refer to various HTML elements 
        // are initialized.
        var header_element = {};
        var article_element = {};
        var section_logo_element = {};

        // The CSS selectors for the HTML elements to be made visible or not visible are passed on.
        header_selector = "header";
        article_selector = "article";
        section_logo_selector = ".section-logo";

        // jQuery objects which refer to various HTML elements to be made visible are passed on.
        header_element = $(header_selector);
        article_element = $(article_selector);
        section_logo_element = $(section_logo_selector);
        
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
    }
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
  if (menu_icon_opacity !== "0")  {
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

      setTimeout(
        function () {
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
              var menu_border_selector = "";

              // An Object variable which will hold the jQuery object which referst to the border 
              // within the menu is initialized.
              var menu_border_element = {};

              // The CSS selector for the border within the menu is passed on. The selector is 
              // created by cocatenating the value of 'nav_selector' with '#div-menu-other-border'.
              menu_border_selector = nav_selector + " #div-menu-other-border";

              // A jQuery object which refers to the border within the menu is passed on.
              menu_border_element = $(menu_border_selector);

              $(menu_border_element).css(menu_items_css);
            }
          }
        }, 250
      );
      
      setTimeout(
        function () {
          $(menu_items_element).css(menu_items_css);
        }, 250
      );
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

  // A String variable which will hold a CSS selector for the menu is initialized.
  var nav_selector = "";

  // The CSS selector for the main menu is passed on by using the function, 'setNavSelector', 
  // to determine if the browser used is for a handheld device or a larger display.
  nav_selector = setNavSelector();

  // The CSS selector for the menu icon is passed on;
  menu_icon_selector = nav_selector + " #nav-link-menu";
  
  menu_icon_element = $(menu_icon_selector);

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
      // The menu icon is made to appear slightly to the left of its base position.
      $(menu_icon_element).css("marginLeft", "0");

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

  // The jQuery object which refers to the main menu is passed on.
  nav_element = $(nav_selector);

  // A String variable which will hold the CSS selector which refers to the submenu 
  // containing links to individual case studies is initialized.
  var case_studies_links_selector = "";

  // An Object variable which will hold the jQuery object which refers to the submenu 
  // containing links to individual case studies is initialized.
  var case_studies_links_element = {};

  // The CSS selector which refers to the submenu is passed on.
  case_studies_links_selector = "#ul-menu-case_studies";

  // The jQuery object which refers to the submenu is passed on.
  case_studies_links_element = $(case_studies_links_selector);

  // An Object variable which holds CSS values is initialized.
  var case_studies_links_css = {};

  // The CSS value which will reset the submenu from view is passed on.
  case_studies_links_css = {
    height: "auto", 
    display: "none"
  };

  // The submenu is hidden from view.
  $(case_studies_links_element).css(case_studies_links_css);

  // IF/ELSE statement which sets the click state of the menu icon according to 
  // the type of browser window, handheld device or tablet/desktop.
  if (nav_selector === ".section-nav-iphone") {
    // The CSS selector for the menu icon for the iPhone menu is updated.
    menu_icon_selector = ".section-nav-iphone " + menu_icon_selector;

    // A jQuery object which refers to the menu icon contained within the iPhone 
    // menu is passed on.
    menu_icon_element = $(menu_icon_selector);

    $(menu_icon_element).css("backgroundPosition", "0px 0px");

    $(nav_element).removeClass("nav-iphone-visible");
  } else if (nav_selector === ".nav-other") {
    $(menu_icon_element).css("backgroundPosition", "0px -120px");

    // A Number variable which will hold the width of the browser is initialized.
    var window_width;

    // The width of the browser is passed on using the jQuery Method, '.width()'.
    window_width = $(window).width();
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


function animateCaseStudies() {
/* 
 * This function will animate the visibility of the sub menu containing links 
 * to individual case studies.
 */
console.log("1");
  // A String variable which will hold the CSS selector of the individual links 
  // contained within the submenu is initialzed.
  var case_studies_links_selector = "";
 
  // A String variable which will hold the CSS selector of the submenu holding 
  // individual links to case studies is initialized.
  var ul_selector = "";

  // An Object variable which will hold the jQuery object referring to the <a> 
  // DOM elements for the links contained within the submenu is initialized.
  var case_studies_links_element = {};

  // An Object variable which will hold the jQuery object referring to the <ul>
  // DOM element holding the submenu is initialized.
  var ul_element = {};

  // The CSS selector of the links contained with the submenu is passed on.
  case_studies_links_selector = "#ul-menu-case_studies li .nav-links-text-a";

  // The CSS selector of the submenu holding links to individual case studies 
  // is passed on.
  ul_selector = "#ul-menu-case_studies";

  // The jQuery object which refers to the links contained within the 
  // submenu is passed on.
  case_studies_links_element = $(case_studies_links_selector);

  // The jQuery object which refers to the submenu holding links to individual 
  // case studies is passed on.
  ul_element = $(ul_selector);

  // An Object variable which will hold CSS values for the <a> DOM element for the 
  // submenu, is initialized.
  ul_css = {};

  // The CSS value for the visibility of the submenu is passed on.
  ul_css = {
    display: "block" 
  };

  // The submenu is made visible. NOTE: None of the <a> DOM elements are visible.
  $(ul_element).css(ul_css);

  // A Number variable which will hold the width of the browser window is initialized.
  var window_width;

  // The width of the browser window is passed on.
  window_width = $(window).width();

  // IF/ELSE statement which will set values of the CSS property, 'height', 
  // based on the size of the browser window.
  if (window_width <= 414) {
    ul_css = {
      height: "8.5rem" // 136px
    };

    // The CSS selector of the submenu is updated to include a selector which 
    // defines the iPhone main menu.
    ul_selector = "#nav-menu-iphone #nav-menu-items-iphone " + ul_selector;

    // The jQuery object which refers to the submenu contained with the main 
    // menu for the iPhone is passed on.
    ul_element = $(ul_selector);

    // The submenu which holds links for individual case studies is made visible.
    $(ul_element).css("display", "block");
  } else if (window_width > 414 && window_width <= 1024) {
    ul_css = {
      height: "9.5rem" // 152px
    };
  } else {
    ul_css = {
      height: "10.94rem" // 175px
    }
  }
  
  // A String variable which will hold the URL of the current webpage 
  // is initialized.
  var url_string = "";

  // The URL of the current webpage is passed on.
  url_string = window.location.pathname;

  // IF/ELSE statement which will run a set of commands if the current webpage 
  // is the landing page.
  if (url_string === "/" || url_string === "/index.htm")  {
    // IF/ELSE statement which scrolls the main menu towards the top of the window 
    // if the width of the browser width is greater than 1600px.
    if (window_width > 1600)  {
      // A String variable which will hold the CSS selector which refers to the 
      // main menu is initialized.
      var nav_selector = "";

      // An Object variable which will hold the jQuery object which refers to 
      // the main menu is initialized.
      var nav_element = {};

      // The CSS selector which refers to the main menu is passed on.
      nav_selector = "#nav-other-landing";

      // The jQuery object which refers to the main menu is passed on.
      nav_element = $(nav_selector);

      // An Object variable which will hold CSS values for the main menu is initialized.
      var nav_css = {};

      // A CSS value which will scroll the main menu towards the top of the browser 
      // window is passed on.
      nav_css = {
        top: "6.56rem" // 105px
      }

      // The main menu scrolls towards the top of the browser window.
      $(nav_element).animate(nav_css, 200);
    }
  }

  // The height of the submenu is increased so it can contain the <a> elements 
  // holding the links to case studies.
  setTimeout(
    function () {
      $(ul_element).animate(ul_css, 300);
    }, 300
  );

  // An Object variable which will hold CSS values for the <a> DOM elements contained 
  // within the submenu is initialized.
  case_studies_links_css = {};

  // The CSS value of the 'display' property of the links contained within the 
  // submenu is passed on.
  case_studies_links_css = {
    display: "block"
  };

  // The CSS value of the 'display' property of the links contained within the 
  // submenu is changed to 'block'.
  $(case_studies_links_element).css(case_studies_links_css);

  // The links contained within the submenu are made visible.
  setTimeout(
    function () {
      $(case_studies_links_element).fadeTo(400, 1);
    }, 750
  );

} // END of FUNCTION animateCaseStudies



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
    animateiPadPageElements(webpage_value);

    setTimeout(
      function () {
        animateOpenMenu(webpage_value);
      }, 800
    );

    menu_items_css = {
      display: "block", 
      opacity: 1
    };
  } else if (webpage_value === "close_menu") {
    menu_items_css = {
      display: "none", 
      opacity: 0
    };

    animateCloseMenu(webpage_value);

    setTimeout(
      function () {
        animateiPadPageElements(webpage_value);
      }, 800
    );
  }

  animateMenuOptions(menu_items_css);

  // IF/ELSE statement which animates the background of the menu if the browser is for 
  // a handheld device.
  if (nav_selector === ".section-nav-iphone") {
    // A String variable which holds the height the background of the menu will be as 
    // menu options are visible is initiated.
    var background_height = "";

    // IF/ELSE statement which for handheld devices lengthens the background of the menu 
    // or shortens it.
    if (webpage_value === "close_menu")  {
      // The default height of the menu is passed on.
      background_height = "4.69rem"; // 75px      
    } else {
      background_height = determineBackgroundHeight();
    }

    setTimeout(
      function () {
        $(nav_element).animate({
          height: background_height
        }, 500);    
      }, 125); 
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



function verifyFields(input_element, field_status) {
/* 
 * This function will verify the integrity of data entered into the contact form.
 */

  // Object variables which will hold CSS values used to style the <input> elements.
	var color_base_css = {};
	var color_valid_css = {};
	var color_error_css = {};
  
  // CSS values for the base state of the <input> fields.
	color_base_css = {
		borderColor: "#c1c6db",  
		backgroundColor: "#fff", 
		color: "#51545b"
	};
	
	color_valid_css = {
		borderColor: "#51545b", 
		backgroundColor: "#fff",
		color: "#000"
	};
	
	color_error_css = {
		borderColor: "#f6895b", 
		backgroundColor: "#fff", 
		color: "#f6895b"
	};
	
	var field_selector;
	var field_value;
	
	field_selector = $(input_element).attr("id");
	field_value = $(input_element).val();
	
	var default_value_string;
	var error_value_string;

	switch (field_selector) {
		case "input-conversation-full_name":
			default_value_string = "_ _ _ _ _  _ _ _ _ _ _ _ _";
			error_value_string = "Please enter your first and last name";
			
			if (field_value === error_value_string) { 
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	else {
					resetData(input_element, default_value_string, color_base_css);
				}
			}
			
			if (field_value === default_value_string) {
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	
			}
			
			if (field_value.length === 0) {
				if (field_status === "blur")	{
					resetData(input_element, default_value_string, color_base_css);
				}
			} else {
				if (field_value !== default_value_string && 
					field_status === "blur")	{
					validateData(input_element, error_value_string, color_valid_css, color_error_css);
				}	
			}
		break; 

		case "input-conversation-email_address":
			default_value_string = "_ _ _ _ _ @ _ _ _ _ _ _ _ . _ _ _";
			error_value_string = "Please retype your email address";
			
			if ((field_value === default_value_string || 
					 field_value === error_value_string) && 
				 	(field_status === "focus")) {
				clearData(input_element, color_valid_css);
			} else if (field_status === "blur") { 
				if (field_value.length > 7)	{
					validateData(input_element, error_value_string, color_valid_css, color_error_css);
				} else {
					resetData(input_element, default_value_string, color_base_css);
				}
			} 
		break;

		case "textarea-conversation-message":
			default_value_string = "Please enter your message here";
			
			if (field_value === default_value_string) {
				if (field_status === "focus")	{
					clearData(input_element, color_valid_css);
				}	else {
					resetData(input_element, default_value_string, color_base_css);
				}
			}
			
			if (field_value.length === 0) {
				if (field_status === "blur")	{
					resetData(input_element, default_value_string, color_base_css);
				}
			} else if (field_value !== default_value_string) {
				$(input_element).css(color_valid_css);
			}
		break;
	}
}

function validateData(input_element, error_value_string, color_valid_css, color_error_css)	{
	var field_selector;
	var field_value;
	
	field_selector = $(input_element).attr("id");
	field_value = $(input_element).val();
	
	var search_string;
	var search_index_num;
	
	switch ($(input_element).attr("id"))	{
		case "input-contact-full_name": 

			search_string = " ";
			search_index_num = field_value.indexOf(search_string);

			if (search_index_num > 1)	{
				$(input_element).css(color_valid_css);
			}	else {
				$(input_element).css(color_error_css);
				$(input_element).val(error_value_string);
			}
		break;

		case "input-contact-email_address": 
			var search_string_Array;
			var email_string;

			search_string_Array = [
				"@", 
				".", 
				"com", 
				"net", 
				"org", 
				"mil", 
				"edu"
			];

			email_string = field_value;

			var is_valid_results_Array;
			var inc;

			is_valid_results_Array = [];
			inc = 0;

			search_string_Array.forEach(
				function (item, index)	{
					var search_string;
					var search_result_num;

					search_string = item;


					search_result_num = email_string.indexOf(search_string);

					if (search_result_num > -1)	{
						is_valid_results_Array[index] = true;
					} else {
						is_valid_results_Array[index] = false;
					}
				}
			);
						
			var is_valid;
			
			is_valid = false;
			
			if (is_valid_results_Array[0] === true &&  
				 	is_valid_results_Array[1] === true)	{
				var i;
			
				for (i = 2; i < is_valid_results_Array.length; i++)	{
					if (is_valid_results_Array[i] === true)	{
						is_valid = true;
					}
				}	
			}	else {
				is_valid = false;
			}
			
			if (is_valid === true)	{
				$(input_element).css(color_valid_css);
			} else {
				$(input_element).css(color_error_css);
				$(input_element).val(error_value_string);
			}
			
		break;
		
	}
}

function clearData(input_element, color_valid_css)	{
	$(input_element).val("");
	$(input_element).css(color_valid_css);
}

function resetData(input_element, default_value_string, color_base_css) {
	$(input_element).css(color_base_css);
	$(input_element).val(default_value_string);	
}
