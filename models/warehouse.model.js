const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const warehousesSchema = new Schema({
  id: mongoose.Types.ObjectId,
  nombre: String,
  direccion: String,
  municipio: String,
  estado: String,
  pais: String,
  propietario: String
});
const model = mongoose.model('warehouses', warehousesSchema);
module.exports = model;