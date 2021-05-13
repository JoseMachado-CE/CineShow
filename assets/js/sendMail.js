  
function sendMail(contactForm) {
    var tempParams = {
        from_name:document.getElementById('fullNameId').value,
        from_email:document.getElementById('exampleInputEmail1').value,
        message:document.getElementById('exampleFormControlTextarea1').value,
    };

    emailjs.send('service_nujzdlk', 'template_qonn19p', tempParams)
    .then(function(res) {
        console.log('success', res.status);
        
    })
    document.getElementById("form").reset();
    
}


