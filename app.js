document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

gsap.from("#img1", {
    y: 60,
    duration: 1,
    opacity: 0,
    delay: 0.4,
})

gsap.from("#img2", {
    x: 100,
    duration: 1,
    opacity: 0,
    delay: 0.4,
})

gsap.from("#img3", {
    y: -60,
    duration: 1,
    opacity: 0,
    delay: 0.4,
})

gsap.from("#main h1", {
    duration: 2,
    opacity: 0,
    delay: 0.4,
    ease: Power2.easeOut
})

gsap.from(["#main2 .hero1 .htop", "#main2 .hero1 h2", "#main2 .hero1 .btndiv"], {
    scrollTrigger: {
        trigger: "#main2 .hero1",
        scroller: "body",
        start: "top 80%",
    },
    stagger: 0.3,
    opacity: 0,
    y: 50
})

gsap.from(".hero2 .left img", {
    scrollTrigger: {
        trigger: ".hero2 .left img",
        scroller: "body",
        start: "top 80%",
        end: "bottom 70%",
    },
    y: 60,
    opacity: 0,
    duration: 2,
    stagger: 0.3
})

gsap.from(".hero3", {
    scrollTrigger: {
        trigger: ".hero3",
        scroller: "body",
        start: "top 80%",
        end: "bottom 70%",
    },
    y: 60,
    opacity: 0,
    duration: 2,
})
gsap.from(".hero4 .box", {
    scrollTrigger: {
        trigger: ".hero4 .box",
        scroller: "body",
        start: "top 80%",
        end: "bottom 70%",
    },
    y: 60,
    opacity: 0,
    duration: 0.5,
})
gsap.from(".hero4 .hero4Bottom", {
    scrollTrigger: {
        trigger: ".hero4 .hero4Bottom",
        scroller: "body",
        start: "top 80%",
        end: "bottom 70%",
    },
    y: 60,
    opacity: 0,
    duration: 0.5,
})

gsap.from(".footer .footer_inn .box", {
    scrollTrigger: {
        trigger: ".footer .footer_inn .box",
        scroller: "body",
        start: "top 80%",
        end: "bottom 70%",
    },
    y: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

