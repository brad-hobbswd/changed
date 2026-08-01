/*========================================================

CHANGED

CHAPTER EIGHT JAVASCRIPT

Author: Bradley Hobbs
Version: 1.0

PART 1

========================================================*/


/*========================================================
WAIT FOR PAGE
========================================================*/

document.addEventListener("DOMContentLoaded",()=>{


/*========================================================
ELEMENTS
========================================================*/

const navbar=document.querySelector(".navbar");

const progressBar=document.getElementById("progress-bar");

const scrollTop=document.getElementById("scrollTop");

const navToggle=document.querySelector(".nav-toggle");

const navigation=document.querySelector(".navigation");

const navLinks=document.querySelectorAll(".navigation a");

const fadeElements=document.querySelectorAll(

".chapter-content p, blockquote, .scripture-callout, .chapter-callout, .reflection-heading, .chapter-navigation"

);


/*========================================================
STICKY NAVBAR
========================================================*/

function updateNavbar(){

if(window.scrollY>40){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

}

updateNavbar();

window.addEventListener(

"scroll",

updateNavbar,

{passive:true}

);


/*========================================================
READING PROGRESS BAR
========================================================*/

function updateProgress(){

const scrollTopPosition=

document.documentElement.scrollTop||

document.body.scrollTop;

const scrollHeight=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

const percent=

(scrollTopPosition/scrollHeight)*100;

progressBar.style.width=

percent+"%";

}

updateProgress();

window.addEventListener(

"scroll",

updateProgress,

{passive:true}

);


/*========================================================
END OF PART 1
========================================================*/

/*========================================================
MOBILE NAVIGATION
========================================================*/

if(navToggle&&navigation){

navToggle.addEventListener("click",()=>{

navigation.classList.toggle("active");

const expanded=

navToggle.getAttribute("aria-expanded")==="true";

navToggle.setAttribute(

"aria-expanded",

String(!expanded)

);

});

}


/*========================================================
CLOSE MENU AFTER CLICK
========================================================*/

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

if(window.innerWidth<=900){

navigation.classList.remove("active");

navToggle.setAttribute(

"aria-expanded",

"false"

);

}

});

});


/*========================================================
SCROLL TO TOP BUTTON
========================================================*/

function updateScrollButton(){

if(window.scrollY>500){

scrollTop.classList.add("show");

}else{

scrollTop.classList.remove("show");

}

}

updateScrollButton();

window.addEventListener(

"scroll",

updateScrollButton,

{passive:true}

);

scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*========================================================
END OF PART 2
========================================================*/

/*========================================================
FADE IN ANIMATIONS
========================================================*/

fadeElements.forEach(element=>{

element.classList.add("fade-up");

});

const observer=new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

observer.unobserve(entry.target);

}

});

},

{

threshold:.15

}

);

fadeElements.forEach(element=>{

observer.observe(element);

});


/*========================================================
WINDOW RESIZE
========================================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>900){

navigation.classList.remove("active");

navToggle.setAttribute(

"aria-expanded",

"false"

);

}

});


/*========================================================
END DOM READY
========================================================*/

});


/*========================================================

END OF FILE

CHANGED

CHAPTER EIGHT JAVASCRIPT

Author:
Bradley Hobbs

Version:
1.0

========================================================*/