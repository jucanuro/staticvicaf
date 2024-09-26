document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de la manera tradicional

    // Obtener los valores del formulario
    const businessName = document.getElementById('business-name').value;
    const ruc = document.getElementById('ruc').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const message = document.getElementById('message').value;

    // Aquí puedes manejar el envío, por ejemplo, usando fetch para enviar los datos a un servidor
    console.log('Datos del formulario:', {
        businessName,
        ruc,
        email,
        phoneNumber,
        message
    });

    // Mostrar una alerta de confirmación
    alert('¡Gracias por su mensaje! Nos pondremos en contacto pronto.');
    
    // Limpiar el formulario después de enviar
    document.getElementById('contact-form').reset();
});
