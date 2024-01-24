window.addEventListener('load', function () {
    // Mostrar el loader durante 1 segundo
    setTimeout(function () {
        // Muestra la alerta antes de cargar completamente la página
        showNamePrompt();
    }, 1000);
});

function showNamePrompt() {
    // Solicitar el nombre con una alerta personalizada y validar la entrada
    const nameInput = promptWithValidation("¿Cuál es tu nombre? (solo letras)", /^[A-Za-z]+$/);

    // Verificar si el usuario ingresó un nombre y limitarlo a 10 caracteres
    const limitedName = nameInput ? nameInput.substring(0, 10) : '';
    console.log('Nombre:', limitedName);

    // Ocultar el loader y mostrar el contenido principal
    hideLoaderAndShowContent();
}

function promptWithValidation(message, validationRegex) {
    let userInput = "";
    do {
        userInput = prompt(message);
    } while (userInput !== null && !validationRegex.test(userInput));
    
    return userInput;
}

function hideLoaderAndShowContent() {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    loader.style.display = 'none';
    content.style.display = 'block';
}

window.addEventListener('load', function () {
    // Ocultar el loader después de 5 segundos y mostrar el contenido principal
    setTimeout(function () {
        hideLoaderAndShowContent();
    }, 5000);

    document.getElementById('btnYes').addEventListener('click', function () {
        // Acción del botón "Sí" (si es necesario)
    });

    document.getElementById('btnNo').addEventListener('click', function () {
        hideNoButtonWithAnimation();
    });
});

function hideNoButtonWithAnimation() {
    const btnNo = document.getElementById('btnNo');
    btnNo.classList.add('btn-no-hidden');
    toggleRectangle();

    // Restaurar el botón "No" después de 2 segundos
    setTimeout(function () {
        btnNo.classList.remove('btn-no-hidden');
    }, 2000);
}

function toggleRectangle() {
    const rectangleContainer = document.querySelector('.content');
    const rectangle = createRectangle();

    rectangleContainer.appendChild(rectangle);
    applyFadeInOutAnimation(rectangle);

    // Desvanecer y eliminar el rectángulo después de 2 segundos
    setTimeout(function () {
        applyFadeOutAnimation(rectangle);
        setTimeout(function () {
            rectangleContainer.removeChild(rectangle);
        }, 500);
    }, 2000);
}

function createRectangle() {
    const rectangle = document.createElement('div');
    rectangle.id = 'customRectangle';
    rectangle.className = 'custom-rectangle';
    rectangle.innerHTML = '<h2>Ese botón no sirve JAJA</h2>';
    return rectangle;
}

function applyFadeInOutAnimation(element) {
    element.style.animation = 'fadeInOut 0.5s ease-in-out';
}

function applyFadeOutAnimation(element) {
    element.style.animation = 'fadeOut 0.5s ease-in-out';
    element.style.opacity = 0;
}
