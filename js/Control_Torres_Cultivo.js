// Cambiar estado de los botones
document.querySelectorAll('.icard__estado').forEach(button => {
    button.addEventListener('click', function () {
        if (button.textContent === 'En funcionamiento') {
            button.textContent = 'Detenido';
        } else {
            button.textContent = 'En funcionamiento';
        }
    });
});

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
        if (button.textContent === 'Apagado') {
            button.textContent = 'Encendido';
        } else {
            button.textContent = 'Apagado';
        }
    });
});

document.getElementById('toggleRiego').addEventListener('click', function () {
    const button = this;
    if (button.textContent === 'Sin Riego') {
        button.textContent = 'Correcto';
    } else {
        button.textContent = 'Sin Riego';
    }
});

