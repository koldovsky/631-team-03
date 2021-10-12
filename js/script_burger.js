let gamburgerMenu = document.querySelector('.gamburger_menu');
let navLinks = document.querySelector('.nav_links_burger');



gamburgerMenu.addEventListener('click', function () {
  gamburgerMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
})