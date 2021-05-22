
function setHoursData(source){
  let ul = document.querySelector("#sec-hours ul")
  ul.innerHTML=''

  for (const index in source.hourly) {
      if (Object.hasOwnProperty.call(source.hourly, index)) {
          const element = source.hourly[index];
         // console.log(element);
         let icon = getWeatherIcon(element.text)
          let li = document.createElement("li")
          let time = document.createElement("p")
          time.className='time'
          if(element.fxTime.slice(11,13)<5||element.fxTime.slice(11,13)>19)
          icon='icon-yueliang'
        //   console.log(element.fxTime.slice(11,13));
         
          let wea = document.createElement('div')
          wea.innerHTML=`<svg class="icon" aria-hidden="true" >
          <use xlink:href="#${icon}"></use>
      </svg>`
          let tem = document.createElement("p")
          tem.className='temperature'
          time.innerText = element.fxTime.slice(11,16)
          //console.log(time.innerText);
          tem.innerText = element.temp+'°'
          li.appendChild(time)
          li.appendChild(wea)
          li.appendChild(tem)
          ul.appendChild(li)
          
      }
    }
}