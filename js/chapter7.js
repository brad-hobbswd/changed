/*=========================================================

CHANGED

CHAPTER SEVEN PAGE SCRIPT

Author: Bradley Hobbs
Version: 1.0

=========================================================*/

"use strict";


/*=========================================================
PROGRESS BAR
=========================================================*/

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=window.scrollY;

const documentHeight=

document.documentElement.scrollHeight-
window.innerHeight;

const progress=(scrollTop/documentHeight)*100;

progressBar.style.width=progress+"%";

});


/*=========================================================
STICKY NAVBAR
=========================================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});


/*=========================================================
MOBILE NAVIGATION
=========================================================*/

const toggle=document.querySelector(".nav-toggle");

const navigation=document.querySelector(".navigation");

if(toggle && navigation){

toggle.addEventListener("click",()=>{

navigation.classList.toggle("active");

const expanded=

toggle.getAttribute("aria-expanded")==="true";

toggle.setAttribute(

"aria-expanded",

!expanded

);

});

}


/*=========================================================
CLOSE MOBILE MENU
=========================================================*/

document

.querySelectorAll(".navigation a")

.forEach(link=>{

link.addEventListener("click",()=>{

navigation.classList.remove("active");

toggle.setAttribute(

"aria-expanded",

"false"

);

});

});


/*=========================================================
SCROLL TO TOP
=========================================================*/

const scrollButton=

document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollButton.classList.add("show");

}

else{

scrollButton.classList.remove("show");

}

});

scrollButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*=========================================================
FADE IN ANIMATION
=========================================================*/

const observer=

new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},

{

threshold:.15

}

);

document

.querySelectorAll(

".chapter-content h2, .chapter-content p, blockquote, .scripture-callout, .chapter-callout"

)

.forEach(element=>{

element.classList.add("fade-up");

observer.observe(element);

});


/*=========================================================

END OF FILE

CHANGED

CHAPTER SEVEN PAGE SCRIPT

Author:
Bradley Hobbs

Version:
1.0

=========================================================*/