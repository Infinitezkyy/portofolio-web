// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll' () => {
    header.classList.toogle('shadow', window.scrollY > 0);
});


menuToogle.addEventListener('click', function ()) {
    navbar.classList.btn('slide');
}


menu.onclick = () => {
    navbar.classList.toggle('active')
}

// Dark Mode //
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}