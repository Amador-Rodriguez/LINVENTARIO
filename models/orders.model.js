const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const ordersSchema = new Schema({
  id: mongoose.Types.ObjectId,
  producto: String,
  precio: String,
  proveedor: String,
  direccion: String,
  fecha_pedido: String,
  aprox_entrega: String,
});
const model = mongoose.model('order', ordersSchema);
module.exports = model;