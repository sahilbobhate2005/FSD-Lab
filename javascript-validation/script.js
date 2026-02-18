function validateForm() {

    const errors = document.getElementsByClassName('error');
    for (let err of errors) { err.innerText = ""; }

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value.trim();

    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Full name is required";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be 6+ characters";
        isValid = false;
    }

    if (isNaN(mobile) || mobile.length !== 10) {
        document.getElementById("mobileError").innerText = "Enter a valid 10-digit number";
        isValid = false;
    }

    if (isValid) {
        alert("Success! Form is valid and ready to send.");
    }

    return isValid;
}