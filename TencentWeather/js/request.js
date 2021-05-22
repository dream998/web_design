//请求当天数据
function requestTodayData(cityId){
	axios.get(`https://www.tianqiapi.com/free/day?appid=35198637&appsecret=xpVn1McC&cityid=${cityId}`)
    .then((res)=>{
       // console.log(res.data)
	   setTodayData(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
//请求7天数据
function request7daysData(cityId){
	axios.get(`https://devapi.qweather.com/v7/weather/7d?location=${cityId}&key=99699472750b4777abca6fbbb6d082e7`)
	.then(res=>{
	  // console.log(res.data.daily);
	  set7daysData(res.data.daily)
	})
	.catch(err=>{
		console.log(err);
	})
}
//请求3天数据
function request3daysData(cityId){
	axios.get(`https://devapi.qweather.com/v7/weather/3d?location=${cityId}&key=99699472750b4777abca6fbbb6d082e7`)
    .then(res=>{
       // console.log(res.data.daily)
        set2daysData(res.data.daily)
    })
    .catch(err=>{
        console.log(err)
    })
}
//请求生活指数数据
function requestLivingData(cityId){
	axios.get(`https://devapi.qweather.com/v7/indices/1d?type=0&location=${cityId}&key=99699472750b4777abca6fbbb6d082e7`)
	.then(res=>{
		//console.log(res.data.daily)
		setLivingData(res.data.daily)
	})
	.catch(err=>{
		console.log(err);
	})
}
//获取每小时数据
function requesthoursData(cityId){
	axios.get(`https://devapi.qweather.com/v7/weather/24h?location=${cityId}&key=99699472750b4777abca6fbbb6d082e7`)
	.then((res)=>{
		//console.log(res)
		setHoursData(res.data)
	})
	.catch((err)=>{
	   console.log(err);
	})
}

function requestLocation(city){
	axios.get(`https://geoapi.qweather.com/v2/city/lookup?location=${city}&key=99699472750b4777abca6fbbb6d082e7`)
		 .then(res=>{
			 //console.log(res);
			 currentLocationId=res.data.location[0].id
			 //console.log(currentLocationId);
			 request(currentLocationId)
		 })
		 .catch(err=>{
			 console.log(err);
		 })
}

function request(cityId){
	//console.log(cityId);
	requestTodayData(cityId)
	request7daysData(cityId)
	request3daysData(cityId)
	requestLivingData(cityId)
	requesthoursData(cityId)
	requestAir()

}

function requestCities(city){
	axios.get(`https://geoapi.qweather.com/v2/city/lookup?location=${city}&key=99699472750b4777abca6fbbb6d082e7`)
		 .then(res=>{
			 console.log(res);
			 setCitiesList(res.data)
		 })
		 .catch(err=>{
			 console.log(err);
		 })
}

//获取空气质量数据
function requestAir(){
	axios.get('api.airquantity.com')
		 .then(res=>{
			 console.log(res.data);
			 setAirData(res.data.data)
		 })
		 .catch(err=>{
			 console.log(err);
		 })
}