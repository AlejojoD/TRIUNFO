(function nav () {
    let mobileNav = document.querySelector('#mobileNav');
    let hamburger = document.querySelector('#menu-icon');
    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
    
})()

let navActiva= document.getElementById('mobileNav');