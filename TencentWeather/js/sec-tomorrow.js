

    function set2daysData(data){
        let todayIcon=getWeatherIcon(data[0].textDay)
        let tomorrowIcon=getWeatherIcon(data[1].textDay)
        document.getElementById("today_wea").innerText=data[0].textDay
        document.getElementById("tomorrow_wea").innerText=data[1].textDay
        document.getElementById("today_tem").innerText=data[0].tempMin+"/"+data[0].tempMax+"°"
        document.getElementById("tomorrow_tem").innerText=data[1].tempMin+"/"+data[1].tempMax+"°"
        document.querySelector('#sec-tomorrow .today .right svg').innerHTML=` <use xlink:href="#${todayIcon}"></use>`
        document.querySelector('#sec-tomorrow .tomorrow .right svg').innerHTML=` <use xlink:href="#${tomorrowIcon}"></use>`

    }
