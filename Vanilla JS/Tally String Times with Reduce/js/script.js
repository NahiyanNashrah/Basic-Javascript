const timeNodes = [...document.querySelectorAll('[data-time]')];
console.log(timeNodes);
const seconds = timeNodes
    .map( node => node.dataset.time)
    .map( timeNode => {
        const [min, sec] = timeNode.split(':').map(parseFloat);
        return ((min*60)+sec)
    })
    .reduce((total,second) => total+second);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft/3600);
secondsLeft %= 3600;
const mins = Math.floor(secondsLeft/60);
secondsLeft %= 60;
console.log(hours ,mins, secondsLeft);