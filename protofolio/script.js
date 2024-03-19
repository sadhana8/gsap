function revealToSpan(){
   document.querySelectorAll(".reveal")
.forEach(function(elem){
   let parent = document.createElement("span");
   let child = document.createElement("span");
  //create two spans
   parent.classList.add("parent");
   child.classList.add("child");
   //parent and child both sets their respective classes
   //span parent gets child and child gets elem details
   child.innerHTML = elem.innerHTML;
   parent.appendChild(child);
   //elem replaces its value with parent span
   elem.innerHTML ="";
   elem.appendChild(parent);
});

}

revealToSpan();


var t1 = gsap.timeline();
t1
.from(".child span",{
   x:100,
   duration:1.4,
   stagger:.2,
   ease: Power3.easeInOut
})

.to(".parent .child",{
   y:"-100%",
   duration:1,
   ease: Circ.easeInOut
})

.to("#loader ",{
   height:0,
   duration:1,
   ease: Circ.easeInOut
})

.to("#green ",{
   top:0,
   height:"100%",
   duration:1,
   delay:-.8,
   ease: Circ.easeInOut
})

.to("#green ",{
   top:0,
   height:"0%",
   duration:1,
   delay:-.5,
   ease: Circ.easeInOut
})


