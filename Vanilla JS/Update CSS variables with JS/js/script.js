const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}` ,this.value + suffix); //--${this.name} => --spacing / --blur /--base
}

inputs.forEach(input => {
    input.addEventListener('change',handleUpdate);
})