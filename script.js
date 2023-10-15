let barIcon = document.querySelector(".bar-icon")
let closeIcon = document.querySelector(".close-icon")
let menu = document.querySelector(".menu")


barIcon.addEventListener('click',function(){
    menu.classList.add('is-active'),
    barIcon.classList.add('is-active'),
    closeIcon.classList.add('is-active')
});

closeIcon.addEventListener('click',function(){
    menu.classList.remove('is-active'),
    barIcon.classList.remove('is-active'),
    closeIcon.classList.remove('is-active')
});