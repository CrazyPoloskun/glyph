module.exports = async (req, client) => {
    try {
        axios({
            method: 'GET',
            url: `https://api.datpmt.com/api/v2/dictionary/translate?string=${req.params['query']}&to_lang=en`,
        }).then((res) => { return res.data })
    } catch (error) {
        return {
            hasError: true,
            errorMsg: `An error occurred while creating text: ${error.message}`
        }
    }
}