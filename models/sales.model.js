const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const salesSchema = new Schema({
  id: mongoose.Types.ObjectId,
  fecha: Date,
  codigo: String,
  producto: String,
  cantidad: String,
  tipo: String,
  observaciones: String,
  cliente: String
});
const model = mongoose.model('sales', salesSchema);
module.exports = model;