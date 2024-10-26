// JavaScript for filtering projects based on the selected domain
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Filter function
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Loop through each project card
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.classList.add('active'); // Show all cards
            } else {
                // Check if the card has the corresponding class for the filter
                if (card.classList.contains(filter)) {
                    card.classList.add('active'); // Show the card
                } else {
                    card.classList.remove('active'); // Hide the card
                }
            }
        });
    });
});

// Show all projects by default
document.querySelector('[data-filter="all"]').click();
