const increase = document.querySelector(".increase").classList
let value = document.querySelector("#count")
let reset = document.querySelector(".reset")
const counter = () =>{
    if(increase.contains("increase")){
        value.innerHTML++
    }
}
document.querySelector(".increase").addEventListener("click" , counter)
const restBtn = (ev) =>{
    if(reset.contains("reset")){
        ev.stopPropagation()
        value.innerHTML = 0
    }
}
document.querySelector(".reset").addEventListener("click" , restBtn)