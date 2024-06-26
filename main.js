const mobileMenu = document.querySelector(".hamburger-menu");
const closeBtn = document.querySelector(".close-btn");
const firtsNav = document.querySelector(".first-nav");
const secondNav = document.querySelector(".second-nav");
const minWidth = 768;
let screenWidth;


window.addEventListener("resize", () => {
screenWidth = window.innerWidth;

if (minWidth >= screenWidth) {
    secondNav.classList.remove("show-nav");
}
});

// this function open menu on mobile
mobileMenu.addEventListener("click", () => {
    screenWidth = window.innerWidth;

 if (minWidth >= screenWidth) {
    secondNav.classList.add("show-nav");
}});

// this function close menu on mobile
closeBtn.addEventListener("click", () => {
    secondNav.classList.remove("show-nav");
});