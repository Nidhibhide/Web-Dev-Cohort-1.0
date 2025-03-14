const togglebtn=document.querySelector(".toggle-btn");
const panel=document.querySelector(".panel")
const closebtn=document.querySelector(".close-btn");
togglebtn.addEventListener("click",()=>{
panel.classList.add("active");
})

closebtn.addEventListener("click",()=>{
    panel.classList.remove("active");
})