var chartDom = document.getElementById('weather-chart');
var myChart = echarts.init(chartDom);
var option;
var maxTem=[]
var minTem=[]
var lis=document.querySelectorAll('#sec-days li')


//存储最高温和最低温
function set7daysData(data){
    maxTem=[]
    minTem=[]
    for (const index in data) {
        if (Object.hasOwnProperty.call(data, index)) {
            const element = data[index];
            maxTem.push(Number(element.tempMax))
            minTem.push(Number(element.tempMin))
            let ps=lis[index].querySelectorAll('p')
            var svgs=lis[index].querySelectorAll('svg')
            let iconNight=''
            if(element.textNight=='晴'){
                iconNight='icon-yueliang'
            }else{
                iconNight=getWeatherIcon(element.textNight)
            }
            svgs[0].innerHTML=` <use xlink:href="#${getWeatherIcon(element.textDay)}"></use>`
            svgs[1].innerHTML=` <use xlink:href="#${iconNight}"></use>`
           // console.log(ps);
            ps[0].className='week'
            ps[1].innerText=element.fxDate.slice(5).replace('-','/')
            ps[1].className='data'
            ps[2].innerText=element.textDay
            ps[2].className='days_weather'
            ps[3].innerText=element.textNight
            ps[4].innerHTML=element.windDirDay+'<br>'+element.windScaleDay[0]+'级'
            ps[4].className='days_wind'
            if(index>2){
                ps[0].innerText=getWeek(element.fxDate)
            }
            
        }
    }
    //console.log(maxTem);
    //console.log(minTem);

    
var option = {
    xAxis: {
        type: 'category', 
        splitLine:{show: false} ,
        show:false
       
    },
    yAxis: {
        splitLine:{show: false},
        show:false
    },
    series: [{
        data: maxTem,
        type: 'line',
        smooth: true,
        color:'orange',
        itemStyle : { normal: {label : {show: true,formatter:'{c}°'}}},
    },
{
        data: minTem,
        type: 'line',
        smooth: true,
        color:'skyblue',
        itemStyle : { normal: {label : {show: true,formatter:'{c}°'}}},
    }],
    
};
    //console.log(option);
    option && myChart.setOption(option);
}
//通过日期获取星期
function getWeek(dateString) {
    var dateArray = dateString.split("-");
    date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
    return "周" + "日一二三四五六".charAt(date.getDay());
};

