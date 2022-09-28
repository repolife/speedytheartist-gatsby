exports.handler = async (event, context) => {
    const axios = require('axios')
    const qs = require('qs');

    const { SPOTIFY_CLIENT_ID: client_id, SPOTIFY_SECRET: client_secret } = process.env;
    const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');


    try {
        const token_url = 'https://accounts.spotify.com/api/token';
        const data = qs.stringify({ 'grant_type': 'client_credentials' });

        const response = await axios.post(token_url, data, {
            headers: {
                // 'Authorization': `Basic ${auth_token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        console.log(response)
        return {
            statusCode: 200,
            body: JSON.stringify({ data: response.data })
        }

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        }
    }


};