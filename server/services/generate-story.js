const axios = require("axios")

module.exports = async (req, client) => {
    try {
        const query = req.body.query;

        const textType = req.body.textType
        const textLength = req.body.textLength
        const textLang = req.body.textLang

        console.log(`${query} - ${textType} - ${textLength} - ${textLang}`)

        const resp = await client.chat({
            messages: [{ 
                role: 'user', 
                content: `Напиши короткий ${textType} на английском языке. На основе базового сценария: `
                 + query
                 + `. Пришли ответ только в формате истории на указанном языке` }
            ],
        });

        const text = resp.choices[0]?.message.content;

        var translatedText = await axios({
            method: 'GET',
            url: `https://api.datpmt.com/api/v2/dictionary/translate?string=${text}&to_lang=${textLang}`,
        }).then((res) => {
            console.log(res.data)
            return res.data
        })
        return {
            hasError: false, 
            text: translatedText
        }
    } catch (error) {
        console.log(error)
        return {
            hasError: true,
            errorMsg: `An error occurred while creating text: ${error.message}`
        }
    }
}