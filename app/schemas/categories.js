const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
  name: {type: String, required: true}
});
