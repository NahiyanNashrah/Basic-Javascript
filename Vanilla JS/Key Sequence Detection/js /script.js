const pressed = [];
const secretCode = 'hello';
window.addEventListener('keyup',(e) => {
    console.log(e.key);
    pressed.push(e.key);
    console.log(pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length));
    console.log(pressed);
    if(pressed.join('').includes(secretCode)){
        console.log(`Found`);
        cornify_add();
    }
});