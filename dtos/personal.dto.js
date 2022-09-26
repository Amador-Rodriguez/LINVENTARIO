const Joi = require('joi');

const id = Joi.string().alphanum();
const nombre =  Joi.string().min(3).max(50);
const apellidos = Joi.string().min(3).max(50);
const correo = Joi.string().min(3).max(50);
const telefono = Joi.string().min(10).max(10);
const extension = Joi.number().integer().min(0).max(100);
const area = Joi.string().min(3).max(50);

const createPersonalDto = Joi.object({
    nombre: nombre.required(),
    apellidos: apellidos.required(),
    correo: correo.required(),
    telefono: telefono.required(),
    extension: extension.required(),
    area: area.required(),
});

const updatePersonalDto = Joi.object({
    nombre: nombre,
    apellidos: apellidos,
    correo: correo,
    telefono: telefono,
    extension: extension,
    area: area,
});

const getPersonalId = Joi.object({
  id: id.required(),
});

module.exports = {
  createPersonalDto,
  updatePersonalDto,
  getPersonalId,
};
