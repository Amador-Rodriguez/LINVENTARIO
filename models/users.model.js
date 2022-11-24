const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const userSchema = new Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  email: String,
  password: String,
  type: String
});
const model = mongoose.model('users', userSchema);
module.exports = model;
