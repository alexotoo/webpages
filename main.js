const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBrand = document.querySelector(".menu-brand");
const menuNav = document.querySelector(".menu-nav");
const NavItem = document.querySelectorAll(".nav-item");

//setting original menu

let showManue = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showManue) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");
    NavItem.forEach(item => item.classList.add("show"));

    showManue = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    NavItem.forEach(item => item.classList.remove("show"));

    //set to original
    showManue = false;
  }
}
