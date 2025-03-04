document.addEventListener("DOMContentLoaded", () => {
    const musica = document.getElementById("musicaFondo");

    musica.volume = 0.5; // Ajusta el volumen si es necesario (0.0 - 1.0)

    musica.play().catch(error => {
        console.log("Reproducción automática bloqueada, usuario debe interactuar.");
    });
});

