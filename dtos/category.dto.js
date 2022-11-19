const Joi = require('joi'); 

const id = Joi.string().alphanum();
const name = Joi.string().min(3).max(50);

const createCategoryDto = Joi.object({
  name: name.required(),
});
const updateCategoryDto = Joi.object({
  name: name,
});

const getCategoryIdDto = Joi.object({
  id: id.required(),
});

module.exports = {
  createCategoryDto,
  updateCategoryDto,
  getCategoryIdDto,
};
