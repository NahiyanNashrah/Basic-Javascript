const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const housHand = document.querySelector('.hour-hand');
function setDate(){
    const today = new Date();
    
    let seconds = today.getSeconds();
    let secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform =  `rotate(${secondsDegree}deg)`;

    let minutes = today.getMinutes();
    let minutesDegree = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform =  `rotate(${minutesDegree}deg)`;

    let hours = today.getHours();
   // let hoursDegree = ((minutes / 12) * 360) + 90;
    const hourDegree = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    housHand.style.transform =  `rotate(${hourDegree}deg)`;

}
setInterval(setDate, 1000);