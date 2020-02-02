const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
function handleCheck(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkboxes.forEach(box => {
            console.log(box);
            if(box === this || box === lastChecked){
                inBetween = !inBetween;
                console.log(`Starting to check`);
            }
            if(inBetween)
            box.checked = true;
        });
    }
    lastChecked = this;
}
checkboxes.forEach(box => box.addEventListener('click',handleCheck));