const Joi = require('joi');

const id = Joi.string().alphanum();
const nombre = Joi.string().min(3).max(50);
const direccion = Joi.string().min(3).max(50);
const municipio = Joi.string().min(3).max(50);
const estado = Joi.string().min(3).max(50);
const pais = Joi.string().min(3).max(50);
const propietario = Joi.string().min(3).max(50);

const createWarehousesDto = Joi.object({
    nombre: nombre.required(),
    direccion: direccion.required(),
    municipio: municipio.required(),
    estado: estado.required(),
    pais: pais.required(),
    propietario: propietario.required(),
});

const updateWarehousesDto = Joi.object({
    nombre: nombre,
    direccion: direccion,
    municipio: municipio,
    estado: estado,
    pais: pais,
    propietario: propietario,
});

const getWarehousesId = Joi.object({
  id: id.required(),
});

module.exports = {
  createWarehousesDto,
  updateWarehousesDto,
  getWarehousesId,
};
