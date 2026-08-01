/*========================================================

CHANGED

404 PAGE JAVASCRIPT

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

if(navigation){

navigation.classList.remove("active");

}

if(navToggle){

navToggle.classList.remove("active");

}

});

});


/*========================================================

ESC KEY

========================================================*/

document.addEventListener("keydown",event=>{

if(event.key==="Escape"){

navigation.classList.remove("active");

navToggle.classList.remove("active");

}

});


/*========================================================

SCROLL EVENTS

========================================================*/

window.addEventListener("scroll",()=>{


/*========================================================

STICKY NAVBAR

========================================================*/

if(window.scrollY>30){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}


/*========================================================

READING PROGRESS BAR

========================================================*/

const scrollTopPosition=document.documentElement.scrollTop;

const pageHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTopPosition/pageHeight)*100;

progressBar.style.width=progress+"%";


/*========================================================

SCROLL BUTTON

========================================================*/

if(window.scrollY>500){

scrollTop.classList.add("show");

}else{

scrollTop.classList.remove("show");

}

});


/*========================================================

SCROLL TO TOP

========================================================*/

if(scrollTop){

scrollTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


/*========================================================

FADE ANIMATION

========================================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:.15

});


document.querySelectorAll(

".error-header,.error-content,.chapter-navigation"

).forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});


/*========================================================

BLOCKQUOTE ANIMATION

========================================================*/

document.querySelectorAll("blockquote").forEach(quote=>{

quote.style.opacity="0";

quote.style.transform="translateY(30px)";

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

});


/*========================================================

HOVER EFFECTS

========================================================*/

document.querySelectorAll(

".encouragement-box,.scripture-callout,.chapter-link"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

card.style.transition=".35s ease";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});


/*========================================================

ACTIVE PAGE

========================================================*/

const currentPage=window.location.pathname.split("/").pop();

document.querySelectorAll(".navigation a").forEach(link=>{

if(link.getAttribute("href")===currentPage){

link.classList.add("active");

}

});


/*========================================================

SMOOTH ANCHOR LINKS

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

END

========================================================*/

});