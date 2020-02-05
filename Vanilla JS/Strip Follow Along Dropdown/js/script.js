const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(){
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if(this.classList.contains('trigger-enter'))
            this.classList.add('trigger-enter-active');
    },150);  
    background.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    const dropdownCords = dropdown.getBoundingClientRect();
    console.log(dropdownCords);
    const navCords = nav.getBoundingClientRect();

    const coOrdinates = {
        height : dropdownCords.height,
        width : dropdownCords.width,
        top : dropdownCords.top - navCords.top,
        left : dropdownCords.left - navCords.left
    };
    background.style.setProperty('width',`${coOrdinates.width}px`);
    background.style.setProperty('height',`${coOrdinates.height}px`);
    background.style.setProperty('transform',`translate(${coOrdinates.left}px, ${coOrdinates.top}px`);


}

function handleLeave(){
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));