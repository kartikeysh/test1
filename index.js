
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
  var rev  = 170;
  if(revTop < windowHeight - rev)
  {
    reveal[0].classList.add('active')
  }


}
var checkbox = document.getElementById('check');
const navbarUL = document.querySelector('.navbar ul');
const icg = document.getElementById('btn');
const igc = document.getElementById('cancel');
const menuItems = document.querySelectorAll('.dxd')
console.log(menuItems)
function checkb() {
    if (checkbox.checked) {
        navbarUL.style.left = '0';
        navbarUL.style.zIndex = '1000';
       
    } else {
        navbarUL.style.left = '-100%'; // Change this to -100% to hide the menu
      
    }
}
// if(checkbox.checked)
// {
//   console.log("hello")
//   checkb;
  
// }
function openNav() {
  checkbox.addEventListener( "change", checkb );
}
function closeNav()
{
  checkbox.checked = false;
  console.log("working")
  checkb();
}

  
  // checkb();
  

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        checkbox.checked = false;
        console.log("working")
        checkb(); // Call the checkb function to update the styles
    });
});

