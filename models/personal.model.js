const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const personalSchema = new Schema({
  id: mongoose.Types.ObjectId,
  nombre: String,
  apellidos: String,
  correo: String,
  telefono: Number,
  extension: Number,
  area: String
});
const model = mongoose.model('personal', personalSchema);
module.exports = model;