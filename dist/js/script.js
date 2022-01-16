(function($) {
    $('input[name=phone]').mask("8(999) 999-9999");
})(jQuery);


//Set two hours timer
const twoHours = 2 * 1000 * 60 * 60;
const deadLine = Date.parse(new Date()) + twoHours;

function getDifferenceInTime(endtime) {
    const t = endtime - Date.parse(new Date()),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) {
    if (num >=0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(endtime) {
    const   timer = document.querySelector('.timer'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getDifferenceInTime (endtime);

        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
        }
    }
}

setClock(deadLine);



