const Joi = require('joi');

const id = Joi.string().alphanum();
const nombre = Joi.string().min(3).max(50);
const email = Joi.string().min(3).max(50);
const tienda = Joi.string().min(3).max(50);
const foto_perfil = Joi.string();
const tipo = Joi.string().min(3).max(50);

const createUsersDto = Joi.object({
    nombre: nombre.required(),
    email: email.required(),
    tienda: tienda.required(),
    foto_perfil: foto_perfil.required(),
    tipo: tipo.required(),
});

const updateUsersDto = Joi.object({
    nombre: nombre,
    email: email,
    tienda: tienda,
    foto_perfil: foto_perfil,
    tipo: tipo,
});

const getUsersId = Joi.object({
  id: id.required(),
});

module.exports = {
  createUsersDto,
  updateUsersDto,
  getUsersId,
};
