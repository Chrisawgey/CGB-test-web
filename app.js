const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
let navbar__toggle = document.querySelector(".navbar__toggle");
let navbar__menu = document.querySelector(".navbar__menu");

menu.addEventListener('click',  function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

<<<<<<< HEAD
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
=======
document.onclick= function(e){
    if(!navbar__toggle.contains(e.target) && !navbar__menu.contains(e.target) ) {
    navbar__toggle.classList.remove("is-active");
    navbar__menu.classList.remove("active");
    m
     }
}
>>>>>>> 5bb019152b67ca489c948e3630bc6f9abda08847
