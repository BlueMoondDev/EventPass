document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');
    const createBtn = document.querySelector('main > button');
    const form = document.querySelector('form');
    const deleteBtn = document.querySelector('form button[type="button"]');
    const listItems = document.querySelectorAll('ul li');

    searchInput.addEventListener('input', (e) => {
        console.log('Filtrant actes per:', e.target.value);
    });

    createBtn.addEventListener('click', () => {
        console.log('Iniciant creació de nou acte...');
    });

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log('Carregant dades de l\'acte seleccionat al formulari');
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Desant canvis de l\'acte...');
    });

    deleteBtn.addEventListener('click', () => {
        console.log('Sol·licitant confirmació per eliminar l\'acte...');
    });
});