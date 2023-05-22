var typed = new Typed(".title",{
    strings:["Software Engineer", "Front-End Developer", "Web Developer", "Tech Blogger"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
})


var moon = document.getElementById("moon");

moon.onclick = function() {
    if (document.body.classList.toggle("dark-theme")){
        moon.src = "sun.png";
    }else {
        moon.src = "moon.png";
    }
}