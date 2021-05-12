  
function sendMail(contactForm) {
    emailjs.send("gmail", "template_9zeau7y", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.email.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}