document.addEventListener("DOMContentLoaded",()=>{

    let imgArr= [
        {
            img:"./image/pezza.jpg",
            name:"pezza"
        },
        {
            img:"./image/pezza.jpg",
            name:"pezza"
        },
        {
            img:"./image/burger.jpg",
            name:"burger"
        },
        {
            img:"./image/burger.jpg",
            name:"burger"
        },
        {
            img:"./image/dog.jpg",
            name:"dog"
        },
        {
            img:"./image/dog.jpg",
            name:"dog"
        },
        {
            img:"./image/green.jpg",
            name:"green"
        },
        {
            img:"./image/green.jpg",
            name:"green"
        },
        {
            img:"./image/hart.jpg",
            name:"hart"
        },
        {
            img:"./image/hart.jpg",
            name:"hart"
        },
        {
            img:"./image/lamp.jpg",
            name:"lamp"
        },
        {
            img:"./image/lamp.jpg",
            name:"lamp"
        }
    ]
    if (!localStorage.getItem("random")){
        localStorage.setItem("random","false")

    }else{
        if(localStorage.getItem("random") === "true"){

        

    imgArr = [
        {
            img:"https://picsum.photos/105/105",
            name:"one"
        },
        {
            img:"https://picsum.photos/105/105",
            name:"one"
        },
        {
            img:"https://picsum.photos/104/104",
            name:"two"
        },
        {
            img:"https://picsum.photos/104/104",
            name:"two"
        },
        {
            img:"https://picsum.photos/103/103",
            name:"three"
        },
        {
            img:"https://picsum.photos/103/103",
            name:"three"
        },
        {
            img:"https://picsum.photos/102/102",
            name:"four"
        },
        {
            img:"https://picsum.photos/102/102",
            name:"four"
        },
        {
            img:"https://picsum.photos/101/101",
            name:"five"
        },
        {
            img:"https://picsum.photos/101/101",
            name:"five"
        },
        {
            img:"https://picsum.photos/100/100",
            name:"sex"
        },
        {
            img:"https://picsum.photos/100/100",
            name:"sex"
        }
    ]
}
    }
    if(!localStorage.getItem("level")){
        localStorage.setItem("level","1")
    }
    let newImgArr = []
    console.log(localStorage.getItem("random"))
    for (let i = 0; i < imgArr.length; i++){
        let newItem = imgArr[Math.floor(Math.random() * imgArr.length)]
        while(newImgArr.length < imgArr.length){

        if(newImgArr.includes(newItem)){
            newItem = imgArr[Math.floor(Math.random() * imgArr.length)]
        }else{
        newImgArr.push(newItem)
        }}
    }
    
    imgArr = newImgArr;
let warpper = document.querySelector(".warpper")
let winner = document.querySelector(".winner")
let levelEl = document.querySelector("#level")
let choseImg = []
let choseId = []
let level = parseInt(localStorage.getItem("level"))
let wonCards = []
levelEl.textContent = `level:${level}`
function check (){
    let imgs = document.querySelectorAll("img")

    let one = choseImg[0]
    let two = choseImg[1]
    if(one === two){
        imgs[choseId[0]].setAttribute("src","./image/block.jpg")
        imgs[choseId[1]].setAttribute("src","./image/block.jpg")
        
        imgs[choseId[0]].removeEventListener("click",handleClick)
        imgs[choseId[1]].removeEventListener("click",handleClick)
        
        wonCards.push(one)
        
    }else{
        imgs[choseId[0]].setAttribute("src","./image/main.jpg")
        imgs[choseId[1]].setAttribute("src","./image/main.jpg")
        imgs[choseId[0]].addEventListener("click",handleClick)
        imgs[choseId[1]].addEventListener("click",handleClick)
    }
    document.getElementById("result").textContent = wonCards.length
    choseId = []
    choseImg = []
    if(wonCards.length === imgArr.length/2){
        level ++
        clearInterval(int)
        localStorage.setItem("level",level)
        setTimeout(youWin,400)
        winner.style.visibility= "visible"
    }
    function youWin(){
        for(let i = 0 ; i < imgs.length ; i++){
            imgs[i].setAttribute("src",imgArr[i].img)
        }

        }
    }

function handleClick(){
    let cardId = this.getAttribute("id")
    this.setAttribute("src",imgArr[cardId].img)
    // console.log(cardId)
    this.removeEventListener("click",handleClick)
    choseImg.push(imgArr[cardId].name)
    choseId.push(cardId)
    if(choseImg.length === 2){
        setTimeout(check,510)
    }else if (choseImg.length > 2){
        this.setAttribute("src","./image/main.jpg")
        this.addEventListener("click",handleClick)
    }
}
function creatCards(){
    for (let i = 0; i < imgArr.length; i ++){
        let card = document.createElement("img")
        card.setAttribute("src","./image/main.jpg")
        card.setAttribute("id",i)
        card.addEventListener("click", handleClick)
        warpper.append(card)
    }
}
creatCards()



let next = document.getElementById("next")
next.addEventListener("click", ()=>{
    location.reload()
})
let rotate = 0
let settings = document.getElementById("settings_img")
let settingsWarpper = document.querySelector(".settings_warpper")
let close = document.getElementById("close")
let radio = document.getElementsByName("game_img")

close.addEventListener("click",()=>{
    settingsWarpper.style.visibility = "hidden"
})
function showSetting (){
        settingsWarpper.style.visibility = "visible"
}
settings.addEventListener("click" , ()=>{
    rotate = rotate + 70
        settings.style.transform = `rotate(${rotate}deg)`
    setTimeout(showSetting ,500 )
})
document.getElementById("done").addEventListener("click",()=>{
    console.log()
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked){
            if(radio[i].value === "random"){
                localStorage.setItem("random","true")
            }else{
                localStorage.setItem("random","false")
            }
        }
        
    }
    location.reload()
})
let time = 35
function timer(){
    time --
    document.querySelector(".timer").textContent = time
    if (time === 0) {
        // next.textContent = "play again"
        // winner.style.visibility= "visible"
        location.reload()
        clearInterval(int)
    }
}
let int ;
int = setInterval(timer,1000)






})






