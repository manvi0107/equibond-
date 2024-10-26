document.addEventListener('DOMContentLoaded', function () {
  const chatbotToggle = document.querySelector('.chatbot-button');
  const chatbotOverlay = document.getElementById('chatbot-overlay');
  const chatWindow = document.getElementById('chatbot-messages');
  const closeBtn = document.querySelector('.chatbot-close-btn');

  // Toggle chatbot overlay visibility
  chatbotToggle.addEventListener('click', function () {
    chatbotOverlay.style.display = chatbotOverlay.style.display === 'block' ? 'none' : 'block';
  });

  closeBtn.addEventListener('click', function () {
    chatbotOverlay.style.display = 'none';
  });

  // Function to send a message to the chatbot backend
  async function sendMessage(message) {
    try {
      const response = await fetch('chatbot backend.js', { // Replace with your actual backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
      });

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error("Error:", error);
      return "Oops! Something went wrong.";
    }
  }

  // Chat elements
  const chatInput = document.getElementById('chatbot-input');
  const chatSubmit = document.getElementById('chatbot-send-btn');

  // Handle message sending
  chatSubmit.addEventListener('click', async () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Display the user's message
    chatWindow.innerHTML += `<div class="user-message" style="margin-bottom: 10px; color: #acd9da;">${userMessage}</div>`;

    // Send message to the chatbot backend and get the response
    const botReply = await sendMessage(userMessage);

    // Display the bot's response
    chatWindow.innerHTML += `<div class="bot-message" style="margin-bottom: 10px; color: #7375db;">${botReply}</div>`;

    // Clear input field
    chatInput.value = '';

    // Auto-scroll to the bottom of the chat container
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });

  // Allow sending a message with the Enter key
  chatInput.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
      chatSubmit.click();
    }
  });
});
