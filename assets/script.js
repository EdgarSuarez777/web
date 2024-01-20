// Evento de carga de la ventana
window.addEventListener('load', function () {
    // Función para mostrar y ocultar el cuadrado con animación
    function toggleSquare() {
        const square = document.createElement('div');
        square.className = 'custom-square';
        document.body.appendChild(square);

        // Activar animación de entrada después de un breve tiempo
        setTimeout(function () {
            square.style.animation = 'fadeInUp 1s ease-in-out';
            square.style.opacity = 1;
        }, 50);

        // Desactivar animación de entrada y activar animación de salida después de la mitad del tiempo de espera
        setTimeout(function () {
            square.style.animation = 'fadeOutDown 1s ease-in-out';
        }, 1000);

        // Eliminar el cuadrado después del tiempo total de espera (2 segundos)
        setTimeout(function () {
            square.remove();
        }, 2000);
    }

    // Ocultar el loader después de 3 segundos y mostrar el contenido principal
    setTimeout(function () {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 3000);

    // Eliminar evento click del botón "Sí"
    document.getElementById('btnYes').addEventListener('click', function () {
        // Acción del botón "Sí" (si es necesario)
    });

    // Agregar evento click al botón "No"
    document.getElementById('btnNo').addEventListener('click', function () {
        this.classList.add('btn-no-hidden');
        toggleSquare();
        setTimeout(function () {
            document.getElementById('btnNo').classList.remove('btn-no-hidden');
        }, 2000);
    });
});
