/*========================================================

CHANGED

INTRODUCTION JAVASCRIPT

Author: Bradley Hobbs
Version: 1.0

========================================================*/


document.addEventListener("DOMContentLoaded", () => {

    initializeNavigation();

    initializeProgressBar();

    initializeScrollTop();

    initializeAnimations();

    initializeKeyboardAccessibility();

});


/*========================================================

NAVIGATION

========================================================*/

function initializeNavigation(){

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

}


/*========================================================

READING PROGRESS BAR

========================================================*/

function initializeProgressBar(){

    const progressBar = document.getElementById("progress-bar");

    window.addEventListener("scroll",()=>{

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        const progress =
        (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";

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

        ".chapter-header, .chapter-content, .scripture-callout, .reflection-box, .chapter-navigation"

    ).forEach(section=>{

        section.classList.add("fade-up");

        observer.observe(section);

    });

}


/*========================================================

KEYBOARD ACCESSIBILITY

========================================================*/

function initializeKeyboardAccessibility(){

    document.addEventListener("keyup",(event)=>{

        if(event.key==="Escape"){

            const navigation =
            document.querySelector(".navigation");

            const navToggle =
            document.querySelector(".nav-toggle");

            navigation.classList.remove("active");

            navToggle.classList.remove("active");

        }

    });

}


/*========================================================

SMOOTH INTERNAL LINKS

========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});


/*========================================================

LAZY LOAD IMAGES

========================================================*/

document.querySelectorAll("img").forEach(image=>{

    image.loading = "lazy";

    image.decoding = "async";

});


/*========================================================

ACTIVE PAGE

========================================================*/

const currentPage =
location.pathname.split("/").pop();

document.querySelectorAll(".navigation a").forEach(link=>{

    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }

});


/*========================================================

CONSOLE

========================================================*/

console.log(

"%cChanged",

"font-size:26px;font-weight:bold;color:#65459d;"

);

console.log(

"%cIntroduction • Does My Life Truly Reflect Jesus Christ?",

"font-size:14px;color:#2c9eb8;"

);


/*========================================================

END OF FILE

Introduction JavaScript

Changed

Author: Bradley Hobbs
Version: 1.0

========================================================*/