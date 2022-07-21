// document.addEventListener('DOMContentLoaded', () => {
const button = document.getElementById('btn');
button.addEventListener('click', (e) => {
    const count = Number(e.currentTarget.innerHTML) + 1;
    e.currentTarget.innerHTML = count;
});
    // });