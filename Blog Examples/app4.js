
/*document.getElementsByClassName("form-info").addEventlistner("submit", function(event) {
    event.preventDefault(); //prevents form submissio
function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_0afbzme";
    const templateID = "template_prfom2i";

    emailjs
        .send(serviceID,templateID,params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert ("Email Sent!");
            }
        )
        .catch((err) => console.log(err));
}
*/

function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_0afbzme";
    const templateID = "template_prfom2i";

    emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}