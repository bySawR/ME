const menuButton = document.getElementById('menuButton');
const closeButton = document.getElementById('closeButton');
const sideMenu = document.getElementById('sideMenu');

menuButton.addEventListener('click', () => {
    sideMenu.classList.add('open');
});

closeButton.addEventListener('click', () => {
    sideMenu.classList.remove('open');
});

// Close the menu if the user clicks outside of it
document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});
