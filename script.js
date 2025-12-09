function togglePassword() {
    let pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function toggleEmail() {
    let email = document.getElementById("email");
    email.type = email.type === "email" ? "text" : "email";
}

function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (email === "toto@gmail.com" && pass === "toto123") {
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerHTML =
            "Invalid email or password!";
    }
}
