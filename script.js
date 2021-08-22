window.addEventListener('DOMContentLoaded', () => {

    let secondesTop = document.querySelector('.counter_page_container_launcher_container_element_time_display.top.second');
    let secondesBottom = document.querySelector('.counter_page_container_launcher_container_element_time_display.bottom.second');

    let minutesTop = document.querySelector('.counter_page_container_launcher_container_element_time_display.top.minutes');
    let minutesBottom = document.querySelector('.counter_page_container_launcher_container_element_time_display.bottom.minutes');

    let hoursTop = document.querySelector('.counter_page_container_launcher_container_element_time_display.top.hours');
    let hoursBottom = document.querySelector('.counter_page_container_launcher_container_element_time_display.bottom.hours');

    let daysTop = document.querySelector('.counter_page_container_launcher_container_element_time_display.top.days');
    let daysBottom = document.querySelector('.counter_page_container_launcher_container_element_time_display.bottom.days');

    let secondText = document.querySelectorAll('.counter_page_container_launcher_container_element_time_display.second > .counter_page_container_launcher_container_element_time_display_text');
    let minuteText = document.querySelectorAll('.counter_page_container_launcher_container_element_time_display.minutes > .counter_page_container_launcher_container_element_time_display_text');
    let hourText = document.querySelectorAll('.counter_page_container_launcher_container_element_time_display.hours > .counter_page_container_launcher_container_element_time_display_text');
    let dayText = document.querySelectorAll('.counter_page_container_launcher_container_element_time_display.days > .counter_page_container_launcher_container_element_time_display_text');

    let secondeCounter = 0;
    let minuteCounter = 0;
    let hourCounter = 0;
    let dayCounter = 0;

    function range(end, start) {

        let rangeTab = [];

        for(i=start; i>= end; i--) {

            rangeTab.push(i);
        };

        return rangeTab;
    };

    function timeInitializer(html, tab, counter) {
        html.forEach(text => {
            text.innerHTML = tab[counter];
        });
    };

    const days = range(0, 14);
    const hours = range(0, 23);
    const minutes = range(0, 59);
    const secondes = range(0, 59);

    timeInitializer(secondText, secondes, secondeCounter);
    timeInitializer(minuteText, minutes, minuteCounter);
    timeInitializer(hourText, hours, hourCounter);
    timeInitializer(dayText, days, dayCounter);

    let interval = setInterval(() => {
        
        secondesTop.style.transition = "0.5s";
        secondesTop.style.transform = `rotateX(${360 * secondeCounter}deg)`;

        secondesBottom.style.transition = "0.5s";
        secondesBottom.style.transform = `rotateX(${360 * secondeCounter}deg)`;

        secondText.forEach(text => {

            text.style.opacity = "0";

            setTimeout(() => {
                text.style.opacity = "1";
            }, 200);

        });

        secondeCounter++;
        timeInitializer(secondText, secondes, secondeCounter);

        if (secondes[secondeCounter] == 0) {

            minutesTop.style.transition = "0.5s";
            minutesTop.style.transform = `rotateX(${360 * secondeCounter}deg)`;
    
            minutesBottom.style.transition = "0.5s";
            minutesBottom.style.transform = `rotateX(${360 * secondeCounter}deg)`;

            secondeCounter = 0;
            minuteCounter++ 
            timeInitializer(minuteText, minutes, minuteCounter);

        };

        if (minutes[minuteCounter] == 0) {

            hoursTop.style.transition = "0.5s";
            hoursTop.style.transform = `rotateX(${360 * secondeCounter}deg)`;
    
            hoursBottom.style.transition = "0.5s";
            hoursBottom.style.transform = `rotateX(${360 * secondeCounter}deg)`;

            minuteCounter = 0;
            hourCounter++ 
            timeInitializer(hourText, hours, hourCounter);

        };

        if (hours[hourCounter] == 0) {

            daysTop.style.transition = "0.5s";
            daysTop.style.transform = `rotateX(${360 * secondeCounter}deg)`;
    
            daysBottom.style.transition = "0.5s";
            daysBottom.style.transform = `rotateX(${360 * secondeCounter}deg)`;

            hourCounter = 0;
            dayCounter++ 
            timeInitializer(dayText, days, dayCounter);

        };

        if (days[dayCounter] == 0) {

            clearInterval(interval);

        };

    }, 1000);

    // var date = new Date(null);
    // date.setSeconds(9); // specify value for SECONDS here
    // var result = date.toISOString().substr(11, 8).split(':')[2];

    // console.log(result);

});