const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://mongo:27017');

var Cat = mongoose.model('Cat', {name: String});

var kitty = new Cat({ name: 'Zildjian' });
kitty.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/cats', (req, res) => {
    Cat.find().exec((err, data) => {
        res.json(data);
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening on ${PORT}`);
});
