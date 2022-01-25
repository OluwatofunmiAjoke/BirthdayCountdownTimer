const userDate = '13 Aug 2022';

const daysElement  = document.querySelector('#days');
const hourElement  = document.querySelector('#hours');
const minsElement  = document.querySelector('#mins');
const secsElement  = document.querySelector('#seconds');


function countdownTimer(){
    const currDate = new Date();

    const endDate = new Date(userDate);
    
    const diff = endDate - currDate;

    const totalSeconds = diff / 1000;
    const days = Math.floor(totalSeconds/86400);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hourElement.innerHTML = hours;
    minsElement.innerHTML = minutes;
    secsElement.innerHTML = seconds;

}

countdownTimer();
setInterval(countdownTimer, 1000);

