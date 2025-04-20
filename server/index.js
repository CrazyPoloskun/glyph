const express = require('express')
const axios = require('axios')
const cors = require('cors')
const { GigaChat } = require('gigachat');
const { Agent } = require("node:https")
require('dotenv').config();

const PORT = process.env.PORT;
const STABILITY_AI_KEY = process.env.STABILITY_AI_KEY
const GIGACHAT_SCOPE = process.env.GIGACHAT_SCOPE
const GIGACHAT_AUTHORIZATION_KEY = process.env.GIGACHAT_AUTHORIZATION_KEY

const generateImage = require("./services/generate-image")
const generateText = require("./services/generate-text")
const generateStory = require("./services/generate-story")
const generateBookStory = require("./services/generate-book-story")
const translate = require("./services/translate")

const app = express()

app.use(cors())
app.use(express.json())

const httpsAgent = new Agent({
    rejectUnauthorized: false,
});

const GIGACHATClient = new GigaChat({
    timeout: 600,
    model: 'GigaChat',
    scope: GIGACHAT_SCOPE,
    credentials: GIGACHAT_AUTHORIZATION_KEY,
    httpsAgent: httpsAgent,
});

app.get("/api/status", async(req, res) => {
    res.status(200).json({
        status: "online"
    })
})

app.post('/api/generate-image', async (req, res) => {
    data = await generateImage(req, STABILITY_AI_KEY)

    if (data.hasError) {
        console.error(data.errorMsg)
        res.status(500).json({
            errorMsg: data.errorMsg
        })
    } else {
        res.status(200).json({
            imageUrl: data.imageUrl
        })
    }
});


app.post('/api/generate-text', async (req, res) => {
    data = await generateText(req, GIGACHATClient)

    if (data.hasError) {
        console.error(data.errorMsg)
        res.status(500).json({
            errorMsg: data.errorMsg
        })
    } else {
        res.status(200).json({
            text: data.text
        })
    }
});


app.post('/api/generate-story', async (req, res) => {
    data = await generateStory(req, GIGACHATClient)

    res.status(200).json({
        text: data.text
    })
});

app.post('/api/generate-book-story', async (req, res) => {
    data = await generateBookStory(req, GIGACHATClient)

    res.status(200).json({
        text: data.text
    })
});

app.post('/api/translate', async (req, res) => {
    data = await translate(req, res, GIGACHATClient)

    if (data.hasError) {
        console.error(data.errorMsg)
        res.status(500).json({
            errorMsg: data.errorMsg
        })
    } else {
        res.status(200).json({
            text: data.text
        })
    }
});


app.listen(PORT, () => {
    console.log(`[  INFO  ] The server is running on http://localhost:${PORT}`);
    
    setInterval(async () => {
        await GIGACHATClient.updateToken().catch((error) => {
            console.error("[  ERROR  ] Failed to update GIGACHAT Token!")
            process.exit(500)
        });
    }, 60000 * 20);
});
