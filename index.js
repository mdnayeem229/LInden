var header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 500){
        header.classList.add('header-active');
    }
    else{
        header.classList.remove('header-active');
    }
})
 //this is for slideshow
 var slideImage = document.getElementById('slideImage');
 var images = new Array(
     "images/pexels-aleksandar-pasaric-2115367.jpg",
     "images/pexels-luis-ruiz-1292843.jpg",
     "images/pexels-pixabay-220769.jpg",
     "images/pexels-pixabay-220769.jpg",
     "images/pexels-zhang-kaiyv-683419.jpg"
 );
 var len = images.length;
 var i = 0;
 function slider(){
 if(i > len-1){
     i = 0;
 }
 slideImage.src = images[i];
 i++;
 setTimeout('slider()', 4000);
 }
 //sidbar 
    const listmenu = document.querySelector('.listmenu');
const sidbar = document.querySelector('.sidbar');
const close = document.querySelector('#close');
listmenu.onclick = function(){
  sidbar.style.display = 'block';
}
close.onclick = function(){
  sidbar.style.display = 'none';
}


      //this is for carousel slide
      new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        dots: '#dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }, 
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 400,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 1,
              slidesToScroll: 1,
              duration: 0.25
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              duration: 0.25
            }
          }
        ]
      });
     //top to scrollbar 
var toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add('to-top-active');
    }
    else{
        toTop.classList.remove('to-top-active');
    }
})
       












