

// Validacion formulario
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {

    event.preventDefault(); // Evita el envio normal del formulario

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("response").innerText = "Message sent successfully!";
    } else {
        document.getElementById("response").innerText = "Please fill out all fields."
    }
});