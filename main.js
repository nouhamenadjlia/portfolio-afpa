/*const shutMenu= document.querySelector(".shut-menu");
let menuOpen = open;
shutMenu.addEventListener('click', () => {
    shutMenu.classList.remove('open');
    menuOpen = false;
    
});*/
/*let open = false;
$('.shut-menu').on('click', function(){
   if (open == false){
    $('.menu').show()
      open = true;
   }else{
    $('.menu').hide(); 
      open = false;
   }
});*/
$('.shut-menu').on('click', function(){
  $('.toggler').click();
  });
  
 




const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
  portfolioItem.addEventListener('mouseover', () => {
    console.log(portfolioItem.childNodes[1].classList)
    portfolioItem.childNodes[1].classList.add('image-blur');
  });

  portfolioItem.addEventListener('mouseout', () => {
    console.log(portfolioItem.childNodes[1].classList)
    portfolioItem.childNodes[1].classList.remove('image-blur');
  });
});