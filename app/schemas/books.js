const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
  publishedAt: Date,
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});
