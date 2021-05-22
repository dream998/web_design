let citys=document.querySelectorAll('#section-location .ct-hot-city li')
//console.log(citys);
let locationInput=document.getElementById('i-location')
let hotCitys= document.querySelector('#section-location .ct-hot-city')
let cityList=document.getElementsByClassName('city-list')[0]
let cityHistory=[]
let ctHistory=document.querySelector('#section-location .ct-history')
let cityHistoryUl=document.getElementById('cityHistory')
let cityHistoryLis=document.querySelectorAll('#cityHistory li')
let historyTitle=document.getElementById('history-title')
let cityName=''

for(let i=0;i<citys.length;i++){
    citys[i].onclick=function(){
        console.log(citys[i].innerHTML);
        requestLocation(citys[i].innerHTML)
        document.getElementById('section-location').style.display='none'
    }
}

function goMain(){
    hotCitys.style.display='block'
    cityList.style.display='none'
    document.getElementById('section-location').style.display='none'
}

locationInput.onfocus=function(){
    hotCitys.style.display='none'
    cityList.style.display='block'
}
// locationInput.onblur=function(){
//    cityList.innerHTML=''
//     hotCitys.style.display='block'
//     cityList.style.display='none'
   
// }
let showCities= debounce(requestCities,500)
locationInput.oninput=function(){
    //console.log('haha');
    //console.log(this.value);
    //requestCities(this.value)
    //debounce(requestCities,200)
   showCities(this.value)
}
//防抖
function debounce(func,delay){
    let timer = null;
    return function(...args) {
        if (timer)
            clearTimeout(timer)
        timer = setTimeout(() => {

            func.apply(this, args)

        }, delay)
    }
}

function setCitiesList(data){
    cityList.innerHTML=''
    if(data.code==200){
        for(let i = 0;i<data.location.length;i++){
            let li=document.createElement('li')
            li.innerText=data.location[i].adm1+', '+data.location[i].adm2+', '+data.location[i].name
            cityList.appendChild(li)
        }
    }
}
cityList.onclick=function(event){
    console.log(event.target.innerText);
    console.log('点击了');
    let city = event.target.innerText.split(',')
    cityName =city[city.length-1].trim()
    console.log(cityName);
    requestLocation(cityName)
    locationInput.value=''
    cityList.innerHTML=''
    updataCityHistory()
    goMain()

   
   
    console.log(cityHistory);

}

function updataCityHistory(){
  
        let isHave=false
        for(let i=0;i<cityHistory.length;i++){
            if(cityHistory[i]==cityName){
                isHave=true
                break
            }
        }
        if(!isHave){
            if(cityHistory.length>=3){
                cityHistory.pop()               
            }
            cityHistory.unshift(cityName)
        }
       
    
    //this.value=''
    
    if(cityHistory.length > 0){
        // historyTitle.style.display='block'
        // cityHistoryUl.style.display='block'
        ctHistory.style.display='block'
    }else{
        // historyTitle.style.display='none'
        // cityHistoryUl.style.display='none'
        ctHistory.style.display='none'
    }

    for (let i=0;i< cityHistoryLis.length;i++) {
        cityHistoryLis[i].style.display='none'
    }
    for (let i=0;i<cityHistory.length;i++) {
        cityHistoryLis[i].innerText=cityHistory[i]
        cityHistoryLis[i].style.display='block'
    }
}

let cleanBtn=document.getElementById('btn-clean')
cleanBtn.onclick=function(){
    // historyTitle.style.display='none'
    // cityHistoryUl.style.display='none'
    ctHistory.style.display='none'
    cityHistory=[]
}