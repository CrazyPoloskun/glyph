module.exports = async (req, client) => {
    try {
        const query = req.body.query;

        const resp = await client.chat({
            messages: [{ role: 'user', content: query }],
        });

        const answer = resp.choices[0]?.message.content;
        
        return {
            hasError: false, 
            text: answer
        }
    } catch (error) {
        return {
            hasError: true,
            errorMsg: `An error occurred while creating text: ${error.message}`
        }
    }
}