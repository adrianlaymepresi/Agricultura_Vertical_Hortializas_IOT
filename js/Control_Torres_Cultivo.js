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

document.addEventListener("DOMContentLoaded", () => {
    const botonesRiego = document.querySelectorAll(".toggle-riego");

    botonesRiego.forEach(boton => {
        boton.addEventListener("click", () => {
            if (boton.textContent === "Sin Riego") {
                boton.textContent = "Con Riego";
                boton.classList.add("encendido");
            } else {
                boton.textContent = "Sin Riego";
                boton.classList.remove("encendido");
            }
        });
    });
});



