window.addEventListener('load', function() {
    const audio = document.createElement('audio');
    audio.src = 'audio/musica.mp3'; // Aquí coloca el nombre de tu archivo
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.5; // Puedes ajustar el volumen
    audio.style.display = 'none'; // Oculta el control si no lo quieres visible

    document.body.appendChild(audio);

    // Intentar reproducir automáticamente
    audio.play().catch(() => {
        // Si el navegador lo bloquea, creamos un botón para que el usuario permita reproducir
        const playButton = document.createElement('button');
        playButton.textContent = 'Reproducir música';
        playButton.style.position = 'fixed';
        playButton.style.top = '20px';
        playButton.style.right = '20px';
        playButton.style.padding = '10px 20px';
        playButton.style.fontSize = '16px';
        playButton.style.background = 'linear-gradient(135deg, #ff69b4, #ff1493)';
        playButton.style.color = 'white';
        playButton.style.border = 'none';
        playButton.style.borderRadius = '10px';
        playButton.style.cursor = 'pointer';
        playButton.style.zIndex = '9999';

        playButton.addEventListener('click', () => {
            audio.play();
            playButton.remove();
        });

        document.body.appendChild(playButton);
    });
});
