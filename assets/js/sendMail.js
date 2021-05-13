  
function sendMail(contactForm) {
    var tempParams = {
        from_name:document.getElementById('fullNameId').value,
        from_email:document.getElementById('exampleInputEmail1').value,
        message:document.getElementById('exampleFormControlTextarea1').value,
    };

    emailjs.send('service_nujzdlk', 'template_qonn19p', tempParams)
    .then(function(res) {
        if($('#fullNameId').val() == '') {
            $('#name-response').text('You need to enter your name');
            $('#fullNameId').focus();
            return false;
        }else if($('#exampleInputEmail1').val() == '') {
            $('#email-response').text('You need to enter your email');
            $('#exampleInputEmail1').focus();
            return false;
        }else if($('exampleFormControlTextarea1').val() == '') {
            $('#text-response').text('Leave a mensage please');
            $('#exampleFormControlTextarea1').focus();
            return false;
        }else {
            console.log('success', res.status);
            $('#text-response').html('<p>Your text has been sent</p>');
            $('#name-response').hide();
            $('#email-response').hide();
            $('#text-response').hide();
            return true;
        }
        
        
    })
    
}



