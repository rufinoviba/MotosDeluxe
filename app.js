let nexDon = document.getElementById('next');
let preDon = document.getElementById('prev');
let carouselDon = document.querySelector('.carousel');
let listaItemDon = document.querySelector('.carousel .lista');
let thumbainDon = document.querySelector('.carousel .thumbain');

nexDon.onclick = function(){
    showSlider('next');
}
preDon.onclick = function(){
    showSlider('prev');
}

let timeRuning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    nexDon.click();
   }, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .lista .item');
    let itemThumbain = document.querySelectorAll('.carousel .thumbain .item');


    if(type === 'next'){
        listaItemDon.appendChild(itemSlider[0]);
        thumbainDon.appendChild(itemThumbain[0]);
        carouselDon.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length -1;
        listaItemDon.prepend(itemSlider[positionLastItem]);
        thumbainDon.prepend(itemThumbain[positionLastItem]);
        carouselDon.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carouselDon.classList.remove('next');
        carouselDon.classList.remove('prev');
    }, timeRuning)

    clearTimeout(unAutoRun);
    runAutoRun = setTimeout(()=>{
     nexDon.click();
    }, timeAutoNext);

}

