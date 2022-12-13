import { $ } from "./utils.js";

const body = $('body')
const toggleTheme = $('#toggle-theme');

const sendMessageBtn = $('#sendMessage');
const killModalBtn = $('#killModal')
const overlay = $('.overlay');
const modal = $('.modal');

const backBtn = document.querySelectorAll('#backBtn');

const openMobileMenuBtn = $('#openMobileMenu');
const horizontal = $('.horizontal-menu');

// Funcs 

// Load Saved Theme 
onload = () => {
    const {color , mode} = JSON.parse(localStorage.getItem('theme'))
    color === "dark" ? body.classList.add('dark') : body.classList.remove('dark');
    toggleTheme && mode && (toggleTheme.checked = true)
}
// Func : Kill Every Open Window | Feature Like Mobile Menu | Modal ...
const killEverything = _ => {
    overlay.classList.add('hidden')
    modal.classList.add('hidden')
}
// Open Modal & Enable Overlay
const openModal = _ => {
    overlay.classList.remove('hidden')
    modal.classList.remove('hidden')
}

// Listeners

// Edit Theme With Toggle Btn
toggleTheme && toggleTheme.addEventListener('change' , e => {
    if (e.target.checked) {
        body.classList.add('dark')
        localStorage.setItem('theme' , JSON.stringify({color : 'dark' , mode : true}))
    } else {
        body.classList.remove('dark')
        localStorage.setItem('theme' , JSON.stringify({color : 'light' , mode : false}))
    }
})
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

openMobileMenuBtn.addEventListener('click' , () => {
    horizontal.style.display = 'block'
})