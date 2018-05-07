const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Cat = require('../models/cat');

router.get('/', (req, res) => {
    Cat.find().exec((err, data) => {
        res.json(data);
    });
});

router.post('/', (req, res) => {
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

router.delete('/:id', (req, res) => {
    Cat.remove({_id: req.params.id}, (err) => {
            if(err) {
                res.status(500).json({
                    message: err
                });
            } else {
                res.status(204).end();
            }
        });
});

module.exports = router;
