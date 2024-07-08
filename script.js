
let animate = gsap.timeline();

animate.from("h2",{
    y:-40,
    opacity:0 ,
    delay:.1,
    duration:.5,
    stagger:.5
})

animate.to("#one",{
    x:1395,
    duration:15,
    opacity:1,
    repeat:-1,
    
})
