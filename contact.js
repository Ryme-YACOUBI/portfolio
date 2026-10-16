// Initialize EmailJS
emailjs.init({
    publicKey: "vuNfjN4dcU5BUNQO9",
});

// Get the contact form
const contactForm = document.getElementById("contact-form");

// Listen for form submission
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_xvogaq4",
        "template_4d6xnug",
        contactForm
    )
    .then(() => {
        alert("Your message has been sent successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Unable to send your message. Please try again.");
    });
});