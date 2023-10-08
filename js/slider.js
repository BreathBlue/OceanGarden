(function(){
    const sliders = [...document.querySelectorAll('.creadores__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
   
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currenCreadores = document.querySelector('.creadores__body--show').dataset.id;
        value = Number(currenCreadores);
        value+= add;
        sliders[Number(currenCreadores)-1].classList.remove('creadores__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('creadores__body--show');
    } 
})();