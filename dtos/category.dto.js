const Joi = require('joi');

const id = Joi.string().alphanum();
const nombre = Joi.string().min(3).max(50);

const createCategoryDto = Joi.object({
    nombre: nombre.required(),
});

const updateCategoryDto = Joi.object({
    nombre: nombre,
});

const getProductId = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategoryDto,
  updateCategoryDto,
  getProductId,
};
