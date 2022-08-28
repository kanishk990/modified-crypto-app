import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const PORT = 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: "http://localhost:3000" // from which request will come 
};

const requestEndpoint = "https://api.wazirx.com/api/v2/tickers"; //request is to be forwarded to this public endpoint

app.get('/getData', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const response = await fetch(requestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});