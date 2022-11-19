const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const productsSchema = new Schema({
  id: mongoose.Types.ObjectId,
  nombre: String,
  codigo: String,
  descripcion: String,
  marca: String,
  categoria: String,
  subcategoria: String,
  precio: Number,
  stock: Number,
  min_stock: Number,
  entry: Date,
  proveedor: String
});
const model = mongoose.model('products', productsSchema);
module.exports = model;