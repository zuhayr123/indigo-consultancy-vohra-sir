const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fades");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

$(document).ready(function() {
    $(window).on("scroll", function() {
      if ($(window).scrollTop() >= 20) {
        $(".navbar").removeClass("compressed");
      } else {
        $(".navbar").addClass("compressed");
      }
    });
  });
  