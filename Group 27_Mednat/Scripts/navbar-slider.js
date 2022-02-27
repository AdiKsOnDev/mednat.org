window.onload = function() {

    const MENU_BTN = document.querySelector('.hamburger');
    const MOBILE_MENU = document.querySelector('.mobile-navbar');
    const LOGO = document.querySelector('.Logo');

    MENU_BTN.addEventListener('click', function() {

        MENU_BTN.classList.toggle('is-active');
        MOBILE_MENU.classList.toggle('is-active');
        LOGO.classList.toggle('is-active');

    });

}