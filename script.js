const btn = document.querySelector('#nav_menu_button')
const menu = document.querySelector('#nav_menu')

btn.addEventListener('click', function() {
   btn.classList.toggle('active')
   menu.classList.toggle('active')
})