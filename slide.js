//cutii
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img')

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 0;
var size = carouselImages[0].clientWidth

prevBtn.style.opacity = "0";  
prevBtn.style.cursor = "default";

//Modific dimensiunea imaginii si raita cand fereastra se modifica
window.onresize = function(){
    carouselSlide.style.transition='none';
    size = carouselImages[0].clientWidth
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px';
};

//inainte
nextBtn.addEventListener('click',()=>{
    // size = carouselImages[0].clientWidth
    if(counter>=carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px';
    prevBtn.style.transition = "opacity 0.8s"
    prevBtn.style.opacity = "1";  
    prevBtn.style.cursor = "pointer";
});

//inapoi
prevBtn.addEventListener('click',()=>{
    // size = carouselImages[0].clientWidth
    if(counter<=1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px';
});

//cand se termina slide-ul o luam de la capat
carouselSlide.addEventListener('transitionend',()=>{
    if(carouselImages[counter].id==='lastClone')
    {
        carouselSlide.style.transition='none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px';
    }
    else if(carouselImages[counter].id==='firstClone')
    {
        carouselSlide.style.transition='none';
        counter = 2;
        carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px';
    }
})