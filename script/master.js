const hamburger = document.querySelector(".hamburgerbutton")
const navigationMenu = document.querySelector(".navbarlinks ul")

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navigationMenu.classList.toggle("active");
})

document.querySelectorAll(".navbarlinks ul li a").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active")
    navigationMenu.classList.remove("active")
}))