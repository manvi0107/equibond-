// Modal logic for viewing the agreement
const modal = document.getElementById('agreement-modal');
const btn = document.getElementById('view-agreement');
const closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
