
     function setLivingData(data){
        let livingData=[]
        let sectionLivingPs=document.querySelectorAll('#section-living li p:nth-of-type(1)')
        //console.log(data);
        for(let i = 0;i<16;i++){
         let livingItem={}
         livingData.push(livingItem)
        }
        sectionLivingPs[0].innerText=data[2].category
        livingData[0].title=data[2].name
        livingData[0].content=data[2].text
        sectionLivingPs[1].innerText=data[10].category
        livingData[1].title=data[10].name
        livingData[1].content=data[10].text
        sectionLivingPs[2].innerText=data[1].category
        livingData[2].title=data[1].name
        livingData[2].content=data[1].text
        sectionLivingPs[3].innerText=data[12].category
        livingData[3].title=data[12].name
        livingData[3].content=data[12].text
        sectionLivingPs[4].innerText=data[13].category
        livingData[4].title=data[13].name
        livingData[4].content=data[13].text
        sectionLivingPs[5].innerText=data[15].category
        livingData[5].title=data[15].name
        livingData[5].content=data[15].text
        sectionLivingPs[6].innerText=data[11].category
        livingData[6].title=data[11].name
        livingData[6].content=data[11].text
        sectionLivingPs[7].innerText=data[14].category
        livingData[7].title=data[14].name
        livingData[7].content=data[14].text
        sectionLivingPs[8].innerText=data[3].category
        livingData[8].title=data[3].name
        livingData[8].content=data[3].text
        sectionLivingPs[9].innerText=data[7].category
        livingData[9].title=data[7].name
        livingData[9].content=data[7].text
        sectionLivingPs[10].innerText=data[9].category
        livingData[10].title=data[9].name
        livingData[10].content=data[9].text
        sectionLivingPs[11].innerText=data[8].category
        livingData[11].title=data[8].name
        livingData[11].content=data[8].text
        sectionLivingPs[12].innerText=data[6].category
        livingData[12].title=data[6].name
        livingData[12].content=data[6].text
        sectionLivingPs[13].innerText=data[0].category
        livingData[13].title=data[0].name
        livingData[13].content=data[0].text
        sectionLivingPs[14].innerText=data[4].category
        livingData[14].title=data[4].name
        livingData[14].content=data[4].text
        sectionLivingPs[15].innerText=data[5].category
        livingData[15].title=data[5].name
        livingData[15].content=data[5].text

        let livingLis=document.querySelectorAll('#section-living li')
        for (const index in livingLis) {
          livingLis[index].onclick=function(){
            // console.log(livingData);
             
             setToastData(livingData[index].title,livingData[index].content)
          }
        }  
     }
