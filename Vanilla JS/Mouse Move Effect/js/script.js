const divElement = document.querySelector('.hero');
const heading = divElement.querySelector('h1');
let walk = 100; //100px
function shadow(e){
    const width = divElement.offsetWidth;
    const height = divElement.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;
    /*'this' is always divElement but target can change to heading when we hovering over heading
    heading is a child of divElement.so when we hovering over this it will give the actual x & y.hence we add some
    value */
    if(this !== e.target){
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y/ height * walk) - (walk / 2));
    console.log(xWalk,yWalk);

    heading.style.textShadow = `${xWalk}px ${yWalk}px 0 yellow`;

}
divElement.addEventListener('mousemove',shadow);