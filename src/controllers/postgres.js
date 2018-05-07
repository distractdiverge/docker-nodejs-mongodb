const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Dog = require('../models/dog');

router.get('/', (req, res) => {
    Dog.findAll().then((data) => {
        res.json(data);
    });
});

router.post('/', (req, res) => {
    Dog
        .build({
            name: req.body.name,
            birthday: req.body.birthday
        })
        .save()
        .then((record) => {res.status(201).json(record)})
        .catch((error) => {res.status(500).json(error)});
});

module.exports = router;
