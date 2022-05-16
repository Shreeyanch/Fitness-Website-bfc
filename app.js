document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-links");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hide-menu");
  });
});
