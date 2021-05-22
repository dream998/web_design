

// 将请求的数据放入对应的位置
    function setTodayData(data){
        let weatherPic=getWeatherPic(data.wea)
    
        console.log(weatherPic);
        document.getElementById('location').innerText=data.city;
        document.getElementById('tem').innerText=data.tem+'°';
        document.getElementById('wea').innerText=data.wea;
        document.getElementById('wind').innerText=data.win+' '+data.win_speed;
        document.getElementById('air').innerText='空气质量 '+data.air;
        console.log('样式'+document.getElementById('sec-main'));
        document.getElementById('sec-main').style.background=`url("./images/${weatherPic}") no-repeat center center`
        document.getElementById('sec-main').style.backgroundSize=`cover`

    }

    function goLocation(){
        document.getElementById('section-location').style.display='block'
    }

function getWeatherPic(state){
    switch(state){
        case '晴':
            return 'sunny.jpeg'
        case '多云':
            return 'duoyun.jpeg'
        case '小雨':
            return 'xiaoyu.jpeg'
        case '中雨':
            return 'zhongyu.gif'
        case '大雨':
            return 'dayu.gif'
        case '阴':
            return 'yin.jpeg'
        case '阵雨':
            return 'dayu.gif'
        default:
            return 'zhongyu.gif'
    }
}

function setAirData(data){
    let airLevel=document.querySelector('.ct-aqi #til')
    //console.log(airLevel);
    let airValue=document.querySelector('.ct-aqi #value')
    //console.log(airValue);
    let airPs=document.querySelectorAll('#detal td p:nth-of-type(1)')
    let airVal=document.querySelector('#ct-main #val')
    let airLel=document.querySelector('#ct-main #level')
    //console.log(airPs);
    airPs[0].innerText=data.pm25
    airPs[1].innerText=data.pm10
    airPs[2].innerText=data.so2
    airPs[3].innerText=data.no2
    airPs[4].innerText=data.o3
    airPs[5].innerText=data.co
    airLevel.innerText=data.air
    airValue.innerText=data.air_level
    airVal.innerText=data.air_level
    airLel.innerText=data.air
}





let closeIcon=document.getElementById('icon-close')
let ctPopWindow=document.getElementsByClassName('ct-pop-window')[0]
let ctAqi=document.getElementsByClassName('ct-aqi')[0]
ctAqi.onclick=function(){
    ctPopWindow.style.display='block'
}
closeIcon.onclick=function(){
    ctPopWindow.style.display='none'
}

