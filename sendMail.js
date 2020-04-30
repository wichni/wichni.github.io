function sendEmail() {
    var link = 'mailto:wichniarekjakub89@gmail.com?subject=Message from ' +
        document.getElementById('email').value +
        '&body=' + document.getElementById('email').value;
    window.location.href = link;
}