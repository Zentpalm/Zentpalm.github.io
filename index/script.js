const description = document.getElementById("description")
const destext = document.getElementById("destext")
const p = document.createElement("p")
    p.innerHTML = ['"CU","Kmut","Kmit","KU"'] 
description.addEventListener("click",function(){
    destext.appendChild(p)
    description.style.color = "green"
})