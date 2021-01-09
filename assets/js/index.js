/*function toggleMenu(){
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-menu");
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
    header.classList.toggle("active");
}*/

//Memu Toggle
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");
const nav = document.querySelector(".nav-menu");
const menuToggle = document.querySelector(".menu-toggle");
nav.addEventListener("click", function(){
    nav.classList.toggle("active");
    menuToggle.classList.remove("active");
});

menuToggle.addEventListener("click", function(){
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});


//Scroll Effect
window.addEventListener("scroll", function(){
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
});


//Navigation Active
const headerContent = document.getElementById("header-content");
const navActive = headerContent.getElementsByClassName("nav-item");

for(var i = 0; i < navActive.length; i++){

    navActive[i].addEventListener("click", function(){

       const currentActive = document.getElementsByClassName("nav-active");
       
       currentActive[0].className = currentActive[0].className.replace(" nav-active");

       this.className += " nav-active";
    });
}
