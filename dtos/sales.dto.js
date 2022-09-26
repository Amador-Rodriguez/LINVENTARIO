const Joi = require('joi');

const id = Joi.string().alphanum();
const codigo = Joi.number().integer().min(10);
const producto = Joi.string().min(3).max(50);
const precio = Joi.number().integer().min(1);
const fecha = Joi.string().min(10); //buscar para fecha
const cliente = Joi.string().min(3).max(50);
const cantidad = Joi.number().integer().min(1);

const createSalesDto = Joi.object({
  producto: producto.required(),
  codigo: codigo.required(),
  precio: precio.required(),
  fecha: fecha.required(),
  cliente: cliente.required(),
  cantidad: cantidad.required(),
});

const updateSalesDto = Joi.object({
  producto: producto.required(),
  codigo: codigo.required(),
  precio: precio.required(),
  fecha: fecha.required(),
  cliente: cliente.required(),
  cantidad: cantidad.required(),
});

const getSalesId = Joi.object({
  id: id.required(),
});

module.exports = {
  createSalesDto,
  updateSalesDto,
  getSalesId,
};
