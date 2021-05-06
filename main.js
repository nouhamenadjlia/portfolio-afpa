/*------------------------------------fermeture du menu -----------------------------------------------*/
$('.shut-menu').on('click', function(){
  $('.toggler').click();
  });
  /*-------------------------------projets-----------------------------------------------*/

  $(document).ready(function(){

  const items = document.querySelectorAll('img');
  const nbSlide = items.length;
  const suivant = document.querySelector('.right');
  const precedent = document.querySelector('.left');
    let count = 0;

  function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
  }
suivant.addEventListener('click', slideSuivante)


 function slidePrecedente(){
  items[count].classList.remove('active');

  if(count > 0){
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add('active')
  // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
  console.log(e);
    
  if(e.keyCode === 37){
    slidePrecedente();
} else if(e.keyCode === 39){
  slideSuivante();
  }
}
 document.addEventListener('keydown', keyPress)
  })




/*---------------------------------------------skils-----------------------------------------------*/
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