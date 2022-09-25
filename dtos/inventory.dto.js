const Joi = require('joi');

const id = Joi.string().alphanum();
const proveedor = Joi.string().min(3).max(50);
const producto =Joi.string().min(3).max(50);
const stock = Joi.number().integer().min(10);

const createProductDto = Joi.object({
    proveedor: proveedor.required(),
    producto: producto.required(),
    stock: stock.required(),
});

const updateProductDto = Joi.object({
    proveedor: proveedor,
    producto: producto,
    stock: stock,
});

const getProductId = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductDto,
  updateProductDto,
  getProductId,
};
