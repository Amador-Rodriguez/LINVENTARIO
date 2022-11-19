const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const recordSchema = new Schema({
  id: mongoose.Types.ObjectId,
  usuario: String,
  tipo: String,
  accion: String,
  fecha: Date
});
const model = mongoose.model('record', recordSchema);
module.exports = model;