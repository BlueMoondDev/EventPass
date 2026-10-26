// consultar_assistents.js
document.addEventListener('DOMContentLoaded', () => {
    const acteSelect = document.querySelector('select');
    const filterButtons = document.querySelectorAll('nav button');
    const attendeeList = document.querySelectorAll('section:nth-of-type(1) ul li');

    acteSelect.addEventListener('change', (e) => {
        console.log('Canviant acte a:', e.target.value);
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('Aplicant filtre:', e.target.textContent);
        });
    });

    attendeeList.forEach(attendee => {
        attendee.addEventListener('click', () => {
            console.log('Carregant dades del detall de l\'assistent seleccionat');
        });
    });
});