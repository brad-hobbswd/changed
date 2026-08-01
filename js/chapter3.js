/*========================================================

CHANGED

CHAPTER THREE SCRIPT

Author: Bradley Hobbs
Version: 1.0

========================================================*/


/*========================================================

NAVIGATION TOGGLE

========================================================*/

const navToggle=document.querySelector(".nav-toggle");

const navigation=document.querySelector(".navigation");

if(navToggle){

navToggle.addEventListener("click",()=>{

navigation.classList.toggle("active");

});

document.querySelectorAll(".navigation a").forEach(link=>{

link.addEventListener("click",()=>{

navigation.classList.remove("active");

});

});

}


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

FADE IN ANIMATIONS

========================================================*/

const fadeElements=document.querySelectorAll(

".chapter-callout, .scripture-callout, .reflection-heading, blockquote"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

requestAnimationFrame(()=>{

entry.target.classList.add("visible");

});

}

});

},{

threshold:.15

});

fadeElements.forEach(element=>{

observer.observe(element);

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

KEYBOARD ACCESSIBILITY

========================================================*/

document.addEventListener("keyup",event=>{

if(event.key==="Escape"){

navigation.classList.remove("active");

}

});


/*========================================================

END OF FILE

CHANGED

CHAPTER THREE SCRIPT

Author:
Bradley Hobbs

Version:
1.0

========================================================*/