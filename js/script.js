// Example JavaScript functionality for button navigation
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    });
});
