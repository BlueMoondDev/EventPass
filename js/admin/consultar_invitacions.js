document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[type="search"]');
    const invitations = document.querySelectorAll('ul li');

    searchInput.addEventListener('input', (e) => {
        console.log('Cercant relació:', e.target.value);
    });

    invitations.forEach(invitation => {
        invitation.addEventListener('click', () => {
            console.log('Actualitzant secció de "Detall de la invitació"');
        });
    });
});