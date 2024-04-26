const mobileMenu = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close-btn");
const firtsNav = document.querySelector(".first-nav");
const secondNav = document.querySelector(".second-nav");
const minWidth = 780;
const screenWidth = window.innerWidth;

if (minWidth >= screenWidth) {
    firtsNav.style.marginBottom ="0";

    if (closeBtn.style.display ="none") {
        closeBtn.style.display ="block";
    } else {
        closeBtn.style.display ="none";
    }

    secondNav.style.display ="block";

    mobileMenu.addEventListener("click", () => {
        secondNav.style.transitionDuration = "600ms";
        secondNav.style.left = 0;
    });
    
    closeBtn.addEventListener("click", () => {
        secondNav.style.transitionDuration = "600ms";
        secondNav.style.left = "-10000px";
    });
}