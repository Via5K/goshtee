function verifyLoginDetails() {
    var email = document.querySelector("#userMail").value;
    var pass = document.querySelector("#userPass").value;
    if (userEmail(email) && userPassword(pass)) {
        alert("Success Login");
        return true;
    }
    return false;
}

function userEmail(email) {
    for (var i = 0; i < email.length; i++) {
        if ((email[i] >= 'a' && email[i] <= 'z') || (email[i] >= 'A' && email[i] <= 'Z') || (email[i] >= '0' && email[i] <= '9') || email[i] == '_' || email[i] == '+' || email[i] == '.') {
            continue;
        } else return false;
    }
    return true;
}

function userPassword(pass) {
    if (pass.length < 8) return false;
    if (pass.length > 20) return false;
    return true;
}