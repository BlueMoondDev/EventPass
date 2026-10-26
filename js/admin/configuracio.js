// configuracio.js
document.addEventListener('DOMContentLoaded', () => {
    const passwordForm = document.querySelectorAll('form')[0];
    const languageForm = document.querySelectorAll('form')[1];
    const logoutBtn = document.querySelector('section:last-of-type button');

    passwordForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Processant canvi de contrasenya...');
    });

    languageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedLang = languageForm.querySelector('select').value;
        console.log('Desant preferència d\'idioma:', selectedLang);
    });

    logoutBtn.addEventListener('click', () => {
        console.log('Tancant la sessió d\'administració...');
    });
});