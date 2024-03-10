// swiper script
const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

const burguer = document.querySelector("#burguer")

function abrirMenu(){
    const navBar = document.querySelector("#nav-bar")
    navBar.classList.toggle('abrir')
}

burguer.addEventListener('click', abrirMenu)
