function crearRosa() {
    const rosa = document.createElement('img');
    rosa.src = 'img/rosa.png'; // Usa tu imagen de rosa (debe estar en la misma carpeta o cambia el path)
    rosa.style.position = 'fixed';
    rosa.style.top = '-50px';
    rosa.style.left = Math.random() * window.innerWidth + 'px';
    rosa.style.width = '30px';
    rosa.style.opacity = Math.random() * 0.7 + 0.3;
    rosa.style.zIndex = '9999';
    rosa.style.transition = 'transform 10s linear, opacity 10s linear';

    document.body.appendChild(rosa);

    setTimeout(() => {
        rosa.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
        rosa.style.opacity = '0';
    }, 50);

    setTimeout(() => {
        rosa.remove();
    }, 10000);
}

setInterval(crearRosa, 1000); // Cae una rosa cada segundo, despacio y suave
