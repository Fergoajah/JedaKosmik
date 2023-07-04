const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

    menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

var sliderNav = function(manual){
    btns.forEach((btn) => {
    btn.classList.remove("active");
    });

    slides.forEach((slide) => {
    slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
})

var searchBox = document.getElementById("myInput");

searchBox.addEventListener("focus",  function(){
});
searchBox.addEventListener("blur", function(){
    UL.style.display = "none";
});


function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    ul = document.getElementById("myUL");
    filter = input.value.toUpperCase();
    if(filter.trim().length < 1) {
        ul.style.display = "none";
        return false;
    } else {
        ul.style.display = "block";
    }
    
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) { 
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    } 
    }

}