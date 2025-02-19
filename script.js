document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const menuList = document.querySelector(".menu-list");
    
    menuBtn.addEventListener("click", function() {
        menuList.classList.toggle("show");
    });
});

document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".menu-list").style.right = 0;
})

document.querySelector(".close").addEventListener("click", ()=>{
    document.querySelector(".menu-list").style.right = "-120%";
})