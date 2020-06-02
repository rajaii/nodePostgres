const express = require('express');

const fortunes = require('./data/fortunes.json')

const port = 3000

const server = express();

server.get('/fortunes', (req, res) => {
    res.json(fortunes)
});

server.listen(port, () => {
    console.log(`server running on port ${port}`);
});