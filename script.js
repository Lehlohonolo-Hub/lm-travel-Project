/*
const { Select, duration } = require("@mui/material");
*/

const bars =  document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");

    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })

    
})

close.addEventListener("click", () => {
    menu.classList.remove("active")
})


/*
Gsap 1 14 function below
*/


function animateContent(selector) {
    selector.forEach((selector) => {
        gsap.to(selector, {
            y: 30,
            duration: 0.1,
            opacity: 1,
            delay: 0.2,
            stagger: 0.2,
            ease: "power2.out"
        });
    });
}

function scrollTriggerAnimation(triggerSelector, boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 80%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) => {
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        })
    })
}

function swipeAnimation(triggerSelector, boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger:{
            trigger: triggerSelector,
            start: "top 50%",
            end: "top 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) =>{
        timeline.to(boxSelector, {
            x: 0,
            duration: 1,
            opacity: 1,
        });
    });
}

function galleryAnimation(triggerSelector, boxSelectors){
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: triggerSelector,
            start: "100%",
            end: "bottom 100%",
            scrub: 1,
        },
    });

    boxSelectors.forEach((boxSelector) =>{
        timeline.to(boxSelector, {
            y: 0,
            duration: 1,
            opacity: 1,
        });
    });
}

animateContent([".home .content h5, .home .content h1 .home .content p, .home .content .search"]);

scrollTriggerAnimation(".travel",[".travel .box1, .travel .box2, .travel .box3"])

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"])

galleryAnimation(".destinations .gallery", [".destinations .gallery .box1", ".destinations .gallery .box2", ".destinations .gallery .box3", ".destinations .gallery .box4", ".destinations .gallery .box5"])


galleryAnimation(".featured .gallery", [".featured .gallery .box1", ".featured .gallery .box2", ".featured .gallery .box3", ".featured .gallery .box4"])

