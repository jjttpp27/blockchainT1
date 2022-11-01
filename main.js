
var encodedString;

function encrypt() {
    var baseString = document.getElementById("enc").value;
    encodedString = window.btoa(baseString);
    document.getElementById("dec").value = encodedString;
}

function decrypt() {
    var decodedString = window.atob(encodedString);
    document.getElementById("dec").value = decodedString;
}


