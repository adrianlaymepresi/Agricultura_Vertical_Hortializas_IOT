document.getElementById('toggleFan').addEventListener('click', function () {
    const fan = document.querySelector('.ventilador__img');
    const button = document.getElementById('toggleFan');
    const fanStatus = document.getElementById('fanStatus');

    fan.classList.toggle('rotar');

    if (fan.classList.contains('rotar')) {
        button.textContent = 'Encendido';
        fanStatus.textContent = 'Encendido';
        button.classList.add('encendido');
    } else {
        button.textContent = 'Apagado';
        fanStatus.textContent = 'Apagado';
        button.classList.remove('encendido');
    }
});
