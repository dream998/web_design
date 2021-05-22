let bgColor=document.getElementsByClassName('bg-color')[0]
let ctWindow=document.getElementsByClassName('ct-window')[0]
let toastTitle = document.querySelector('#section-toast .ct-window h3')
let toastContent = document.querySelector('#section-toast .ct-window p')
let toastButton = document.querySelector('#section-toast .ct-window button')
bgColor.onclick=function(){
    bgColor.style.display='none'
    ctWindow.style.opacity=0
}
toastButton.onclick=()=>{
    bgColor.style.display='none'
    ctWindow.style.opacity=0
}
function setToastData(title,content){
    toastTitle.innerText = title
    toastContent.innerText = content
    bgColor.style.display='block'
    ctWindow.style.opacity=1
}
