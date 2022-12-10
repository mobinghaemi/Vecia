const $ = Q => document.querySelector(Q);

const body = $('body')
const toggleTheme = $('#toggle-theme');

const sendMessageBtn = $('#sendMessage');
const killModalBtn = $('#killModal')
const overlay = $('.overlay');
const modal = $('.modal');


// Funcs 

// Load Saved Theme 
onload = () => {
    const theme = localStorage.getItem('theme');
    theme === "dark" ? body.classList.add('dark') : body.classList.remove('dark');
}
// Func : Kill Every Open Window | Feature Like Mobile Menu | Modal ...
const killEverything = e => {
    console.log(e);
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
        localStorage.setItem('theme' , 'dark')
    } else {
        body.classList.remove('dark')
        localStorage.setItem('theme' , 'light')
    }
})
// Open SendMessage Modal & Enable Overlay!
sendMessageBtn.addEventListener('click' , openModal)
// After Click on Overlay : Modal , Menu , ... Closed
overlay.addEventListener('click' , killEverything);
// IF Press Escape Key : Close All
document.addEventListener('keydown',e => e.key === 'Escape' && killEverything);
// After Click on the close modal btn
killModalBtn.addEventListener('click' , killEverything)