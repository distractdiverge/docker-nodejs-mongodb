const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017');

module.exports = mongoose.model('Cat', {name: String});
