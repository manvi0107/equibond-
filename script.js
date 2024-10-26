// Simple chatbot interaction
const chatbot = document.querySelector('.chatbot');
const chatbotButton = document.createElement('button');
chatbotButton.textContent = 'Chat with us!';
chatbotButton.onclick = () => {
    const userQuestion = prompt("Ask me anything about our platform:");
    if (userQuestion) {
        const response = getChatbotResponse(userQuestion);
        alert(response);
    }
};
chatbot.appendChild(chatbotButton);

// Function to generate chatbot responses
function getChatbotResponse(question) {
    const responses = {
        "What is SIB?": "Social Impact Bonds (SIBs) are a type of contract that aims to fund social programs through private investment.",
        "How can I invest?": "You can invest by signing up on our platform and exploring available projects.",
        "What is fractional ownership?": "Fractional ownership allows you to hold a stake in a project based on your contribution.",
        // Add more predefined responses as needed
    };

    return responses[question] || "I'm sorry, I don't have an answer for that. Please check our FAQ section.";
}

// Subscription form handling
const form = document.querySelector('footer form');
form.onsubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;

    if (validateEmail(email)) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid email address.');
    }
};

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}