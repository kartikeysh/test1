
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
const body = document.querySelector( 'body' ); 
var x = window.matchMedia("(max-width: 1000px)")
console.log(menuItems)
function checkb() {
  
  if (x.matches) {
    if (checkbox.checked) {
       

        navbarUL.style.left = '0';
        navbarUL.style.zIndex = '1000';
        navbarUL.style.width = '70%';
        navbarUL.style.setProperty("box-shadow", "5px 0 50px rgba(125, 124, 124, 0.5)"); 
        body.style.setProperty(" overflow"," hidden;")      
    } else {
        navbarUL.style.left = '-100%';
        navbarUL.style.width = '100%';  // Change this to -100% to hide the menu
      
    }
  }
}
// if(checkbox.checked)
// {
//   console.log("hello")
//   checkb;
  
// }
function openNav() {
  if (x.matches) {
  checkbox.addEventListener( "change", checkb );
  }
}
// function closeNav()
// {
//   checkbox.checked = false;
//   console.log("working")
//   checkb();
// }
checkbox.addEventListener('change',checkb)

  
  // checkb();
  

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        checkbox.checked = false;
        console.log("working")
        checkb(); // Call the checkb function to update the styles
    });
});


document.addEventListener('click', function(event) {
  if (!navbarUL.contains(event.target) && event.target  !== icg && event.target !== checkbox) {
    console.log("in if" )  
    checkbox.checked = false;
      checkb()
  }
  else{
    console.log("in else")
 openNav();
  }
});





