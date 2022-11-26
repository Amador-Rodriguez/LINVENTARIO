const Joi = require('joi');

const id = Joi.string().alphanum();
const fecha = Joi.string().max(100); 
const codigo = Joi.string().max(100); 
const producto = Joi.string().min(3).max(50);
const cantidad = Joi.number().integer().min(1);
const tipo = Joi.string().min(3).max(50);
const observaciones = Joi.string().min(3).max(50);
const cliente = Joi.string().max(100); 

const createSalesDto = Joi.object({
  fecha: fecha.required(),
  codigo: codigo.required(),
  producto: producto.required(),
  cantidad: cantidad.required(),
  tipo: tipo.required(),
  observaciones: observaciones.required(),
  cliente: cliente.required()
});

const updateSalesDto = Joi.object({
  fecha: fecha.required(),
  codigo: codigo.required(),
  producto: producto.required(),
  cantidad: cantidad.required(),
  tipo: tipo.required(),
  observaciones: observaciones.required(),
  cliente: cliente.required()
});

const getSalesId = Joi.object({
  id: id.required(),
});

module.exports = {
  createSalesDto,
  updateSalesDto,
  getSalesId,
};
