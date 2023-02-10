const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click',  function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

$(document).ready(function(){
    $('.navbar__container').click(function(event){
        event.stopPropagation();
        $(".navbar__toggle").slideToggle("fast");
    });
    $(".navbar_toggle").on(".navbar__container", function (event) {
        event.stopPropagation();
    });
});

$(document).on("click", function() {
    $(".showup").hide();
});