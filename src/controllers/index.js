const express = require('express');
const router = express.Router();

router.use('/mongodb', require('./mongodb'));
router.use('/postgres', require('./postgres'));

router.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = router;
