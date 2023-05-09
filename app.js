const btn = document.querySelector("#color")
const background = document.getElementById("background")
const main = document.querySelector("#main")
const yes = document.getElementById("yes")
let colorArr = [1,2,3,4,5,6,7,8,9,"A","b", "C","D","E","F"]

btn.addEventListener("click", function(){
    hexagonal = "#";
    for(i=0; i<6; i++){
        let RandomArr = Math.floor(Math.random()*colorArr.length)
       hexagonal +=colorArr[RandomArr] 
       main.style.backgroundColor = hexagonal
       background.textContent = hexagonal
       background.style.color = hexagonal
       color.style.color = hexagonal
       color.style.backgroundColor = "black"
    }
    
})