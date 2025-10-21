$(document).ready(() => {
    const lenis = new Lenis({
        duration: 3,
        smoothWheel: true,
        smoothTouch: true,
        direction: "vertical",
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);

    $(".button").click(function () {
        $(this).toggleClass("-menu-open");
        if ($(this).hasClass("-menu-open")) {
            gsap.to(".mob-inner", {
                yPercent: 0,
                duration: 0.8,
                ease: "expo.inOut",
            });

            gsap.to(".mob-inner .nav-link", {
                opacity: 1,
                delay: 0.5,
                stagger: 0.05,
                ease: "expo.inOut",
            });
        } else {
            gsap.to(".mob-inner .nav-link", {
                opacity: 0,
                duration: 0.2,
            });

            gsap.to(".mob-inner", {
                yPercent: -100,
                duration: 0.8,
                ease: "expo.inOut",
            });
        }
    });
})



