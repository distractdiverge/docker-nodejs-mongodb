const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Cat = require('../modules/cat');

router.get('/cats', (req, res) => {
    Cat.find().exec((err, data) => {
        res.json(data);
    });
});

router.post('/cats', (req, res) => {
    const aCat = new Cat({name: req.body.name});
    aCat.save((err) => {
        if(err) {
            res.status(500).json({
                message: "Error saving to database.",
                transportError: err
            })
        } else {
            res.status(201).json(aCat);
        }
    });
});

module.exports = router;
