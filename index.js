const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const linksa = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener('click', () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fades");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 20) {
      $(".navbar").removeClass("compressed");
      linksa.forEach(link => {
        link.classList.add("color_change");
        $(".logo").addClass("color_change_l");
      });
    } else {
      $(".navbar").addClass("compressed");
      linksa.forEach(link => {
        link.classList.remove("color_change");
        $(".logo").removeClass("color_change_l");
      });
    }
  });
});
