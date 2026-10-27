// gestionar_punts.js
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');
    const acteSelect = document.querySelector('main > select');
    const forms = document.querySelectorAll('form');
    
    const canviarNomForm = forms[0];
    const afegirPuntForm = forms[1];
    const eliminarBtn = forms[2].querySelector('button[type="button"]');

    searchInput.addEventListener('input', (e) => {
        console.log('Cercant punts de control:', e.target.value);
    });

    acteSelect.addEventListener('change', (e) => {
        console.log('Carregant punts per a l\'acte:', e.target.value);
    });

    canviarNomForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Desant el nou nom del punt...');
    });

    afegirPuntForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Afegint i assignant el nou punt...');
    });

    eliminarBtn.addEventListener('click', () => {
        console.log('Processant l\'eliminació del punt i la reassignació...');
    });
});