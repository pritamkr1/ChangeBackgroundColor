const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ["red", "green", "pink", "blue", "yellow"]

body.style.backgroundColor = 'grey'

button.addEventListener('click', changebgColor)

function changebgColor(){
    const colorChange = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorChange]
}