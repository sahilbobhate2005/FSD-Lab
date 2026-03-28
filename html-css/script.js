function validateForm() {
    const errorSpans = document.querySelectorAll('.error-text');
    errorSpans.forEach(span => span.innerText = "");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    
    let isValid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Please enter your name.";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email address.";
        isValid = false;
    }

    if (isNaN(mobile) || mobile.length !== 10) {
        document.getElementById("mobileError").innerText = "Enter a valid 10-digit mobile number.";
        isValid = false;
    }

    if (isValid) {
        alert("Thank you, " + name + "! Your message has been sent successfully.");
    }

    return isValid;
}