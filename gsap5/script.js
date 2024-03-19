var t1=gsap.timeline()

function time(){
    var a=0
   setInterval( function(){
    //   a= Math.random()*15
      a=a + Math.floor(Math.random()*15)
      if(a<100){
      document.querySelector("#loader h1").innerHTML = a+"%"
    }
    else{
        a = 100
        document.querySelector("#loader h1").innerHTML = a+"%"
    }
      
    },150)
}
time()

t1.to("#loader h1",{
    scale:1.5,
    delay:0.5,
    duration:1,
    onStart:time()
})
t1.to("#loader ",{
    top:"-100vh",
    delay:0.5,
    duration:1.5

})






// gsap.to("#page1 h1",{
//     transform:"translateX(-100%)",
//     fontWeight:"100",
//     scrollTrigger:{
//         trigger:"#page1",
//         scroller:"body",
//         start:"top 0",
//         end:"top -200%",
//         scrub:2,
//         pin:true

//     }
// })