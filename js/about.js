/*========================================================

CHANGED

ABOUT PAGE JAVASCRIPT

Author: Bradley Hobbs
Version: 1.0

========================================================*/


document.addEventListener("DOMContentLoaded",()=>{


/*========================================================

NAVIGATION

========================================================*/

const navToggle=document.querySelector(".nav-toggle");

const navigation=document.querySelector(".navigation");

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

STICKY NAVBAR

========================================================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});


/*========================================================

READING PROGRESS BAR

========================================================*/

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

progressBar.style.width=progress+"%";

});


/*========================================================

SCROLL TO TOP

========================================================*/

const scrollButton=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollButton.classList.add("show");

}else{

scrollButton.classList.remove("show");

}

});

scrollButton.addEventListener("click",()=>{

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

".story,.why,.purpose,.audience,.journey,.closing"

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

KEYBOARD ACCESSIBILITY

========================================================*/

document.addEventListener("keydown",(event)=>{

if(event.key==="Escape"){

navigation.classList.remove("active");

navToggle.classList.remove("active");

}

});


/*========================================================

SMOOTH INTERNAL LINKS

========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

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

END

========================================================*/

});

