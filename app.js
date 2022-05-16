document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-links");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hide-menu");
    
    if(mobileMenu.classList.contains('hide-menu')){
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>'
    }else{
      menuBtn.innerHTML = '<i class="fa-solid fa-close"></i>'

    }

  });
});
