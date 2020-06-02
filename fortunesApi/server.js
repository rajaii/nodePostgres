const express = require('express');

const fortunes = require('./data/fortunes.json');

const server = express();

server.get('/fortunes', (req, res) => {
    res.json(fortunes)
});

module.exports = server;