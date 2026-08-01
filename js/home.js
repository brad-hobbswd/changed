/*========================================================

CHANGED

HOME JAVASCRIPT

Author: Bradley Hobbs

========================================================*/


document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeScrollTop();

    initializeAnimations();

    initializeParallax();

});


/*========================================================

NAVIGATION

========================================================*/

function initializeNavigation(){

    const navbar = document.querySelector(".navbar");

    const navToggle = document.querySelector(".nav-toggle");

    const navigation = document.querySelector(".navigation");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    });

    navToggle.addEventListener("click", () => {

        navigation.classList.toggle("active");

        navToggle.classList.toggle("active");

    });

    document.querySelectorAll(".navigation a").forEach(link=>{

        link.addEventListener("click",()=>{

            navigation.classList.remove("active");

            navToggle.classList.remove("active");

        });

    });

}


/*========================================================

SCROLL TO TOP

========================================================*/

function initializeScrollTop(){

    const button = document.getElementById("scrollTop");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 500){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*========================================================

FADE ANIMATIONS

========================================================*/

function initializeAnimations(){

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },{

        threshold:.15

    });

    document.querySelectorAll(

        ".welcome, .book-overview, .featured-scripture, .journey, .author-preview, .callout, .chapter-card"

    ).forEach(section=>{

        section.classList.add("fade-up");

        observer.observe(section);

    });

}


/*========================================================

PARALLAX HERO

========================================================*/

function initializeParallax(){

    const banner = document.querySelector(".hero-banner");

    if(!banner) return;

    window.addEventListener("scroll",()=>{

        const offset = window.scrollY;

        banner.style.transform = `translateY(${offset * .18}px)`;

    });

}


/*========================================================

SMOOTH ANCHORS

========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*========================================================

ACTIVE PAGE

========================================================*/

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".navigation a").forEach(link=>{

    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }

});


/*========================================================

BUTTON RIPPLE

========================================================*/

document.querySelectorAll(".button").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left = e.clientX - rect.left - size/2 + "px";

        ripple.style.top = e.clientY - rect.top - size/2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*========================================================

LAZY LOADING

========================================================*/

document.querySelectorAll("img").forEach(image=>{

    image.loading = "lazy";

    image.decoding = "async";

});


/*========================================================

ESC KEY CLOSES MENU

========================================================*/

document.addEventListener("keyup",(event)=>{

    if(event.key==="Escape"){

        document.querySelector(".navigation").classList.remove("active");

        document.querySelector(".nav-toggle").classList.remove("active");

    }

});


/*========================================================

CONSOLE

========================================================*/

console.log(

"%cChanged",

"color:#65459d;font-size:26px;font-weight:bold;"

);

console.log(

"%cA Journey of Faith • A Life Transformed • A Purpose Revealed",

"color:#2c9eb8;font-size:14px;"

);


/*========================================================

END OF FILE

========================================================*/