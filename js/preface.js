/*========================================================

CHANGED

PREFACE PAGE JAVASCRIPT

Author: Bradley Hobbs
Version: 1.0

========================================================*/


document.addEventListener("DOMContentLoaded",()=>{


/*========================================================

ELEMENTS

========================================================*/

const navbar=document.querySelector(".navbar");

const navToggle=document.querySelector(".nav-toggle");

const navigation=document.querySelector(".navigation");

const progressBar=document.getElementById("progress-bar");

const scrollTop=document.getElementById("scrollTop");


/*========================================================

MOBILE NAVIGATION

========================================================*/

if(navToggle){

navToggle.addEventListener("click",()=>{

navigation.classList.toggle("active");

navToggle.classList.toggle("active");

});

}


/*========================================================

CLOSE MOBILE MENU

========================================================*/

document.querySelectorAll(".navigation a").forEach(link=>{

link.addEventListener("click",()=>{

navigation.classList.remove("active");

navToggle.classList.remove("active");

});

});


/*========================================================

ESCAPE KEY CLOSES MENU

========================================================*/

document.addEventListener("keydown",(event)=>{

if(event.key==="Escape"){

navigation.classList.remove("active");

navToggle.classList.remove("active");

}

});


/*========================================================

STICKY NAVBAR

========================================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});


/*========================================================

READING PROGRESS BAR

========================================================*/

function updateProgressBar(){

const windowScroll=document.documentElement.scrollTop;

const pageHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(windowScroll/pageHeight)*100;

progressBar.style.width=progress+"%";

}

window.addEventListener("scroll",updateProgressBar);

updateProgressBar();


/*========================================================

SCROLL TO TOP BUTTON

========================================================*/

function toggleScrollButton(){

if(window.scrollY>500){

scrollTop.classList.add("show");

}else{

scrollTop.classList.remove("show");

}

}

window.addEventListener("scroll",toggleScrollButton);

toggleScrollButton();


scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*========================================================

FADE ANIMATIONS

========================================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:.15

});


document.querySelectorAll(

".chapter-header,.chapter-content,.chapter-navigation"

).forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});


/*========================================================

ACTIVE NAVIGATION

========================================================*/

const currentPage=window.location.pathname.split("/").pop();

document.querySelectorAll(".navigation a").forEach(link=>{

if(link.getAttribute("href")===currentPage){

link.classList.add("active");

}

});


/*========================================================

SMOOTH INTERNAL LINKS

========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(event){

event.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/*========================================================

SUBTLE BLOCKQUOTE ANIMATION

========================================================*/

const quote=document.querySelector("blockquote");

if(quote){

quote.style.opacity="0";

quote.style.transform="translateY(25px)";

quote.style.transition="all .9s ease";

const quoteObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

quote.style.opacity="1";

quote.style.transform="translateY(0)";

}

});

});

quoteObserver.observe(quote);

}


/*========================================================

REFLECTION BOX ANIMATION

========================================================*/

const reflection=document.querySelector(".reflection-box");

if(reflection){

reflection.addEventListener("mouseenter",()=>{

reflection.style.transform="translateY(-6px)";

reflection.style.transition=".35s ease";

reflection.style.boxShadow="0 30px 80px rgba(0,0,0,.18)";

});

reflection.addEventListener("mouseleave",()=>{

reflection.style.transform="translateY(0)";

reflection.style.boxShadow="";

});

}


/*========================================================

CALLOUT BOX ANIMATION

========================================================*/

const callout=document.querySelector(".callout-box");

if(callout){

callout.addEventListener("mouseenter",()=>{

callout.style.transform="translateY(-6px)";

callout.style.transition=".35s ease";

});

callout.addEventListener("mouseleave",()=>{

callout.style.transform="translateY(0)";

});

}


/*========================================================

END

========================================================*/

});