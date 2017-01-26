const mongoose = require('mongoose');
const authorsSchema = require('../schemas/authors');

module.exports = mongoose.model('Author', authorsSchema);
