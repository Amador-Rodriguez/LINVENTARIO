const Joi = require('joi');

const id = Joi.string().alphanum();
const usuario = Joi.number().integer().min(10);
const tipo = Joi.string().min(3).max(50);
const accion = Joi.string().min(3).max(50);
const fecha = Joi.string().min(3).max(50);

const createRecordDto = Joi.object({
    usuario: usuario.required(),
    tipo: tipo.required(),
    accion: accion.required(),
    fecha: fecha.required(),
});

const updateProductDto = Joi.object({
    usuario: usuario,
    tipo: tipo,
    accion: accion,
    fecha: fecha,
});

const getRecordId = Joi.object({
  id: id.required(),
});

module.exports = {
  createRecordDto,
  updateProductDto,
  getRecordId,
};
