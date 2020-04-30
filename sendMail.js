function sendEmail() {
    var link = 'mailto:wichniarekjakub89@gmail.com?subject=Message from ' +
        document.getElementById('email').value +
        '&body=' + document.getElementById('message').value;
    window.location.href = link;
}