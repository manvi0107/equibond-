function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim()) {
        displayMessage(userInput, "user");
        document.getElementById("user-input").value = "";
        fetchChatbotResponse(userInput);
    }
}

function displayMessage(message, sender) {
    const messageContainer = document.createElement("div");
    messageContainer.className = sender === "user" ? "user-message" : "bot-message";
    messageContainer.innerText = message;
    document.getElementById("chatbot-messages").appendChild(messageContainer);
    messageContainer.scrollIntoView();
}

async function fetchChatbotResponse(message) {
    const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message })
    });
    const data = await response.json();
    displayMessage(data.reply, "bot");
}
