// mobile humburger menu start 
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('navbar-sticky');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('open-navbar');
    menuIconOpen.classList.toggle('hidden');
    menuIconClose.classList.toggle('hidden');
    $("nav").toggleClass("drop-shadow-md");
});
// mobile humburger menu end

$(document).ready(function() {
  $(".dropdown_arrow").click(function() {
      var parentElement = $(this).parent();
      parentElement.toggleClass("openMegaMenu").siblings().removeClass("openMegaMenu");
  });
});


// fixed header start here 
document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector("header");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
          header.classList.add("fixed-header");
      } else {
          header.classList.remove("fixed-header");
      }
  });
});
// fixed header end here 