var moon = document.getElementById("moon");

moon.onclick = function() {
    if (document.body.classList.toggle("dark-theme")){
        moon.src = "sun.png";
    }else {
        moon.src = "moon.png";
    }
}

document.getElementsByClassName('form-info')[0].addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };
    
  
    // Send email using emailjs
    emailjs.send("service_0afbzme", "template_prfom2i", params)
    .then(function(response) {
      console.log ("Email sent successfully!", response);
      window.location.href = "contact2.html";
    }); 
});
