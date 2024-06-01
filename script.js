const weddingDate = new Date(2024, 8, 21, 19, 0, 0)

// Función para actualizar el contador cada segundo
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = weddingDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

document.addEventListener('DOMContentLoaded', function() {
    const moreInfoBtn = document.getElementById('more-info-btn');
    
    // Agregar evento 'click' al botón 'Mas info'
    moreInfoBtn.addEventListener('click', function() {
        // Obtener el atributo 'data-section' del botón
        const sectionId = this.getAttribute('data-section');
        // Obtener el elemento de la sección correspondiente
        const section = document.getElementById(sectionId);
        
        // Verificar si se encontró la sección
        if (section) {
            // Hacer scroll suavemente hacia la sección
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

var acc = document.getElementsByClassName("accordion-btn");

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    var myCarousel = new bootstrap.Carousel(document.querySelector('.carousel'), {
        interval: 9999999999 // Intervalo muy grande para que nunca se detenga
    });
});

document.getElementById('asistencia').addEventListener('change', function() {
    const camposAdicionales = document.getElementById('campos-adicionales');
    if (this.value === 'si') {
        camposAdicionales.style.display = 'block';
    } else {
        camposAdicionales.style.display = 'none';
    }
});

document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const confirmacion = document.getElementById('asistencia').value;
    if (confirmacion === 'no') {
        enviarMensajeNoAsistencia();
    } else {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const telefono = document.getElementById('telefono').value;
        const comida = document.getElementById('comida').value;
        const transporte = document.getElementById('transporte').value;
        const cantidadAdultos = document.getElementById('cantidad_adultos').value;
        const cantidadNinos = document.getElementById('cantidad_ninos').value;
        const acompanantes = document.getElementById('acompanantes').value;
        
        const mensaje = `
            Confirmación de Asistencia:
            Nombre: ${nombre}
            Apellido: ${apellido}
            Teléfono: ${telefono}
            Tipo de Comida: ${comida}
            Tipo de Mobilidad: ${transporte}
            Cantidad de Adultos: ${cantidadAdultos}
            Cantidad de Niños menores de 5 años: ${cantidadNinos}
            Acompañantes: ${acompanantes}
        `;
        enviarMensajeWhatsApp(mensaje);
    }
});

function enviarMensajeWhatsApp(mensaje) {
    // Reemplaza 'tu_numero' con tu número de teléfono en el formato internacional sin el signo +
    const numeroDestino = '5492235134880'; // Número de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Construye el enlace de WhatsApp con el mensaje
    const url = `https://wa.me/${numeroDestino}?text=${mensajeCodificado}`;

    // Abre el enlace en una nueva pestaña o ventana
    window.open(url);
}

function enviarMensajeNoAsistencia() {
    const mensaje = encodeURIComponent('Lamentablemente no podremos asistir.');

    // Reemplaza 'tu_numero' con tu número de teléfono en el formato internacional sin el signo +
    const numeroDestino = '5492235134880'; // Número de WhatsApp

    // Construye el enlace de WhatsApp con el mensaje
    const url = `https://wa.me/${numeroDestino}?text=${mensaje}`;

    // Abre el enlace en una nueva pestaña o ventana
    window.open(url);
}






