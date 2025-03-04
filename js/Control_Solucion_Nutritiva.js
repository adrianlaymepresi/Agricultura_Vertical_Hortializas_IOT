/*let ph = 7;
let conductividad = 5.0;
let nivel = 75;

function actualizarMedidores() {
    // Reducir valores dentro del rango permitido
    ph = Math.max(0, ph - 1);
    conductividad = Math.max(0, (conductividad - 1).toFixed(1));
    nivel = Math.max(70, nivel - 5);

    document.getElementById('phValor').textContent = ph;
    document.querySelector('.progreso.ph').style.width = `${(ph / 14) * 100}%`;

    document.getElementById('conductividadValor').textContent = conductividad;
    document.querySelector('.progreso.conductividad').style.width = `${(conductividad / 10) * 100}%`;

    document.getElementById('nivelValor').textContent = `${nivel}%`;
    document.querySelector('.progreso.nivel').style.width = `${nivel}%`;
}

setInterval(actualizarMedidores, 3000);
actualizarMedidores(); */
