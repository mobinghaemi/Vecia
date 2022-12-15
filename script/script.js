import { $ , overlay , killEverything } from "./utils.js";

const body = $('body')
const toggleTheme = $('#toggle-theme');
const mobileEditTheme = $('#mobileEditTheme');

const sendMessageBtn = $('#sendMessage');
const killModalBtn = $('#killModal')
const modal = $('.modal');

const backBtn = document.querySelectorAll('#backBtn');

const openMobileMenuBtn = $('#openMobileMenu');
const mobileMenu = $('.horizontal-menu');
const closeMenuMobileBtn = $('#closeMenuMobile')
const mobileOverlay = $('.mobile-overlay')

// Funcs 

// Load Saved Theme 
onload = () => {
    const {color , mode} = JSON.parse(localStorage.getItem('theme'))
    color === "dark" ? body.classList.add('dark') : body.classList.remove('dark');
    toggleTheme && mode && (toggleTheme.checked = true)
}
// Open Modal & Enable Overlay
const openModal = _ => {
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
}
// Edit Theme
const switchTheme = e => {
    if (e.target.checked) {
        body.classList.add('dark')
        localStorage.setItem('theme' , JSON.stringify({color : 'dark' , mode : true}))
    } else {
        body.classList.remove('dark')
        localStorage.setItem('theme' , JSON.stringify({color : 'light' , mode : false}))
    }
}
// Close M Menu & M Overlay
const closeMobileMenu = () => {
    mobileMenu.style.width = '0%'
    mobileOverlay.classList.add('hidden')
}

// Listeners

// Edit Theme With Toggle Btn
toggleTheme && toggleTheme.addEventListener('change' , switchTheme)
mobileEditTheme && mobileEditTheme.addEventListener('change' , switchTheme)
// Open SendMessage Modal & Enable Overlay!
sendMessageBtn && sendMessageBtn.addEventListener('click' , openModal)
// After Click on Overlay : Modal , Menu , ... Closed
overlay && overlay.addEventListener('click' , killEverything);
// IF Press Escape Key : Close All
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') killEverything()
});
// After Click on the close modal btn
killModalBtn && killModalBtn.addEventListener('click' , killEverything)

backBtn.forEach(index => index.addEventListener('click' , _ => history.back()))

openMobileMenuBtn && openMobileMenuBtn.addEventListener('click' , () => {
    mobileOverlay.classList.remove('hidden')
    mobileMenu.style.width = '60%'
})
closeMenuMobileBtn && closeMenuMobileBtn.addEventListener('click' , closeMobileMenu)
mobileOverlay && mobileOverlay.addEventListener('click' , closeMobileMenu)