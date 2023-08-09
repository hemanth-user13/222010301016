const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
    const urls = req.query.url;

    if (!urls || !Array.isArray(urls)) {
        return res.status(400).json({ error: 'Invalid URL parameter' });
    }

    const fetch_Promises = urls.map(async (url) => {
        try {
            const response = await axios.get(url, { timeout: 500 });
            return response.data.numbers || [];
        } catch (error) {
            return [];
        }
    });

    try {
        const results = await Promise.all(fetch_Promises);
        const merged_Numbers = [...new Set(results.flat())].sort((a, b) => a - b);

        res.json({ numbers: merged_Numbers });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});