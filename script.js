$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 10) {
            $('.navbar ').addClass("sticky");
        } else {
            $('.navbar ').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn ').addClass("show");
        } else {
            $('.scroll-up-btn ').removeClass("show");
        }
    });





    // slide up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    // my skills html css info navigation script
    $(window).scroll(function() {
        let width = screen.width
        if (width > 946) {
            if (this.scrollY > 1840) {
                $('.line ').addClass("ok");
            } else {
                $('.line ').removeClass("ok");
            }
        } else if (width > 880) {
            if (this.scrollY > 2740) {
                $('.line ').addClass("ok");
            } else {
                $('.line ').removeClass("ok");
            }
        } else if (width > 578) {
            if (this.scrollY > 2880) {
                $('.line ').addClass("ok");
            } else {
                $('.line ').removeClass("ok");
            }
        } else if (width > 411) {
            if (this.scrollY > 3160) {
                $('.line ').addClass("ok");
            } else {
                $('.line ').removeClass("ok");
            }
        } else if (width > 390) {
            if (this.scrollY > 3200) {
                $('.line ').addClass("ok");
            } else {
                $('.line ').removeClass("ok");
            }
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing animation effect script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Web Designer", "Freelancer", "Youtuber", "Instructor"],
        typeSpeed: 90,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Web Designer", "Freelancer", "Youtuber", "Instructor"],
        typeSpeed: 90,
        backSpeed: 60,
        loop: true
    })


    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        auttoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }

        }
    })


});


// to get scroll value and screen width in px
// window.onscroll = function(e) {
//     console.log(window.scrollY); // Value of scroll Y in px
// };


//navbar animation
ScrollReveal({
    distance: '500px',
    duration: 900
});
ScrollReveal().reveal('.navbar .max-width .logo', { origin: 'top' });
ScrollReveal({
    distance: '60px',
    duration: 2900
});
ScrollReveal().reveal('.navbar .max-width .menu', { origin: 'top' });
//home section animation
ScrollReveal({
    distance: '60px',
    duration: 500
});
ScrollReveal().reveal('.home .text-1', { origin: 'top' });
ScrollReveal({
    distance: '800px',
    duration: 1400
});
ScrollReveal().reveal('.home .text-2', { origin: 'left' });
ScrollReveal({
    distance: '800px',
    duration: 2200
});
ScrollReveal().reveal('.home .text-3', { origin: 'left' });
ScrollReveal({
    distance: '800px',
    duration: 2200
});
ScrollReveal().reveal('.home img', { origin: 'bottom' });
ScrollReveal({
    distance: '800px',
    duration: 800
});
ScrollReveal().reveal('.home', { origin: 'top' });

// about section animation
ScrollReveal({
    distance: '60px',
    duration: 800
});
ScrollReveal().reveal('.about .max-width .title', { origin: 'bottom' });
ScrollReveal({
    distance: '60px',
    duration: 2000
});
ScrollReveal().reveal('.about .max-width .left', { origin: 'left' });
ScrollReveal({
    distance: '60px',
    duration: 500
});
ScrollReveal().reveal('.about .max-width .right .text', { origin: 'bottom' });
ScrollReveal({
    distance: '60px',
    duration: 1000
});
ScrollReveal().reveal('.about .max-width .right .a', { origin: 'left' });
ScrollReveal({

    distance: '60px',
    duration: 2000
});
ScrollReveal().reveal('.about .max-width .right .b', { origin: 'left' });
ScrollReveal({
    distance: '60px',
    duration: 2800
});
ScrollReveal().reveal('.about .max-width .right .c', { origin: 'left' });
ScrollReveal({

    distance: '60px',
    duration: 3300
});
ScrollReveal().reveal('.about .max-width .right .d', { origin: 'left' });
ScrollReveal({

    distance: '60px',
    duration: 3700
});
ScrollReveal().reveal('.about .max-width .right .e', { origin: 'left' });
ScrollReveal({

    distance: '60px',
    duration: 4000
});
ScrollReveal().reveal('.about .max-width .right a', { origin: 'left' });

// /my service animation
ScrollReveal({
    distance: '60px',
    duration: 600
});
ScrollReveal().reveal('.services .max-width .title', { origin: 'bottom' });
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1600
});
ScrollReveal().reveal('.services .max-width .serv-content .b1', { origin: 'left' });
ScrollReveal({
    reset: true,
    distance: '400px',
    duration: 2000
});
ScrollReveal().reveal('.services .max-width .serv-content .b2', { origin: 'left' });
ScrollReveal({
    reset: true,
    distance: '500px',
    duration: 2500
});
ScrollReveal().reveal('.services .max-width .serv-content .b3', { origin: 'left' });

// my skills animation
ScrollReveal({
    distance: '500px',
    duration: 400,
    reset: false
});
ScrollReveal().reveal('.skills .max-width .title', { origin: 'bottom' });
ScrollReveal({
    distance: '500px',
    duration: 400,
    reset: false
});
ScrollReveal().reveal('.skills .max-width .left', { origin: 'left' });

ScrollReveal({
    distance: '500px',
    duration: 400,
    reset: false
});
ScrollReveal().reveal('.teams .max-width .title', { origin: 'bottom' });
ScrollReveal().reveal('.contact .max-width .title', { origin: 'bottom' });
ScrollReveal({
    distance: '500px',
    duration: 400,
    reset: false
});
ScrollReveal().reveal('.teams', { origin: 'bottom' });
ScrollReveal({
    distance: '500px',
    duration: 400,
    reset: false
});
ScrollReveal().reveal('.contact .max-width .left .text', { origin: 'bottom' });
ScrollReveal().reveal('.contact .max-width .text-2', { origin: 'bottom' });
ScrollReveal({
    distance: '500px',
    duration: 600,
    reset: false
});
ScrollReveal().reveal('.contact .max-width .icons .aa', { origin: 'left' });
ScrollReveal({
    distance: '500px',
    duration: 900,
    reset: false
});
ScrollReveal().reveal('.contact .max-width .icons .bb', { origin: 'left' });
ScrollReveal({
    distance: '500px',
    duration: 1200,
    reset: false
});
ScrollReveal().reveal('.contact .max-width .icons .cc', { origin: 'left' });
ScrollReveal({
    distance: '500px',
    duration: 1200,
    reset: false
});
ScrollReveal().reveal('.contact .max-width .right .text', { origin: 'bottom' });