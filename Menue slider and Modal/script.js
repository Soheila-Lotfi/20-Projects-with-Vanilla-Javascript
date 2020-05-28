
const toggle = document.getElementById('toggle')
const open = document.getElementById('open')
const close = document.getElementById('close')
const modal = document.getElementById('modal')



// toggle nav bar 
function toggleNavBar() {
    document.body.classList.toggle('show-nav');
}


// event listener for toggling th nav bar and modal

toggle.addEventListener('click', toggleNavBar);

open.addEventListener('click', () => modal.classList.add('show-modal'))
close.addEventListener('click', () => modal.classList.remove('show-modal'))

//hiding modal on outside click:

window.addEventListener('click', e => {

    console.log(e.target.id)
    e.target.id === "modal" ? modal.classList.remove('show-modal') : false;
})