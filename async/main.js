'use strict'

function setAlarm(time, callback) {
    return function () {
        const timeNow = new Date();
        const hours = timeNow.getHours().toString();
        const minutes = timeNow.getMinutes().toString();
        let resultTime = "";
        
      if (minutes.length < 2) {
           resultTime = hours + ":" + 0 + minutes;
        }  else if (minutes.length >= 2) {
           resultTime = hours + ":" + minutes;
        } 

        if (resultTime === time) {
            callback();
        }
    }
}
        

function setDailyRhythm(wakeUpTime, bedTime) {
    const goodNight = () => alert('Спокойной ночи, Вася!');
    const goodMorning = () => alert('Доброе утро, Вася!');
    
    const checkWakeUpTime = setAlarm(wakeUpTime, goodMorning);
    const checkSleepTime = setAlarm(bedTime, goodNight);

    setInterval(checkWakeUpTime, 1000);
    setInterval(checkSleepTime, 1000);
}