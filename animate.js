// Page1 Animations
const tl1 = gsap.timeline();

tl1.from('nav', {
    y: -100,
    duration: 1,
    delay: 1,
    stagger: 1,
    opacity: 0
});
tl1.from('#page1 h1', {
    duration: 1,
    stagger: 0.7,
    opacity: 0
});
tl1.from('#page1 p', {
    y: 300,
    duration: 0.6,
    delay: 0.4,
    stagger: 1,
    opacity: 0
});

var tl = gsap.timeline({scrollTrigger:{
    trigger:"#page2",
    start:'38% 50%',
    end:'100% 60%',
    scrub:2,
    pin:true,
    // markers:true,
}});
tl.to('#text',{
    top:"-8%",
},'a')
// tl.to('#text h1',{
//     fontSize:'2.2em',
// },'a')
tl.to('#text p',{
    fontSize:'1rem',
},'a')
.to('#pr1',{
    top: '39%',
},'a')
.to('#pr2',{
    top: '130%',
},'a')
.to('#pr2',{
    top: '43%',
},'b')
.to('#pr1',{
    width: '80vw',
    height: '50vh'
},'b')
.to('#pr3',{
    top: '130%'
},'b')
.to('#pr3',{
    top: '47%'
},'c')
.to('#pr2',{
    width:'85vw',
    height:'50vh'
},'c')
.to('#pr4',{
    top: '54%',
},'d')
.to('#pr3',{
    width:'90vw',
    height:'50vh'
},'d')
gsap.from('#page3 h1 span',{
    opacity:0,
    duration:1,
    delay:0.1,
    color:'#fff',
    scrollTrigger:{
        trigger:'#page3',
        start:'0% 40%',
        end:'80% 50%',
        stagger:1,
        scrub:2,
        // markers:true
    }
})

gsap.from('#page3 #bottom .skillCard',{
    // y:-55,
    scale:1,
    stagger:0.3,
    duration:0.5,
    repeat:-1,
    yoyo:1
})

var tl3=gsap.timeline({scrollTrigger:{
    trigger:'#page4',
    start:'0% 18%',
    end:'60% 80%',
    scrub:3,
    // markers:true,
    // duration:2,
}})
tl3.from('#page4Text h1:first-child',{
    x:-200,
    opacity:0,
},'a')
tl3.from('#page4Text h1:nth-child(2)',{
    // x:-500,
    opacity:0,
},'a')
tl3.from('#page4Text h1:last-child',{
    x:200,
    opacity:0,
},'a')
























// // Cursor effect
const cursor = document.querySelector('#cursor')
const main = document.querySelector('#main')


const updateCursorPosition = (e)=>{
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`

}

window.addEventListener('mousemove',(e)=>{
    updateCursorPosition(e)
})


