const countdown = () => {
    const countDate = new Date("June 21, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate-now;

    //fixed times
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap%day) / hour);
    const textMin = Math.floor((gap%hour) / minute);
    const textSec = Math.floor((gap%minute) / second);

    document.querySelector('.day').innerHTML = textDay; 
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.min').innerHTML = textMin;
    document.querySelector('.sec').innerHTML = textSec;

}

setInterval(countdown, 1000);
