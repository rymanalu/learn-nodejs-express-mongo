const mongoose = require('mongoose');
const booksSchema = require('../schemas/books');

module.exports = mongoose.model('Book', booksSchema);
