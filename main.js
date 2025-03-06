

// Menú móvil
document.addEventListener('DOMContentLoaded', function() {

    const menuLinks = document.querySelectorAll('.menu a');
    const checkBox = document.getElementById('check');
        
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            checkBox.checked = false;
        });
    });

    // Opcional: Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const responseDiv = document.getElementById('response');
        
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            responseDiv.textContent = "¡Gracias por tu mensaje! Te responderé pronto.";
            contactForm.reset();
        });
    }
});