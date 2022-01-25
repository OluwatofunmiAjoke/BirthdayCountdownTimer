const userDate = '13 Aug 2022';

const daysElement  = document.querySelector('#days');
const hourElement  = document.querySelector('#hours');
const minsElement  = document.querySelector('#mins');
const secsElement  = document.querySelector('#seconds');
const mainText = document.querySelector('h1')


function countdownTimer(){
    const currDate = new Date();

    const endDate = new Date(userDate);

    if (currDate === endDate | currDate > endDate){
        mainText.innerText = "WELCOME TO 22, AJOKE!!!";
        mainText.style.color= '#34c9eb';
        mainText.style.fontFamily = 'Dancing Script';
        mainText.style.fontSize = '7rem';
        document.body.style.backgroundImage = "url('./images/over-bg.jpg')";
        daysElement.innerHTML = '0';
        hourElement.innerHTML = '0';
        minsElement.innerHTML = '0';
        secsElement.innerHTML = '0';
    }
    else{
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
    
}

countdownTimer();
setInterval(countdownTimer, 1000);

