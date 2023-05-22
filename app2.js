var moon = document.getElementById("moon");

moon.onclick = function() {
    if (document.body.classList.toggle("dark-theme")){
        moon.src = "sun.png";
    }else {
        moon.src = "moon.png";
    }
}

