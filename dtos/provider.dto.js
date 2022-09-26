const Joi = require('joi');

const id = Joi.string().alphanum();
const contacto =  Joi.string().min(3).max(50);
const empresa = Joi.string().min(3).max(50);
const correo = Joi.string().min(3).max(50);
const direccion = Joi.string().min(10).max(200);
const telefono = Joi.string().min(10).max(10);

const createProviderDto = Joi.object({
    contacto: contacto.required(),
    empresa: empresa.required(),
    correo: correo.required(),
    direccion: direccion.required(),
    telefono: telefono.required(),
});

const updateProviderDto = Joi.object({
  contacto: contacto,
  empresa: empresa,
  correo: correo,
  direccion: direccion,
  telefono: telefono,
});

const getProviderId = Joi.object({
  id: id.required(),
});

module.exports = {
  createProviderDto,
  updateProviderDto,
  getProviderId,
};
