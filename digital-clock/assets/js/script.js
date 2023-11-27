

function defaultRegion() {
    document.querySelector('#warsaw').classList.add('clicked');
}

let warsawTimeout, londonTimeout, moscowTimeout;

function warsawTimer() {
    let date = new Date();
    let hour = date.getHours();
            if (hour<10) hour = "0" + hour;
            let minute = date.getMinutes();
            if (minute<10) minute = "0" + minute;
            let second = date.getSeconds();
            if (second<10) second = "0" + second;
            
            let day = date.getDate();
            if (day<10) day = "0" + day;
            let month = 1 + date.getMonth();
            if (month<10) month = "0" + month;
            let year = date.getFullYear();

            let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

            let weekday = date.getDay();
            for (i=0; i<week.length; i++)
            {
                if (weekday == i)
                {
                    weekday = week[i - 1];
                }
            }

            document.querySelector('#warsaw').classList.add('clicked');
            document.querySelector('#moscow').classList.remove('clicked');
            document.querySelector('#london').classList.remove('clicked');

            document.querySelector('#current-region').innerHTML = "WARSAW";

            document.querySelector('#clock').innerHTML = month+'/'+day+'/'+year+', '+hour+':'+minute+':'+second+'';
            document.querySelector('#weekday').innerHTML = weekday;

            warsawTimeout = setTimeout(warsawTimer, 1000);
    clearTimeout(londonTimeout);
    clearTimeout(moscowTimeout);
            
            
}


function londonTimer() {
    let date = new Date();
            document.querySelector('#warsaw').classList.remove('clicked');
            document.querySelector('#moscow').classList.remove('clicked');
            document.querySelector('#london').classList.add('clicked');

            document.querySelector('#current-region').innerHTML = "LONDON";

            const options1 = {
            timeZone: 'Europe/London', 
            hour12: false, 
            };
          
            const timeInLondon = date.toLocaleString('en-US', options1);
            document.querySelector('#clock').innerHTML = timeInLondon;

            londonTimeout = setTimeout(londonTimer, 1000);
    clearTimeout(warsawTimeout);
    clearTimeout(moscowTimeout);
}

function moscowTimer() {
    let date = new Date();
            document.querySelector('#warsaw').classList.remove('clicked');
            document.querySelector('#moscow').classList.add('clicked');
            document.querySelector('#london').classList.remove('clicked');

            document.querySelector('#current-region').innerHTML = "MOSCOW";

            const options2 = {
            timeZone: 'Europe/Moscow', 
            hour12: false, 
            };
          
            const timeInMoscow = date.toLocaleString('en-US', options2);
            document.querySelector('#clock').innerHTML = timeInMoscow;

            moscowTimeout = setTimeout(moscowTimer, 1000);
    clearTimeout(warsawTimeout);
    clearTimeout(londonTimeout);
}




window.onload(warsawTimer(), defaultRegion());