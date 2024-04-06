let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".news_content",
        repeatRefresh: true,
        start: "top bottom",
        end: "bottom top",
        scrub: true 
        
    }
});
tl.from(".news_content", {
    x: 200,
    duration: 1,
});

let tlScopeBox = gsap.timeline({
    scrollTrigger: {
        trigger: ".scope_box", 
        start: "top bottom", 
        end: "bottom top", 
        scrub: true 
    }
});

tlScopeBox.from(".scope_box", {
    opacity: 0, 
    duration: 1, 
    stagger: 0.2, 
    ease: "power2.out", 
    x: gsap.utils.random([-100, 100], true), 
    y: gsap.utils.random([-100, 100], true) 
});
let tlAboutStudents = gsap.timeline({
    scrollTrigger: {
        trigger: ".about_students-left",
        start: "top bottom",
        end: "bottom top",
        scrub: true 
    }
});

tlAboutStudents.from(".about_students-left", {
    x: -100, 
    duration: 1
});
let tlAboutStudentsr = gsap.timeline({
    scrollTrigger: {
        trigger: ".about_students-right",
        start: "top bottom",
        end: "bottom top",
        scrub: true 
    }
});

tlAboutStudentsr.from(".about_students-right", {
    x: 100, 
    duration: 1
});