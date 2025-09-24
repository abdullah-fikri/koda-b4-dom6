const button = document.getElementById("btn")
const output = document.getElementById("outputMenu")

button.addEventListener("click",()=>{
    if (output.style.display === "none"){
        output.style.display = "flex"
        output.style.flexDirection = "column"
    }else{
        output.style.display ="none"
    }
})