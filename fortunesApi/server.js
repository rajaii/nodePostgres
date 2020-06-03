const fs = require('fs')
const express = require('express');
const bodyParser = require('body-parser');

const fortunes = require('./data/fortunes.json');

const server = express();

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to the Fortunes API<h1>');
})

server.get('/fortunes', (req, res) => {
    res.json(fortunes);
});

server.get('/fortunes/random', (req, res) => {
    res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

server.get('/fortunes/:id', (req, res) => {
    const fortune = fortunes.find(f => f.id == req.params.id);
    if (fortune) {
        res.status(200).json(fortune);
    } else {
        res.status(400).json({error: `fortune with id ${req.params.id} does not exist`});
    }
    
});



server.post('/fortunes', (req, res) => {
    fortunes.push(req.body)
    
    const {message, luckyNumber, spiritAnimal } = req.body;

    const fortuneIds = fortunes.map(f => f.id)

    const fortune = { id: (fortuneIds.length > 0 ? Math.max(...fortuneIds) : 0) + 1, message, luckyNumber, spiritAnimal };

    const newFortunes = fortunes.concat(fortune);

    fs.writeFile('./data/fortunes.json', JSON.stringify(newFortunes), err => console.log(err));

    res.json(newFortunes);



});





module.exports = server;