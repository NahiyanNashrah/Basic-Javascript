const panels = document.querySelectorAll('.panel');
function clickImage(){
    this.classList.toggle('open');
}
function addActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
panels.forEach(panel => panel.addEventListener('click',clickImage));
panels.forEach(panel => panel.addEventListener('transitionend',addActive));