function sendMail(contactForm) {
    var tempParams = {
        from_name:$('#fullNameId').val(),
        from_email:$('#exampleInputEmail1').val(),
        message:$('#exampleFormControlTextarea1').val(),
    };

    emailjs.send('service_nujzdlk', 'template_qonn19p', tempParams)
        .then(function (res) {
            if ($('#fullNameId').val() == '') {
                $('#name-response').html('<p class="errMensage">You need to add your name</p>');
                $('#fullNameId').focus();
                return false;
            } else if ($('#exampleInputEmail1').val() == '') {
                $('#email-response').html('<p class="errMensage">You need to add your email</p>');
                $('#exampleInputEmail1').focus();
                return false;
            } else if ($('exampleFormControlTextarea1').val() == '') {
                $('#response-text').html('<p class="errMensage">Your need to leave a mensage</p>');
                $('#exampleFormControlTextarea1').focus();
                return false;
            } else {
                console.log('success', res.status);
                $('.text-response').html('<p class="sucsMensage">Your text has been sent</p>');
                $('#name-response').hide();
                $('#email-response').hide();
                $('#response-text').hide();
                $('#form')[0].reset();
                return true;
            }
        })
}