const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const salesSchema = new Schema({
  id: mongoose.Types.ObjectId,
  codigo: String,
  producto: String,
  precio: String,
  fecha: String,
  cliente: String
});
const model = mongoose.model('sales', salesSchema);
module.exports = model;