const mobileMenu = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close-btn");
const firtsNav = document.querySelector(".first-nav");
const secondNav = document.querySelector(".second-nav");
const minWidth = 768;

document.addEventListener("resize", () => {

const screenWidth = window.innerWidth;

if (minWidth >= screenWidth) {
    
}

});

mobileMenu.addEventListener("click", () => {
    secondNav.style.transitionDuration = "600ms";
    secondNav.style.left = 0;
});

closeBtn.addEventListener("click", () => {
    secondNav.style.transitionDuration = "600ms";
    secondNav.style.left = "-10000px";
});