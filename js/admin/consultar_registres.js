// consultar_registres.js
document.addEventListener('DOMContentLoaded', () => {
    const filterFormInputs = document.querySelectorAll('form select, form input');
    const sortButton = document.querySelector('section:nth-of-type(1) header button');
    const recordItems = document.querySelectorAll('section:nth-of-type(1) ul li');

    filterFormInputs.forEach(input => {
        input.addEventListener('change', () => {
            console.log('Aplicant filtres per consultar registres...');
        });
    });

    sortButton.addEventListener('click', () => {
        console.log('Invertint ordre de visualització dels registres...');
    });

    recordItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log('Mostrant detall del registre seleccionat...');
        });
    });
});