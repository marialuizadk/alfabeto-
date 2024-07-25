document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const letter = urlParams.get('letter');
    
    if (letter) {
        document.getElementById('letter-display').textContent = letter;
        document.getElementById('letter-info').textContent = letter;
        document.getElementById('letter-example').textContent = letter;
        
        const examplesContainer = document.getElementById('examples-container');
        
        for (let i = 1; i <= 5; i++) {
            const div = document.createElement('div');
            div.textContent = `${letter}-${i}`;
            div.classList.add('example');
            examplesContainer.appendChild(div);
        }
    }
});

