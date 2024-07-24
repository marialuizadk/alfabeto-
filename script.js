document.addEventListener('DOMContentLoaded', function() {
    const letrasForma = document.getElementById('letras-forma');
    const letrasCursiva = document.getElementById('letras-cursiva');

    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let letra of alfabeto) {
        // Letra de forma
        const divForma = document.createElement('div');
        divForma.classList.add('letra', 'letra-forma');
        divForma.textContent = letra;
        letrasForma.appendChild(divForma);

        // Letra cursiva
        const divCursiva = document.createElement('div');
        divCursiva.classList.add('letra', 'letra-cursiva');
        divCursiva.textContent = letra;
        letrasCursiva.appendChild(divCursiva);
    }
});
