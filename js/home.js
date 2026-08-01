/*====================================================

CHANGED

HOME JAVASCRIPT

====================================================*/


document.addEventListener("DOMContentLoaded", () => {

initializeNavigation();

initializeScrollTop();

initializeAnimations();

initializeParallax();

initializeCurrentYear();

});


/*====================================================

STICKY NAVIGATION

====================================================*/

function initializeNavigation(){

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

}


/*====================================================

MOBILE MENU

====================================================*/

const navToggle = document.querySelector(".nav-toggle");

const navigation = document.querySelector(".navigation");

if(navToggle){

navToggle.addEventListener("click", () => {

navigation.classList.toggle("active");

navToggle.classList.toggle("active");

});

}

document.querySelectorAll(".navigation a").forEach(link=>{

link.addEventListener("click",()=>{

navigation.classList.remove("active");

navToggle.classList.remove("active");

});

});


/*====================================================

SCROLL TO TOP

====================================================*/

function initializeScrollTop(){

const button = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

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


/*====================================================

FADE ANIMATIONS

====================================================*/

function initializeAnimations(){

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".welcome,.book-overview,.featured-scripture,.journey,.author-preview,.cta,.chapter-card"

).forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});

}

/*====================================================

HERO PARALLAX

====================================================*/

function initializeParallax(){

const hero = document.querySelector(".hero");

if(!hero) return;

window.addEventListener("scroll",()=>{

const offset = window.pageYOffset;

hero.style.backgroundPosition =
`center ${offset * 0.35}px`;

});

}


/*====================================================

ACTIVE NAVIGATION

====================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navigation a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.offsetHeight;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(current && link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});


/*====================================================

SMOOTH ANCHOR LINKS

====================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/*====================================================

BUTTON RIPPLE EFFECT

====================================================*/

document.querySelectorAll(".button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple = document.createElement("span");

const rect = this.getBoundingClientRect();

const size = Math.max(rect.width,rect.height);

ripple.style.width = size + "px";

ripple.style.height = size + "px";

ripple.style.left =
e.clientX - rect.left - size/2 + "px";

ripple.style.top =
e.clientY - rect.top - size/2 + "px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*====================================================

KEYBOARD ACCESSIBILITY

====================================================*/

document.addEventListener("keyup",(event)=>{

if(event.key==="Escape"){

navigation.classList.remove("active");

if(navToggle){

navToggle.classList.remove("active");

}

}

});


/*====================================================

LAZY IMAGE ENHANCEMENTS

====================================================*/

document.querySelectorAll("img").forEach(image=>{

image.setAttribute("loading","lazy");

image.setAttribute("decoding","async");

});


/*====================================================

CURRENT YEAR

====================================================*/

function initializeCurrentYear(){

const copyright = document.querySelector(".copyright");

if(copyright){

const year = new Date().getFullYear();

copyright.innerHTML =
`© ${year} Bradley Hobbs. All Rights Reserved.`;

}

}


/*====================================================

PERFORMANCE

====================================================*/

window.addEventListener("pageshow",()=>{

document.body.classList.add("loaded");

});


/*====================================================

PREVENT DOUBLE TAP ON BUTTONS

====================================================*/

let clicked = false;

document.querySelectorAll(".button").forEach(button=>{

button.addEventListener("click",(e)=>{

if(clicked){

e.preventDefault();

return;

}

clicked = true;

setTimeout(()=>{

clicked = false;

},500);

});

});


/*====================================================

CONSOLE MESSAGE

====================================================*/

console.log(
"%cChanged",
"font-size:26px;font-weight:bold;color:#65459d;"
);

console.log(
"%cA Journey of Faith. A Life Transformed. A Purpose Revealed.",
"font-size:14px;color:#2b9db7;"
);


/*====================================================

END OF FILE

home.js
Version 1.0

====================================================*/