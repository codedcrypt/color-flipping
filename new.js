const background = document.getElementById("Background")
const btn = document.querySelector("#color")
const main = document.getElementById("main")
const yes = document.getElementById("yes")

let colorArr = ["gold","green","pink","blue","gray","white","cyan","purple"]

btn.addEventListener("click" , function(){
    let RandomArr = Math.floor(Math.random()*colorArr.length)
    main.style.backgroundColor = colorArr[RandomArr]
    background.textContent = colorArr[RandomArr]
    yes.style.backgroundColor = colorArr[RandomArr]
})

// function getRandomColor(){
//     return Math.floor(Math.random*colorArr.length)
// }