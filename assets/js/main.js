var time_value;function animateTransitions(){var e;"/"===(e=window.location.pathname)||"/index.htm"===e?animateLandingPageElements():animatePageElements(e)}function animateLandingPageElements(){var e,a,n,o,t,i,s,r,c,l,v="";e=setNavSelector();window.location.pathname,section_logo_selector="#section-nav-iphone"===e?e+" #section-logo-iphone-landing":(v=e+" #nav-menu-items-other","#section-logo-other-landing"),a=$("#header-intro-welcome"),n=$("#header-intro-name"),o=$("#header-name"),t=$("#header-border-name"),i=$(".header-copy"),c=$(v),l=$(e),s=$("#section-social"),r=$(section_logo_selector),$(a).fadeTo(2*time_value,1),$(r).fadeTo(2*time_value,1),$(n).delay(2.5*time_value).fadeTo(2*time_value,1),$(o).delay(5*time_value).fadeTo(2*time_value,1),$(t).delay(7*time_value).fadeTo(1.5*time_value,1),$(i).delay(9.5*time_value).fadeTo(2.25*time_value,1),$(s).delay(11.5*time_value).fadeTo(2*time_value,1);"#section-nav-iphone"===e?($(c).delay(12.8*time_value).fadeTo(2*time_value,1),$(l).delay(12.8*time_value).fadeTo(2*time_value,1)):($(c).delay(11.5*time_value).fadeTo(2*time_value,1),$(l).delay(11.5*time_value).fadeTo(2*time_value,1))}function animatePageElements(e){var a,n,o,t,i="",s={};if("header h1",".header-border-title",i="#section-logo-other",a=setNavSelector(),n=$("header h1"),o=$(".header-border-title"),s=$(i),t=$(a),$(t).fadeTo(1.75*time_value,1),"#nav-other"!==a&&"#nav-other-conversation"!==a||("#nav-other-conversation"===a&&(i="#section-logo-other-conversation",s=$(i)),$(s).fadeTo(2.25*time_value,1)),$(n).fadeTo(2.25*time_value,1),"/start_a_conversation.htm"===e){if(1024<$(window).width()){var r;r=$("#input-conversation-submit");"Click to send your message",$(r).prop("value","Click to send your message")}var c,l;c=setConversationSelector(),l=$(c);if("#confirmation"===window.location.hash){var v,u,m;"#section-conversation-links","#form-conversation",v=$("#div-conversation-copy"),u=$("#section-conversation-links"),m=$("#form-conversation");var d;d={display:"none"},$(v).css(d),$(u).css(d),$(m).css(d)}$(l).delay(2.25*time_value).fadeTo(2.25*time_value,1)}else{var _;_=$("article"),$(_).delay(2.25*time_value).fadeTo(2.25*time_value,1)}$(o).delay(4.5*time_value).fadeTo(2.25*time_value,1)}function setConversationSelector(){var e;"#confirmation"===window.location.hash?conversation_selector="#div-conversation-copy-confirmation":(e=$(window).width(),conversation_selector=e<768?"#section-conversation-links, #div-conversation-copy, #spacer-horizontal-div-conversation, #form-conversation":768<=e&&e<=1024?"#div-conversation-copy, #spacer-horizontal-div-conversation, #form-conversation":"#div-conversation-copy, #form-conversation");return conversation_selector}function animateiPadPageElements(e){if(414<(s=$(window).width())&&s<=1024){var a;if("start_a_conversation.htm"===(a=window.location.pathname)){var n,o,t,i,s,r="",c={};if(r="header","#section-conversation-links","#div-conversation-copy","#spacer-horizontal-div-conversation","#form-conversation",c=$(r),n=$("#section-conversation-links"),o=$("#div-conversation-copy"),t=$("#spacer-horizontal-div-conversation"),i=$("#form-conversation"),"open_menu"===e)$(c).fadeTo(.1*time_value,0),(s=$(window).width())<=414&&$(n).fadeTo(.1*time_value,0),s<=1024&&$(t).fadeTo(.1*time_value,0),$(o).fadeTo(.1*time_value,0),$(i).fadeTo(.1*time_value,0),$(v).fadeTo(.1*time_value,0);else"close_menu"===e&&($(c).fadeTo(.4*time_value,1),s<=414&&$(n).fadeTo(.4*time_value,1),s<=1024&&$(t).fadeTo(.4*time_value,1),$(o).fadeTo(.4*time_value,1),$(i).fadeTo(.4*time_value,1),$(v).fadeTo(.4*time_value,1))}else{if("/index.htm","/"!==a&&"/index.htm"!==a){r="",c={};var l,v={};r="header","article","#section-logo-other",c=$(r),l=$("article"),v=$("#section-logo-other"),"open_menu"===e?($(c).fadeTo(.1*time_value,0),$(l).fadeTo(.1*time_value,0),$(v).fadeTo(.1*time_value,0)):"close_menu"===e&&($(c).fadeTo(.4*time_value,1),$(l).fadeTo(.4*time_value,1),$(v).fadeTo(.4*time_value,1))}}}}function animateMenuIcon(){var e,a;e=nav_selector+" #nav-link-menu",a=$(e);"1"===$(a).css("opacity")?setTimeout(function(){$(a).fadeTo(time_value,0)},.5*time_value):$(a).fadeTo(time_value,1)}function animateMenuOptions(a){var n;n=setNavSelector();var e,o,t="";t=(o=$(window).width())<=414?n+" #nav-menu-items-iphone":n+" #nav-menu-items-other",e=$(t),setTimeout(function(){setTimeout(function(){if("#section-nav-iphone"!==n&&414<o&&o<=1024){var e;e=$(n+" #div-menu-other-border"),$(e).css(a)}},.6*time_value),setTimeout(function(){$(e).css(a)},.6*time_value)},.8*time_value)}function animateOpenMenu(e){var a,n;if(n=setNavSelector(),a=$(n+" #nav-link-menu"),"#section-nav-iphone"===n){$(a).css("backgroundPosition","0px -80px");var o;o=$(n),$(o).addClass("nav-iphone-visible")}else if("#nav-other"===n||"#nav-other-conversation"===n){$(window).width()<=1024&&$(a).css("marginLeft","0"),$(a).css("backgroundPosition","0px -240px")}$(a).attr("href","#close_menu")}function animateCloseMenu(e){var a="",n={};a="#nav-link-menu",n=$(a);var o;o=setNavSelector(),nav_element=$(o);var t;t=$("#ul-menu-case_studies");var i;if(i={height:"auto",display:"none"},$(t).css(i),"#section-nav-iphone"===o)a="#section-nav-iphone "+a,n=$(a),$(n).css("backgroundPosition","0px 0px"),$(nav_element).removeClass("nav-iphone-visible");else if("#nav-other"===o||"#nav-other-conversation"===o){$(n).css("backgroundPosition","0px -120px"),$(window).width()}$(n).attr("href","#open_menu")}function determineBackgroundHeight(){return $(window).width(),background_height=window.innerHeight,background_height}function animateCaseStudies(){var e,a,n="",o={};n="#ul-menu-case_studies",e=$("#ul-menu-case_studies li .nav-links-text-a"),o=$(n),ul_css={},ul_css={display:"block"},$(o).css(ul_css),(a=$(window).width())<=414?(ul_css={height:"8.5rem"},n="#section-nav-iphone #nav-menu-iphone #nav-menu-items-iphone "+n,o=$(n),$(o).css("display","block")):ul_css=414<a&&a<=1024?{height:"9.5rem"}:{height:"10.94rem"};var t;if(("/"===(t=window.location.pathname)||"/index.htm"===t)&&1600<a){var i;i=$("#nav-other-landing");var s;s={top:"6.56rem"},$(i).animate(s,200)}setTimeout(function(){$(o).animate(ul_css,300)},.75*time_value),case_studies_links_css={},case_studies_links_css={display:"block"},$(e).css(case_studies_links_css),setTimeout(function(){$(e).fadeTo(time_value,1)},1.75*time_value)}function animateMenu(e){var a,n;if(a=setNavSelector(),n=$(a),menu_items_css={},"open_menu"===e?(animateMenuIcon(),setTimeout(function(){animateiPadPageElements(e)},time_value),setTimeout(function(){animateOpenMenu(e)},1.5*time_value),setTimeout(function(){animateMenuIcon()},time_value),menu_items_css={display:"block",opacity:1}):"close_menu"===e&&(menu_items_css={display:"none",opacity:0},animateCloseMenu(e),setTimeout(function(){animateiPadPageElements(e)},1.5*time_value)),animateMenuOptions(menu_items_css),"#section-nav-iphone"===a){var o="";o="close_menu"===e?"4.69rem":determineBackgroundHeight();if("iPhone"!==navigator.platform)setTimeout(function(){$(n).animate({height:o},1.25*time_value)},.6*time_value);else{var t;t={height:o},setTimeout(function(){$(n).css(t)},.6*time_value)}}}function setNavSelector(){if($(window).width()<=414)nav_selector="#section-nav-iphone";else{var e;e=window.location.pathname,nav_selector="/"===e||"/index.htm"===e?"#nav-other-landing":"/start_a_conversation.htm"===e?"#nav-other-conversation":"#nav-other"}return nav_selector}function verifyFields(e,a){var n,o,t,i,s,r,c;switch(n={borderColor:"#c1c6db",backgroundColor:"#fff",color:"#51545b"},o={borderColor:"#51545b",backgroundColor:"#fff",color:"#000"},t={borderColor:"#f6895b",backgroundColor:"#fff",color:"#f6895b"},i=$(e).attr("id"),s=$(e).val(),i){case"input-conversation-full_name":r="_ _ _ _ _  _ _ _ _ _ _ _ _",s===(c="Please enter your first and last name")&&("focus"===a?clearData(e,o):resetData(e,r,n)),s===r&&"focus"===a&&clearData(e,o),0===s.length?"blur"===a&&resetData(e,r,n):s!==r&&"blur"===a&&validateData(e,c,o,t);break;case"input-conversation-email_address":c="Please retype your email address",s!==(r="_ _ _ _ _ @ _ _ _ _ _ _ _ . _ _ _")&&s!==c||"focus"!==a?"blur"===a&&(7<s.length?validateData(e,c,o,t):resetData(e,r,n)):clearData(e,o);break;case"textarea-conversation-message":s===(r="Please enter your message here")&&("focus"===a?clearData(e,o):resetData(e,r,n)),0===s.length?"blur"===a&&resetData(e,r,n):s!==r&&$(e).css(o)}}function validateData(e,a,n,o){var t;switch($(e).attr("id"),t=$(e).val(),$(e).attr("id")){case"input-contact-full_name":" ",1<t.indexOf(" ")?$(e).css(n):($(e).css(o),$(e).val(a));break;case"input-contact-email_address":var i,s,r,c;if(i=t,s=[],0,["@",".","com","net","org","mil","edu"].forEach(function(e,a){var n,o;n=e,o=i.indexOf(n),s[a]=-1<o}),!(r=!1)===s[0]&&!0===s[1])for(c=2;c<s.length;c++)!0===s[c]&&(r=!0);else r=!1;!0===r?$(e).css(n):($(e).css(o),$(e).val(a))}}function clearData(e,a){$(e).val(""),$(e).css(a)}function resetData(e,a,n){$(e).css(n),$(e).val(a)}time_value=400,$(document).ready(function(){$(window).on("hashchange",function(){var e;if("open_menu"===(e=window.location.hash.slice(1))||"close_menu"===e)animateMenu(e);else if("case_studies"===e)animateCaseStudies();else{var a;a="http://chrisjamison.com/"+e+".htm";var n;n=$("body"),$(n).fadeTo(.6*time_value,0),setTimeout(function(){window.location.href=a},.75*time_value)}}),$("#input-conversation-full_name, #input-conversation-email_address, #textarea-conversation-message").focusin(function(){verifyFields(this,"focus")}),$("#input-conversation-full_name, #input-conversation-email_address, #textarea-conversation-message").focusout(function(){verifyFields(this,"blur")}),$("#input-conversation-submit").mouseover(function(){var e;e=$("#input-conversation-submit");var a;a={backgroundColor:"#ec1a63",color:"#fff"},$(e).animate(a,350)}),$("#input-conversation-submit").mouseout(function(){$("#input-conversation-submit");var e;e={backgroundColor:"#fff",borderColor:"#ec1a63",color:"#ec1a63"},$(e).animate(e,350)}),$("#a-case_study-viewing_info-lvps, #a-resume-work-viewing_info-lvps").click(function(){var e;e=$(window).width();window.location=e<=1024?"http://chriscjamison.com/lvps/lvps-mobile.htm":"http://chriscjamison.com/lvps"}),$("#a-case_study-viewing_info-la, #a-resume-work-viewing_info-la").click(function(){var e;e=$(window).width();window.location=1024<e?"http://chriscjamison.com/la/la-desktop.htm":"http://www.leadersacademy.com"})}),$(window).on("load",function(){animateTransitions()});