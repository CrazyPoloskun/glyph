const axios = require("axios")

module.exports = async (req, stabilityAIKey) => {
    try {
        const query = req.body.query;

        var translatedText = await axios({
            method: 'GET',
            url: `https://api.datpmt.com/api/v2/dictionary/translate?string=${query}&to_lang=en`,
         }).then((res) => {
            console.log(res.data)
            return res.data
        })
        
        console.log(translatedText)

        const response = await axios({
            method: 'POST',
            url: 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${stabilityAIKey}`
            },
            data: {
                "text_prompts": [
                    {
                        "text": translatedText,
                        "weight": 1
                    }
                ],
                "cfg_scale": 7,  //  Guidance scale
                "clip_guidance_preset": "FAST_BLUE",  //  Настройки CLIP guidance
                "height": 1024,  //  Разрешение по высоте
                "width": 1024,   //  Разрешение по ширине
                "samples": 1,    //  Количество генерируемых изображений
                "steps": 30       // Детализация
            }
        })
    
    
        if (response.status === 200) {
            const imageBase64 = response.data.artifacts[0].base64;
            const imageUrl = `data:image/png;base64,${imageBase64}`;
    
            return {
                hasError: false,
                imageUrl: imageUrl 
            };
        } else {
            return {
                hasError: true,
                errorMsg: `Stability AI API Error: ${response.status} ${response.statusText}`
            }
        }
    
    } catch (error) {
        return {
            hasError: true,
            errorMsg: `An error occurred while generating the image: ${error.message}`
        }
    }
}