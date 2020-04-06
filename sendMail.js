function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "myportfoliowebsite0@gmail.com",
        Password: "MyPortfolio1?",
        To: 'wichniarekjakub89@gmail.com',
        From: "myportfoliowebsite@gmail.com",
        Subject: "Messege from " + document.getElementById('email').value,
        Body: document.getElementById('message').value,
    }).then(
        message => alert("Mail send successfully")
    );
}