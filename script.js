

const button = document.querySelector("button")
const body = document.querySelector("body").style.background = "#a5a58d"
const color = ["red", "green", "pink", "darkblue", "blue"]



button.addEventListener('click', changeBackgroundColor)

function changeBackgroundColor(){
    const changeColor = parseInt(Math.random()*color.length)
    body.style.changeBackgroundColor = color[changeColor]
}