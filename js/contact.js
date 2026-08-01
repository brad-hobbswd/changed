/*========================================================

CHANGED

CONTACT PAGE JAVASCRIPT

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

CLOSE MENU WHEN LINK CLICKED

========================================================*/

document.querySelectorAll(".navigation a").forEach(link=>{

link.addEventListener("click",()=>{

navigation.classList.remove("active");

navToggle.classList.remove("active");

});

});


/*========================================================

ESC KEY CLOSES MENU

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

const scrollPosition=document.documentElement.scrollTop;

const pageHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollPosition/pageHeight)*100;

progressBar.style.width=progress+"%";

}

window.addEventListener("scroll",updateProgressBar);

updateProgressBar();


/*========================================================

SCROLL TO TOP BUTTON

========================================================*/

function toggleScrollTop(){

if(window.scrollY>500){

scrollTop.classList.add("show");

}else{

scrollTop.classList.remove("show");

}

}

window.addEventListener("scroll",toggleScrollTop);

toggleScrollTop();


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

".contact-header,.contact-content,.ministry,.chapter-navigation"

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

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/*========================================================

CONTACT CARD HOVER EFFECTS

========================================================*/

document.querySelectorAll(".contact-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

card.style.boxShadow="0 30px 80px rgba(0,0,0,.18)";

card.style.transition=".35s ease";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

card.style.boxShadow="";

});

});


/*========================================================

FEATURE BOX HOVER EFFECTS

========================================================*/

document.querySelectorAll(

".encouragement-box,.scripture-callout"

).forEach(box=>{

box.addEventListener("mouseenter",()=>{

box.style.transform="translateY(-8px)";

box.style.transition=".35s ease";

});

box.addEventListener("mouseleave",()=>{

box.style.transform="translateY(0)";

});

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

END

========================================================*/

});