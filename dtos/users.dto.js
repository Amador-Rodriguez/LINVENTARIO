const Joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
//const joiPassword = Joi.extend(joiPasswordExtendCore);

//SCHEMA PARA DATOS REQUERIDOS Y LOGICA DE NEGOCIO
const name = Joi.string();
const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } });
const password = Joi.string();

  const type = Joi.string();

const loginDto = Joi.object({
  email: email.required(),
  password: password.required(),
});
const registerDto = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required(),
  type: type.required()
});

module.exports = { loginDto, registerDto};

/* 
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
*/