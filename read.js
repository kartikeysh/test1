const swiper = new Swiper('.swiper', {
    
    autoplay:{
        delay:3000,
        disableOnInteraction:false,

    },

    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  });
  window.addEventListener('scroll', reveal);
function reveal(){
  var reveal = document.querySelectorAll(".cont");
  var windowHeight = window.innerHeight
  console.log(windowHeight);
  var revTop = reveal[0].getBoundingClientRect().top;
  console.log(revTop)
  var rev  = 120;
  if(revTop < windowHeight - rev)
  {
    reveal[0].classList.add('active')
  }


}