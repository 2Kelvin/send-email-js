window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_3zl05qc', 'template_yqd8vcp', this)
            .then(function () {
                alert('SUCCESS! Your email has been sent.');
                document.getElementById('inpName').value = '';
                document.getElementById('inpEmail').value = '';
                document.getElementById('inpMessage').value = '';
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}