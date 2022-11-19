const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const providerSchema = new Schema({
  id: mongoose.Types.ObjectId,
  contacto: String,
  empresa: String,
  correo: String,
  direccion: String,
  telefono: Number
});
const model = mongoose.model('provider', providerSchema);
module.exports = model;