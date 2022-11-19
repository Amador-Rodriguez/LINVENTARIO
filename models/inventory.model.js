const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//MODELO DE LA BD
const inventorySchema = new Schema({
  id: mongoose.Types.ObjectId,
  proveedor: String,
  producto: String,
  stock: String,
});
const model = mongoose.model('inventory', inventorySchema);
module.exports = model;