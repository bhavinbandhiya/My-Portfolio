//Javascript for Navigation Bar Effect on scrollbar

window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
}); 

//javascriipt of responsive navigation sidebar

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () =>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () =>{
        menuBtn.classList.remove("active");
        navigation.classList.remove("active"); 
    });
});

//javascriipt for scroll to top button

const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active",window.scrollY > 500);
});

//javascriipt for scroll back to top click scroll-to-top button

scrollBtn.addEventListener("click",() =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//javascriipt for reveal website element on scroll

window.addEventListener("scroll",reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50 ;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
}