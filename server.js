const express = require("express");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(bodyParser.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,  // Store in .env for security
});
const openai = new OpenAIApi(configuration);

app.post("/api/chatbot", async (req, res) => {
    const { message } = req.body;
    
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `You are a helpful assistant for a Social Impact Bond investment platform. ${message}`,
            max_tokens: 150,
        });
        
        const botMessage = response.data.choices[0].text.trim();
        res.json({ reply: botMessage });
    } catch (error) {
        res.status(500).json({ reply: "I'm sorry, something went wrong. Please try again later." });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
