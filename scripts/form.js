function validate_form() {
    const name = document.contactForm.contactName.value;
    const email = document.contactForm.contactEmail.value;
    const message = document.contactForm.contactMessage.value;

    if(name == "") {
        alert("Please enter your name!");
        return false;
    }
    if(email == "") {
        alert("Please enter your email!");
        return false;
    }
    if(message == "") {
        alert("Please enter your message!");
        return false;
    }

    const userMessage = {
        name: name,
        email: email,
        message: message
    }

    console.log(userMessage);

    return true;
}