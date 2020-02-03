const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);
function highlightLink(){
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const linkCoOrdinates = this.getBoundingClientRect();
    const coOrdinates = {
        width : linkCoOrdinates.width,
        height: linkCoOrdinates.height,
        top : window.scrollY + linkCoOrdinates.top, //since top,right,left,bottom position changes according to scrolling position
        left : window.scrollX + linkCoOrdinates.left
    }
    console.log(linkCoOrdinates);
    highlight.style.width = `${linkCoOrdinates.width}px`;
    highlight.style.height = `${linkCoOrdinates.height}px`;
    highlight.style.transform = `translate(${coOrdinates.left}px, ${coOrdinates.top}px)`;
}
triggers.forEach(a => a.addEventListener('mouseenter',highlightLink));