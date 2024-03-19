// gsap.to("#box",{
//     x:900,
//     y:300,
//     duration:2,
//     delay:1,
//     backgroundColor: "blue",
//     rotate:360,
//     scale:0.5

// })

// gsap.from("#box",{
//     x:900,
//     y:300,
//     duration:2,
//     delay:1,
//     backgroundColor: "blue",
//     rotate:360,
//     scale:0.5


// // })

// gsap.to("h1",{
    
//     x:300,
//     duration:2,
//     delay:1,
//     color: "yellow",
   

// })
// gsap.to("h2",{
    
//     x:300,
//     duration:2,
//     delay:3,
//     color: "orange",
   

// })

// gsap.to("h3",{
    
//     x:300,
//     duration:2,
//     delay:5,
//     color: "salmon",
   

// })
// gsap.to("h1",{
//     x:600,
//     duration:2,
//     delay:0.5,
//     stagger:1,
//     repeat:1,
//     yoyo:true

// })
var t1 = gsap.timeline()
t1.to("h1",{
    x:600,
    duration:1
})
t1.to("h2",{
    x:700,
    duration:1
})
t1.to("h3",{
    x:800, 
    duration:1
})