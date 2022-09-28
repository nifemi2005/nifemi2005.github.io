var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    // slidesPerGroup: 3,
    loop: true,
    // loopFillGroupWithBlank: true,
    centralSlide:'true',
    fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
             slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
       950: {
           slidesPerView: 3,
        },
    },
 });
 const li=document.querySelectorAll(".links");
 const sec=document.querySelectorAll("section");

function activeMenu(){
  let len=sec.length;
  while(--len && window.scrollY +  97 < sec[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}
 

 