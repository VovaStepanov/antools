$(function(){
    // loader
    setTimeout(() => {
        let loader_con = document.querySelector(".loader__wrapper");
        let main = document.querySelector(".wrapper");
        main.classList.remove('unloaded');
        loader_con.classList.add('loaded');

    }, 2000);

    // slick slider
    $('.slider').slick({
        dots: true,
        nextArrow: '.next',
        prevArrow: '.prev',
        infinite: false
    });


    // adaptive dropdown
    let drop = document.querySelector(".dropdown-listed");
    drop.addEventListener("click", () => {
        drop.classList.toggle("active");
    })

    // burger-menu
    let burgers = [...document.querySelectorAll(".burger")];
    let adap_menu = document.querySelector(".adaptive-menu");
    burgers.map(elem => {
        elem.addEventListener("click", () => {
            adap_menu.classList.toggle("active");
        })
    })
  
    // scroll reveal
    var sr = ScrollReveal({
        distance: '150%',
        origin: 'bottom',
        opacity: null
    });

    sr.reveal('.top__content');
});
