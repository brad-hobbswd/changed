/*========================================================

CHANGED
AUTHOR PAGE JAVASCRIPT

Author: Bradley Hobbs
Version: 2.0

========================================================*/

document.addEventListener("DOMContentLoaded", () => {

"use strict";

/*========================================================
ELEMENTS
========================================================*/

const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");
const progressBar = document.getElementById("progress-bar");
const scrollTop = document.getElementById("scrollTop");


/*========================================================
MOBILE NAVIGATION
========================================================*/

if(navToggle && navigation){

navToggle.addEventListener("click",()=>{

navigation.classList.toggle("active");
navToggle.classList.toggle("active");

});

document.querySelectorAll(".navigation a").forEach(link=>{

link.addEventListener("click",()=>{

navigation.classList.remove("active");
navToggle.classList.remove("active");

});

});

document.addEventListener("keydown",(event)=>{

if(event.key==="Escape"){

navigation.classList.remove("active");
navToggle.classList.remove("active");

}

});

}


/*========================================================
STICKY NAVIGATION
========================================================*/

function updateNavbar(){

if(!navbar) return;

if(window.scrollY>30){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

}

window.addEventListener("scroll",updateNavbar);
updateNavbar();


/*========================================================
READING PROGRESS BAR
========================================================*/

function updateProgress(){

if(!progressBar) return;

const scrollTopPosition=window.pageYOffset;

const documentHeight=

document.documentElement.scrollHeight-
window.innerHeight;

const progress=(scrollTopPosition/documentHeight)*100;

progressBar.style.width=progress+"%";

}

window.addEventListener("scroll",updateProgress);
window.addEventListener("resize",updateProgress);
updateProgress();


/*========================================================
SCROLL TO TOP
========================================================*/

if(scrollTop){

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

}


/*========================================================
FADE UP ANIMATION
========================================================*/

const fadeElements=document.querySelectorAll(

".author-header,.author-content,.author-mission,.chapter-navigation"

);

if("IntersectionObserver" in window){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

observer.unobserve(entry.target);

}

});

},{

threshold:.15

});

fadeElements.forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});

}else{

fadeElements.forEach(section=>{

section.classList.add("visible");

});

}


/*========================================================
CALLOUT HOVER EFFECT
========================================================*/

document.querySelectorAll(

".callout-box,.mission-box,.scripture-callout"

).forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.style.transform="translateY(-8px)";

});

box.addEventListener("mouseleave",()=>{

box.style.transform="translateY(0)";

});

});


/*========================================================
BLOCKQUOTE FADE
========================================================*/

document.querySelectorAll("blockquote").forEach(quote=>{

quote.style.opacity="0";
quote.style.transform="translateY(30px)";
quote.style.transition="all .9s ease";

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

quote.style.opacity="1";
quote.style.transform="translateY(0)";

observer.disconnect();

}

});

});

observer.observe(quote);

});


/*========================================================
REFLECTION HEADING HOVER
========================================================*/

document.querySelectorAll(".reflection-heading").forEach(title=>{

title.addEventListener("mouseenter",()=>{

if(title.classList.contains("gold")){

title.style.color="#e6cd96";

}else{

title.style.color="#65459d";

}

});

title.addEventListener("mouseleave",()=>{

if(title.classList.contains("gold")){

title.style.color="#c8a45d";

}else{

title.style.color="#1d2947";

}

});

});


/*========================================================
SMOOTH INTERNAL LINKS
========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(event){

const target=document.querySelector(this.getAttribute("href"));

if(target){

event.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

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
END
========================================================*/

});