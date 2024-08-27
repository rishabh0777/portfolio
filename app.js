// Creating Cool Portfolio Animations-->


var tl = gsap.timeline();
const breakText = ()=>{
    var landingH1 = document.querySelector('#page1 h1');
    var landingH1Text = landingH1.textContent;
    var splittedText = landingH1Text.split('');
    var halfText = Math.floor(splittedText.length / 2)
    var clutter = ''

    splittedText.forEach((elem, id)=>{
        if(id< halfText){
            clutter+= `<span class='firstHalf'>${elem}</span>`
        }else{
            clutter+= `<span class='secondHalf'>${elem}</span>`
        }
        landingH1.innerHTML = clutter;
    })
}

breakText()



tl.from('#navPart1', {
    delay:1,
    duration:0.6,
    opacity:0,
    y:10
})

tl.from('#navPart2 ul a', {
    y:-10,
    opacity:0,
    duration:0.3,
    stagger:0.1
})

tl.from('#landing h1 .firstHalf', {
    y:70,
    opacity:0,
    duration:0.6,
    stagger:0.15,
},'z')
tl.from('#landing h1 .secondHalf', {
    y:70,
    opacity:0,
    duration:0.6,
    stagger:-0.15,
},'z')


tl.from('#landing h3',{
    y:-40,
    opacity:0,
    duration:0.6,
    stagger:0.1
}, 'b')
tl.from('#landing h3 span',{
    y:-20,
    duration:2,
    rotate:360,
    repeat:-1,
    yoyo:true,
    opacity:0
}, 'b')
tl.from('#scrollIcon i',{
    y:20,
    opacity:0,
    repeat:-1,
    yoyo:true,
    duration:0.7
})



const scrollIcon = document.querySelector('#scrollIcon');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScroll) {
        // Scrolling down
        gsap.to('#scrollIcon', {
            y: 20,
            opacity: 0,
            duration: 0.6,
        });
    } else if (scrollTop < lastScroll) {
        // Scrolling up
        gsap.to('#scrollIcon', {
            y: 20,
            opacity: 1,
           
        });
    }

    // Update last scroll position to the current position
    lastScroll = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});



// Elastic line Effect

const initialPath = "M 0 50 Q 600 50 1200 50";
const finalPath = "M 0 50 Q 600 50 1200 50";

const str = document.querySelector("#string");

str.addEventListener('mousemove', (event) => {
    const svgRect = str.querySelector('svg').getBoundingClientRect();
    const x = event.clientX - svgRect.left;
    const y = event.clientY - svgRect.top;

    const updatedPath = `M 0 50 Q ${x} ${y} 1200 50`;

    gsap.to('svg path', {
        attr: { d: updatedPath },
        duration: 0.3,
        ease: 'power3.out'
    });
});

str.addEventListener('mouseleave', () => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)'  // Adjust the elasticity parameters as needed
    });

    // Remove the event listener to avoid potential issues
    str.removeEventListener('mousemove', arguments.callee);
});

gsap.to('#page2 h1',{
    transform:'translateX(-100%)',
    scrollTrigger:{
        trigger:'#page2',
        scroller:'body',
        markers:false,
        start: 'top 0',
        end:'top -100%',
        scrub:4,
        pin:true,
    }
})




ScrollTrigger.matchMedia({
    // Apply for mobile devices
    "(max-width: 767px)": function() {
        console.log('Mobile ScrollTrigger Active');

        // Adjust start and end points to ensure they meet
        gsap.to('#page2 h1', {
            transform: 'translateX(-100%)',
            duration:2,
            scrollTrigger: {
                trigger: '#page2',
                scroller: 'body',
                markers: false, // Keep markers for debugging
                start: 'top 50%',  // Start when the top of #page2 hits the center of the viewport
                end: 'bottom 30%',    // End when the bottom of #page2 hits the top of the viewport
                scrub: 4,
                pin: false, // Set pin to true if you want to pin on mobile
            }
        });
    }
});

gsap.from('#prHead h3, #prHead h1',{
    y:20,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
        trigger:'#prHead',
        scroller:'body',
        markers:false,
        start:'top 50%',
        end:'top -20%',
        // scrub:2,
    }
})
tl.from('.img1',{
    y:-90,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
        trigger:'#prHead',
        scroller:'body',
        markers:false,
        start:'top 20%',
        end:'top -20%',
        scrub:2,
    }
},'y')
tl.from('.img2',{
    y:-90,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
        trigger:'#prHead',
        scroller:'body',
        markers:false,
        start:'top 20%',
        end:'top -20%',
        scrub:2,
    }
},'y')
tl.from('.img3',{
    y:90,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
        trigger:'#prHead',
        scroller:'body',
        markers:false,
        start:'top 20%',
        end:'top -20%',
        scrub:2,
    }
},'y')


tl.from('form, #sendMessHead h1',{
    y:-50,
    opacity:0,
    duration:1,
    scale:0.5,
    scrollTrigger:{
        trigger:'#sendMessHead',
        scroller:'body',
        markers:false,
        start:'top 50%',
        end: 'top 10%',
        scrub:true,
    }
})
tl.from('#page6',{
    y:-50,
    opacity:0,
    duration:1,
    scale:0.5,
    scrollTrigger:{
        trigger:'#page6',
        scroller:'body',
        markers:false,
        start:'top 100%',
        end: 'top 60%',
        scrub:true,
    }
})



var cursor = document.querySelector('#cursor')
var main = document.querySelector('main')

main.addEventListener('mousemove',(dets)=>{
    gsap.to(cursor,{
        x:dets.clientX,
        y:dets.clientY,
        duration:0.5,
        ease:'power.4'
    })
})

gsap.to("#skillScroll", {
    xPercent: -50, // Moves the entire container to the left by 100% of its width
    duration: 20,  // Adjust the duration to control the speed
    ease: "none",  // Linear animation to keep the speed constant
    repeat: -1,    // Infinite loop
    yoyo:true,    
    modifiers: {
        xPercent: gsap.utils.unitize((x) => parseFloat(x) % 100) // Ensures a seamless loop by keeping the translation within bounds
    }
});


