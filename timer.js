function countdownTime() {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var year = today.getFullYear();

    var hours = today.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    var minuts = today.getMinutes();
    if (minuts < 10) {
        minuts = "0" + minuts;
    }
    var seconds = today.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("clock").innerHTML =
        day + "/" + month + "/" + year + " | " + hours + ":" + minuts + ":" + seconds;
    setTimeout("countdownTime()", 1000);
}