const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener('click', function(){
    navUl.classList.toggle('show');
})