const express = require('express');
const router = express.Router();
const ProductService = require('../services/products.service');
const validatorHandler = require('./../middlewares/validator.handler');
const service = new ProductService();
const {
  createProductDto,
  updateProductDto,
  getProductId,
} = require('../dtos/products.dto');

router.get('/', async(req, res) =>{
  const {size} = req.query;
  const limit = size || 20;
  const inv = await service.find(limit);
  res.json(inv);
});
/*
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const product = await service.findOne(id);
    let statusCode = '200';
    let data = {
      success: true,
      message: 'Aqui esta',
      data: product
    };
    if(product == null) {
      statusCode = '400';
      data = {
        message: 'Error, no se encontro'
      };
    }
    res.status(statusCode).json(data);
});

 */
router.get(
  '/:id',
  validatorHandler(getProductId, 'params'),
  async (req, res, next) => {
  try{
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json({
      success: true,
        message: 'Aqui esta',
        data: product,
    });
  }catch (error) {
    next(error);
  }

});


router.get('/nombre/:nombre', async (req, res, next) => {
  try{
  const {nombre} = req.params;
  const inv = await service.findByName(nombre);
  res.json({
      message: 'Aqui esta',
      inv: inv,
  });
  }catch(error){
    next(error);
  }
});

router.post(
  '/',
  validatorHandler(createProductDto, 'body'),
  async (req, res, next) => {
  const body = req.body;
  try{
  const newProduct = await service.create(body);
  res.json({
      'succes' : true,
      message: 'creado',
      data: newProduct
  });
  }catch(error){
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.update(id,body);
  res.json({
      message: 'actualizacion',
      data:body,
      id,
      result
  });
  }catch(error) {
    next(error);
  }
});
/* */
router.patch('/:id', async (req, res) => { //este lo vamos a poner como un put ^
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.update(id,body);
  res.json({
      message: 'actualizacion',
      data:body,
      id,
      result
  });
  }catch(error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.put(
  '/:id',
  validatorHandler(getProductId, 'params'),
  validatorHandler(updateProductDto, 'body'),
  async(req,res) => {
  try{
  const {id} = req.params;
  const body = req.body;
  const result = await service.replace(id,body);
  res.json({
      message: 'actualizacion completa',
      data: result,
      id,
  });
  }catch(error){
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete(
  '/:id',
  validatorHandler(getProductId, 'params'),
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

});

module.exports = router;
