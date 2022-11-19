const express = require('express');
const boom = require('@hapi/boom');
const CategoryService = require('../services/category.service');
const validatorHandler = require('./../middlewares/validator.handler');

const {
  createCategoryDto,
  updateCategoryDto,
  getCategoryIdDto,
} = require('../dtos/category.dto');

const service = new CategoryService();
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { limit } = req.query;
    const filter = req.body;
    const data = await service.findDB(limit, filter);
    res.json({
      success: true,
      message: 'Listo',
      data: data,
    });
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(createCategoryDto, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await service.findOneDB(id);
      res.json({
        success: true,
        message: 'Listo',
        data: data,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createCategoryDto, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try {
      const data = await service.createDB(body);
      res.json({
        success: true,
        message: 'Listo',
        data: data,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getCategoryIdDto, 'params'),
  validatorHandler(updateCategoryDto, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const data = await service.update(id, body);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const resp = await service.delete(id);
  res.json(resp);
});


/* 
router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 5;
  const cat = await service.find(limit);
  res.json(cat);
});

router.get(
  '/:id',
  validatorHandler(getCategoryId, 'params'),
  async (req, res, next) => {
  try{
  const {id} = req.params;
  const cat = await service.findOne(id);
  res.json({
    success: true,
    message: 'Aqui esta category por id',
    cat: cat,
  });
  } catch(error){
    next(error);
  }
});

router.get('/nombre/:nombre', async (req, res, next) => {
  try{
  const {nombre} = req.params;
  const cat = await service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      cat: cat,
  });
  } catch(error){
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createCategoryDto, 'body'),
  async (req, res, next) => {
  const body = req.body;
  try{
  const newCategory = await service.create(body);
  res.json({
      'succes' : true,
      message: 'creado category',
      data: newCategory,
  });
  }catch(error){
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getCategoryId, 'params'),
  validatorHandler(updateCategoryDto, 'body'),
  async (req, res) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.update(id,body);
  res.json({
      message: 'actualizacion category',
      data:result,
      id,
  });
  }catch(error){
    res.status(404).json({
      message: error.message
    });
  }
});

router.put(
  '/:id',
  validatorHandler(getCategoryId, 'params'),
  validatorHandler(updateCategoryDto, 'body'),
  async(req,res) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.replace(id,body);
  res.json({
      message: 'actualizacion completa category',
      data: body,
      id,
      result
  });
  }catch(error){
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete(
  '/:id',
  validatorHandler(getCategoryId, 'params'),
  async(req, res) => {
  const {id} = req.params;
  try{
    service.delete(id);
    res.json({
        message: 'eliminar',
        id,
    });
  }
  catch(error){
    res.status(404).json({
      message: error.message
    });
  }

});*/

module.exports = router;
