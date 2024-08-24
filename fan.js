let fan = document.getElementById("fan")
let on = document.querySelector(".on")
let off = document.querySelector(".off")
let click1 = document.querySelector(".on1")
let click2 = document.querySelector(".on2")
let click3 = document.querySelector(".on3")


on.addEventListener("click" , onBtn)
function onBtn() {
    fan.style.animationDuration = 3 + "s"
}

off.addEventListener("click" , offBtn)
function offBtn() {
    fan.style.animationDuration = 0 + "s"
}

click1.addEventListener("click" , click1Btn)
function click1Btn() {
    fan.style.animationDuration = 1 + "s"
}

click2.addEventListener("click" , click2Btn)
function click2Btn() {
    fan.style.animationDuration = 0.5 + "s"
}

click3.addEventListener("click" , click3Btn)
function click3Btn() {
    fan.style.animationDuration = 0.1 + "s"
}