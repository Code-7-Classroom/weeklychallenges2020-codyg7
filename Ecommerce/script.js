const navSlide = () => {
  const burger = document.querySelector(".nav--burger"); //grabbing css selector with name .nav--burger
  const nav = document.querySelector(".nav--links"); //grabbing css selector with name .nav--links
  const navLinks = document.querySelectorAll(".nav--links li"); //grabbing css selector called .nav--links li

  burger.addEventListener("click", () => {
    //when click on burger selector run this function
    // toggle nav
    nav.classList.toggle("nav--active"); //add name nav--active to nav--links when click on burger

    // animate links
    navLinks.forEach((link, index) => {
      //index how many links and grab all links
      if (link.style.animation) {
        link.style.animation = ""; //if links exist equals nothing
      } else {
        //else run animation
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`; //giving delay between each link for animation
      }
    });
    // burger animation
    burger.classList.toggle("toggle"); //add name toggle to nav--burger when clicked on the burger to start animation
  });
};

navSlide(); //invoke the function
