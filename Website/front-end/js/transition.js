// Page transition

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 2, stagger: 2 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");


//burger menu of index page
const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // toggle map 
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    });
    //Animate links
    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s forwards ${index / 5 + 2}s`;
    });
}

navSlide();

