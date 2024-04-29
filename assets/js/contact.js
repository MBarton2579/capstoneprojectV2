function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mrbarton@ualr.edu",
        Password : "F2EBC2368B082B6C99E0A95CD274C54C7379",
        To : 'mrbarton@ualr.edu',
        From : document.getElementById('email').value,
        Subject : "Exercise Catalog",
        Body : "Name: " + document.getElementById('name').value
        + "<br> Email: " + document.getElementById('email').value
        + "<br> Phone: " + document.getElementById('phone').value
        + "<br> Subject: " + document.getElementById('subject').value
        + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert('Email Sent'));

}